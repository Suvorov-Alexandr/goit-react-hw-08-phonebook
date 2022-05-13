import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  setUserCredentials,
  clearUserCredentials,
  setUser,
} from "./auth/authSlice";
import { REHYDRATE } from "redux-persist";
import { createEntityAdapter } from "@reduxjs/toolkit";

const BASE_URL = "https://connections-api.herokuapp.com";

const contactsAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    extractRehydrationInfo(action, { reducerPath }) {
      if (action.type === REHYDRATE) {
        return action.payload[reducerPath];
      }
    },
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["contacts", "user"],
  endpoints: (builder) => ({
    fetchAllContacts: builder.query({
      query: () => "/contacts",
      transformResponse(response) {
        response.sort((a, b) => a.name.localeCompare(b.name));

        return contactsAdapter.addMany(
          contactsAdapter.getInitialState(),
          response
        );
      },
      providesTags: ["contacts"],
    }),
    fetchCurrentUser: builder.query({
      async queryFn(__, queryApi, _, baseQuery) {
        const persistedToken = queryApi.getState().auth.token;

        if (persistedToken === null) {
          return { data: "no token" };
        }

        try {
          const response = await baseQuery("/users/current");
          queryApi.dispatch(setUser(response.data));
          return response;
        } catch ({ error }) {
          console.log(error);
          return error.status;
        }
      },
      providesTags: ["user"],
    }),
    deleteContact: builder.mutation({
      query: (contactId) => ({
        url: `/contacts/${contactId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["contacts"],
    }),
    addContact: builder.mutation({
      query: (contact) => ({
        url: "/contacts",
        method: "POST",
        body: contact,
      }),
      invalidatesTags: ["contacts"],
    }),
    updateContact: builder.mutation({
      query: ({ id, ...contact }) => ({
        // responseHandler: (response) => response.url.text(),
        url: `/contacts/${id}`,
        params: contact,
        method: "PATCH",
        body: contact,
      }),
      invalidatesTags: ["contacts"],
    }),
    registerUser: builder.mutation({
      query: (user) => ({
        url: "/users/signup",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["contacts"],
    }),
    logInUser: builder.mutation({
      query: (user) => ({
        url: "/users/login",
        method: "POST",
        body: user,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const response = await queryFulfilled;
          dispatch(setUserCredentials(response.data));
        } catch ({ error }) {
          return error.status;
        }
      },
      invalidatesTags: ["contacts"],
    }),
    logOutUser: builder.mutation({
      query: () => ({
        url: "/users/logout",
        method: "POST",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(clearUserCredentials());
      },
    }),
  }),
});

export const {
  useFetchAllContactsQuery,
  useFetchCurrentUserQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useUpdateContactMutation,
  useRegisterUserMutation,
  useLogInUserMutation,
  useLogOutUserMutation,
} = contactsApi;

export { contactsApi };

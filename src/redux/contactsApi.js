import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://624067562aeb48a9af73945f.mockapi.io/contacts";

const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["contacts"],
  endpoints: (builder) => ({
    fetchAllContacts: builder.query({
      query: () => "/contacts",
      providesTags: ["contacts"],
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
      query: (contact) => ({
        url: `/contacts/${contact.id}`,
        method: "PUT",
        body: contact,
      }),
      invalidatesTags: ["contacts"],
    }),
  }),
});

export const {
  useFetchAllContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useUpdateContactMutation,
} = contactsApi;

export { contactsApi };

// updateContact: builder.mutation({
//       query(data) {
//         const { id, ...body } = data;
//         return {
//           url: `/contacts/${id}`,
//           method: "PUT",
//           body,
//         };
//       },
//       invalidatesTags: ["contacts"],
//     }),

import { contactsApi } from "./contactsApi";

const getContacts = contactsApi.endpoints.fetchAllContacts.select();
const updateContacts = contactsApi.endpoints.updateContact.select(); // del
const getFilter = (state) => state.filter;
const getToken = (state) => state.auth.token;

const getFilteredContacts = (state, contacts) => {
  const filter = getFilter(state);
  const filteredContacts = filter.toLowerCase();

  return contacts?.filter(
    ({ name, number }) =>
      name.toLowerCase().includes(filteredContacts) ??
      number.includes(filteredContacts)
  );
};

export {
  getContacts,
  getFilter,
  getToken,
  getFilteredContacts,
  updateContacts,
};

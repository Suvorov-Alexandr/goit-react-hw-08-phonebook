import { contactsApi } from "./contactsApi";

const getContacts = contactsApi.endpoints.fetchAllContacts.select();
const updateContacts = contactsApi.endpoints.updateContact.select(); // del
const getFilter = (state) => state.filter;

const getFilteredContacts = (state, contacts) => {
  const filter = getFilter(state);
  const filteredContacts = filter.toLowerCase();

  return contacts?.filter(
    ({ name, phone }) =>
      name.toLowerCase().includes(filteredContacts) ??
      phone.includes(filteredContacts)
  );
};

export { getContacts, getFilter, getFilteredContacts, updateContacts };

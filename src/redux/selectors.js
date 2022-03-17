const getContacts = (state) => state.contacts;
const getFilter = (state) => state.filter;

const getFilteredContacts = (state) => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const filteredContacts = filter.toLowerCase();

  return contacts.filter(
    ({ name, number }) =>
      name.toLowerCase().includes(filteredContacts) ??
      number.includes(filteredContacts)
  );
};

export { getContacts, getFilter, getFilteredContacts };

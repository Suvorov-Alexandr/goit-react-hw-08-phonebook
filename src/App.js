import "./AppContainer.styled";
import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import Container from "./AppContainer.styled";
import GlobalStyle from "./components/GlobalStyle";

const LS_KEY = "contacts";

function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [filter, setFilter] = useState("");

  useEffect(() => {
    const LSContacts = JSON.parse(localStorage.getItem(LS_KEY));

    if (LSContacts) {
      setContacts([...LSContacts]);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = (person) => {
    const inContacts = contacts.find((contact) => contact.name === person.name);

    if (inContacts) {
      alert(`${person.name} is already in contacts`);
      return;
    }
    setContacts((prevState) => [...prevState, person]);
  };

  const handleDeleteContact = (id) => {
    const contactsAfterDeletion = contacts.filter(
      (contact) => contact.id !== id
    );
    setContacts(contactsAfterDeletion);
  };

  const handleFilterChange = ({ currentTarget }) => {
    const value = currentTarget.value;
    setFilter(value);
  };

  const getFilteredContacts = () => {
    const filteredContacts = filter.toLowerCase();

    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(filteredContacts) ||
        number.includes(filteredContacts)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <Container>
      <GlobalStyle />
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter value={filter} handleInputChange={handleFilterChange} />
      <ContactList
        contacts={contacts}
        filteredContacts={filteredContacts}
        handleDelete={handleDeleteContact}
      />
    </Container>
  );
}

export default App;

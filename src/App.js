import "./AppContainer.styled";
import { Component } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import Container from "./AppContainer.styled";
import GlobalStyle from "./components/GlobalStyle";

const LS_KEY = "contacts";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem(LS_KEY));

    if (!contacts) {
      return;
    }
    this.setState({ contacts });
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;

    if (prevState.contacts !== contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(contacts));
    }
  }

  handleSubmit = (person) => {
    const inContacts = this.state.contacts.find(
      (el) => el.name === person.name
    );

    if (inContacts) {
      alert(`${person.name} is already in contacts`);
      return;
    }

    this.setState(({ contacts }) => {
      return {
        contacts: [...contacts, person],
      };
    });
  };

  handleDeleteContact = (id) => {
    const contacts = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({ contacts });
  };

  handleFilterChange = ({ currentTarget }) => {
    const value = currentTarget.value;
    this.setState({ filter: value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const filteredContacts = filter.toLowerCase();

    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(filteredContacts) ||
        number.includes(filteredContacts)
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
      <Container>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter
          value={this.state.filter}
          handleInputChange={this.handleFilterChange}
        />
        <ContactList
          contacts={this.state.contacts}
          filteredContacts={filteredContacts}
          handleDelete={this.handleDeleteContact}
        />
      </Container>
    );
  }
}

export default App;

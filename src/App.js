import "./AppContainer.styled";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import Container from "./AppContainer.styled";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}

export default App;

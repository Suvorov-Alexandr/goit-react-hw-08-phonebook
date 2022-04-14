import "AppContainer.styled";
import ContactForm from "components/ContactForm";
import ContactList from "components/ContactList";
import Filter from "components/Filter";
import Container from "AppContainer.styled";
import GlobalStyle from "components/GlobalStyle";
import FetchContacts from "components/FetchContacts";
import Toast from "components/Toast";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import ContactsIcon from "@mui/icons-material/Contacts";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <h1>
        <ContactPhoneIcon color="primary" /> Phonebook
      </h1>
      <ContactForm />
      <h2>
        <ContactsIcon color="primary" /> Contacts
      </h2>
      <Filter />
      <FetchContacts />
      <ContactList />
      <Toast />
    </Container>
  );
}

export default App;

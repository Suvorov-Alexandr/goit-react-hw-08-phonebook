import { useFetchAllContactsQuery } from "redux/contactsApi";
import ContactList from "components/ContactList";
import Loader from "components/Loader";
import Text from "./FetchContacts.styled";

function FetchContacts() {
  const { data, isFetching } = useFetchAllContactsQuery();
  const contacts = data ? Object.values(data.entities) : [];

  return (
    <>
      {isFetching ? <Loader /> : null}
      <>
        {contacts.length ? (
          <ContactList contacts={contacts} />
        ) : (
          <Text>No contacts added</Text>
        )}
      </>
    </>
  );
}

export default FetchContacts;

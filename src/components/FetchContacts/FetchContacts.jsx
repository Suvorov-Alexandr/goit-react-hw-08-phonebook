import { useFetchAllContactsQuery } from "redux/contactsApi";
import ContactList from "components/ContactList";
import Loader from "components/Loader";
import { Wrapper } from "../ContactList/ContactList.styled";
import Text from "./FetchContacts.styled";

function FetchContacts() {
  const { data: contacts = [], isFetching } = useFetchAllContactsQuery();

  return (
    <Wrapper>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          {contacts.length === 0 ? (
            <Text>No contacts added</Text>
          ) : (
            <ContactList contacts={contacts} />
          )}
        </>
      )}
    </Wrapper>
  );
}

export default FetchContacts;

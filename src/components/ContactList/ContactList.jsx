import { useSelector } from "react-redux";
import { Wrapper, Text, List } from "./ContactList.styled";
import { getFilteredContacts } from "redux/selectors";
import ContactItem from "components/ContactItem";

function ContactList({ contacts }) {
  const filteredContacts = useSelector((state) =>
    getFilteredContacts(state, contacts)
  );

  return (
    <Wrapper>
      <List>
        {filteredContacts?.length === 0 ? (
          <Text>Nothing found</Text>
        ) : (
          filteredContacts?.map(({ id, name, phone }) => (
            <ContactItem key={id} id={id} name={name} phone={phone} />
          ))
        )}
      </List>
    </Wrapper>
  );
}

export default ContactList;

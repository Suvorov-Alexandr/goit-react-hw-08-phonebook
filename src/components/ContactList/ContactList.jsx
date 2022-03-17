import { useSelector, useDispatch } from "react-redux";
import { Wrapper, Text, List, Item, Button } from "./ContactList.styled";
import * as actions from "../../redux/actions";
import { getContacts, getFilteredContacts } from "../../redux/selectors";

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filteredContacts = useSelector(getFilteredContacts);
  const removeContact = (id) => dispatch(actions.deleteContact(id));

  return (
    <Wrapper>
      {contacts.length === 0 ? (
        <Text>No contacts added</Text>
      ) : (
        <List>
          {filteredContacts.length === 0 ? (
            <Text>Nothing found</Text>
          ) : (
            filteredContacts.map(({ id, name, number }) => (
              <Item key={id}>
                <Text>
                  {name}: {number}
                </Text>
                <Button type="button" onClick={() => removeContact(id)}>
                  Delete
                </Button>
              </Item>
            ))
          )}
        </List>
      )}
    </Wrapper>
  );
}

export default ContactList;

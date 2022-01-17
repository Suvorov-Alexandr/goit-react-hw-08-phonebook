import { Wrapper, Text, List, Item, Button } from "./ContactList.styled";
import PropTypes from "prop-types";

function ContactList({ contacts, filteredContacts, handleDelete }) {
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
                <Button type="button" onClick={() => handleDelete(id)}>
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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filteredContacts: PropTypes.arrayOf(PropTypes.object),
  handleDelete: PropTypes.func,
};

export default ContactList;

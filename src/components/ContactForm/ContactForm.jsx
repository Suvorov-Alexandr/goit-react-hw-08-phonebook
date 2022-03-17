import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper, Form, Label, Input, Button } from "./ContactForm.styled";
import * as actions from "../../redux/actions";
import { getContacts } from "../../redux/selectors";

function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleInputChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    name === "name" ? setName(value) : setNumber(value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const contact = {
      name: evt.currentTarget.name.value,
      number: evt.currentTarget.number.value,
    };

    contacts.find(({ name }) => name === contact.name)
      ? alert(`${contact.name} is already in contacts`)
      : dispatch(actions.addContact(contact));

    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleInputChange}
          />
          <Label>
            Number
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={handleInputChange}
            />
          </Label>
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </Wrapper>
  );
}

export default ContactForm;

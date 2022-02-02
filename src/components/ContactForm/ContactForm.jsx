import { Wrapper, Form, Label, Input, Button } from "./ContactForm.styled";
import { useState } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

function ContactForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleInputChange = ({ currentTarget }) => {
    const name = currentTarget.name;
    const value = currentTarget.value;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const name = evt.currentTarget.name.value;
    const number = evt.currentTarget.number.value;

    onSubmit({ name, number, id: nanoid() });

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

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;

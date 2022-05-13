import { useState } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Wrapper, Form, Label, Input, Button } from "./ContactForm.styled";
import { getContacts } from "redux/selectors";
import { useAddContactMutation } from "redux/contactsApi";

function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const { data } = useSelector(getContacts);
  const [addContact, { isLoading }] = useAddContactMutation();
  const contacts = data ? Object.values(data.entities) : [];

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    name === "name" ? setName(value) : setNumber(value);
  };

  const handlerSubmit = (evt) => {
    evt.preventDefault();

    const contact = {
      name: evt.target.name.value,
      number: evt.target.number.value,
    };

    const toastNameError = (name) =>
      toast.error(`Name "${name}" is already in contacts`);

    const toastPhoneError = (number) =>
      toast.error(`Phone "${number}" is already in contacts`);

    const toastOfSuccessAddition = () =>
      toast.success(
        `"${contact.name}" has been succesfully added to the phonebook`
      );

    const isNameExist = contacts.find(({ name }) => name === contact.name);
    if (isNameExist) {
      toastNameError(contact.name);
      return;
    }

    const isPhoneExist = contacts.find(
      ({ number }) => number === contact.number
    );
    if (isPhoneExist) {
      toastPhoneError(contact.number);
      return;
    }

    const isValidPhoneFormat = (phone) => {
      const validPhoneNumberFormat = /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
      return validPhoneNumberFormat.test(phone);
    };
    if (!isValidPhoneFormat(contact.number)) {
      return;
    }

    addContact(contact, toastOfSuccessAddition());
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <Wrapper>
      <Form onSubmit={handlerSubmit}>
        <Label>
          <Input
            margin="normal"
            size="small"
            id="outlined-required"
            label="Name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleInputChange}
            placeholder="Ivan Ivanov"
            autoComplete="off"
            helperText="Please enter name"
          />
          <Label>
            <Input
              margin="normal"
              size="small"
              id="outlined-required"
              label="Phone"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={handleInputChange}
              minLength={10}
              placeholder="+38(070)777-55-33"
              autoComplete="off"
              helperText="Please enter phone number in this format +38(090)777-55-33"
            />
          </Label>
        </Label>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Adding..." : "Add contact"}
        </Button>
      </Form>
    </Wrapper>
  );
}

export default ContactForm;

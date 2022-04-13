import { useState } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Wrapper, Form, Label, Input, Button } from "./ContactForm.styled";
import { getContacts } from "redux/selectors";
import { useAddContactMutation } from "redux/contactsApi";

function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { data: contacts } = useSelector(getContacts);
  const [addContact, { isLoading }] = useAddContactMutation();

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    name === "name" ? setName(value) : setPhone(value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const contact = {
      name: evt.target.name.value,
      phone: evt.target.phone.value,
    };

    const toastNameError = (name) =>
      toast.error(`Name "${name}" is already in contacts`);

    const toastPhoneError = (phone) =>
      toast.error(`Phone "${phone}" is already in contacts`);

    const toastSuccess = () =>
      toast.success(
        `"${contact.name}" has been succesfully added to the phonebook`
      );

    const isNameExist = contacts?.find(({ name }) => name === contact.name);
    if (isNameExist) {
      toastNameError(contact.name);
      return;
    }

    const isPhoneExist = contacts?.find(({ phone }) => phone === contact.phone);
    if (isPhoneExist) {
      toastPhoneError(contact.phone);
      return;
    }

    addContact(contact, toastSuccess());
    reset();
  };

  const reset = () => {
    setName("");
    setPhone("");
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
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
          />
          <Label>
            <Input
              margin="normal"
              size="small"
              id="outlined-required"
              label="Phone"
              type="tel"
              name="phone"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={phone}
              onChange={handleInputChange}
              minLength={10}
              placeholder="000-11-33-777"
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

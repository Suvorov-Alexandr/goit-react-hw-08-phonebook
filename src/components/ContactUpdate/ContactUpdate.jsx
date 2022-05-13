import { useState } from "react";
import toast from "react-hot-toast";
import "react-confirm-alert/src/react-confirm-alert.css";
import {
  Wrapper,
  ButtonsWrapper,
  Text,
  Form,
  Label,
  Input,
  Button,
} from "./ContactUpdate.styled";

function ContactUpdate({ name, number, onUpdate, onClose, isUpdating }) {
  const [rename, setRename] = useState(name);
  const [rephone, setRephone] = useState(number);

  const toastSuccessUpdating = () =>
    toast.success(
      `"${rename}" has been succesfully updated from the phonebook`
    );

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    name === "name" ? setRename(value) : setRephone(value);
  };

  const handlerSubmit = (evt) => {
    evt.preventDefault();

    const contact = {
      name: rename,
      number: rephone,
    };

    onUpdate(contact);
    onClose();
    toastSuccessUpdating();
  };

  return (
    <Wrapper>
      <h1>Updating contact</h1>
      <Text>{`Are you sure that you wanna update "${name}"?`}</Text>
      <Form onSubmit={handlerSubmit}>
        <Label>
          <b>Name</b>
          <Input
            type="text"
            name="name"
            value={rename}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <Label>
            <b>Phone</b>
            <Input
              type="tel"
              name="number"
              value={rephone}
              onChange={handleInputChange}
              autoComplete="off"
            />
          </Label>
        </Label>
        <ButtonsWrapper>
          <Button type="submit" disabled={isUpdating}>
            {isUpdating ? <b>Updating...</b> : <b>Update</b>}
          </Button>
          <Button type="button" onClick={onClose}>
            <b>No</b>
          </Button>
        </ButtonsWrapper>
      </Form>
    </Wrapper>
  );
}

export default ContactUpdate;

import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const addContact = createAction("phonebook/add", (contact) => {
  return {
    payload: {
      ...contact,
      id: nanoid(),
    },
  };
});
const deleteContact = createAction("phonebook/delete");
const inputСhanges = createAction("phonebook/input");

export { addContact, deleteContact, inputСhanges };

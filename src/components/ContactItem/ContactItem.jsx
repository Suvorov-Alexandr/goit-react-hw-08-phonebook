import toast from "react-hot-toast";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import {
  useDeleteContactMutation,
  useUpdateContactMutation,
} from "redux/contactsApi";
import { Text, Item, Button } from "./ContactItem.styled";
import ContactUpdate from "components/ContactUpdate";

function ContactItem({ id, name, number }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const [updateContact, { isLoading: isUpdating }] = useUpdateContactMutation();

  const toastSuccessDeleting = () =>
    toast.success(`"${name}" has been succesfully deleted from the phonebook`);

  const popupForDeleting = () => {
    confirmAlert({
      title: `Deleting contact`,
      message: `Are you sure that you wanna delete "${name}"?`,
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteContact(id) + toastSuccessDeleting(),
        },
        {
          label: "No",
          onClick: () => "",
        },
      ],
    });
  };

  const handleContactUpdate = (contact) => {
    const data = { ...contact, id };
    updateContact(data);
  };

  const popupForUpdating = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <ContactUpdate
            name={name}
            number={number}
            onUpdate={handleContactUpdate}
            onClose={onClose}
            isUpdating={isUpdating}
          />
        );
      },
    });
  };

  return (
    <Item key={id}>
      <Text>
        {name}:<br /> {number}
      </Text>
      <div>
        <Button
          type="button"
          disabled={isDeleting}
          onClick={() => popupForDeleting()}
        >
          {isDeleting ? <b>Deleting...</b> : <b>Delete</b>}
        </Button>
        <Button
          type="button"
          disabled={isUpdating}
          onClick={() => popupForUpdating()}
        >
          {isUpdating ? <b>Updating...</b> : <b>Update</b>}
        </Button>
      </div>
    </Item>
  );
}

export default ContactItem;

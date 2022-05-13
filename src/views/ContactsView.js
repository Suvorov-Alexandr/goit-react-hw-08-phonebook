import { Badge, Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import ContactsIcon from "@mui/icons-material/Contacts";
import * as Scroll from "react-scroll";
import ScrollTop from "components/ScrollTop";
import ContactForm from "components/ContactForm";
import Filter from "components/Filter";
import FetchContacts from "components/FetchContacts";
import ContactList from "components/ContactList";
import { useFetchAllContactsQuery } from "redux/contactsApi";

export const Link = Scroll.Link;
const scroll = Scroll.animateScroll;
export const onScroll = () => scroll.scrollTo("anchor");
// const onScrollToTop = () => scroll.scrollToTop();

function ContactsView(props) {
  const { data } = useFetchAllContactsQuery();
  const contacts = data ? Object.values(data.entities) : [];

  return (
    <>
      <h1 id="back-to-top-anchor">
        <ContactPhoneIcon color="primary" /> Phonebook
      </h1>
      <ContactForm />
      <Filter />
      <h2 id="anchor" className="element">
        <ContactsIcon color="primary" /> Contacts
        <Badge
          sx={{ ml: "20px" }}
          color="primary"
          badgeContent={contacts.length}
        />
      </h2>
      <FetchContacts />
      <ContactList />
      <ScrollTop {...props}>
        <Fab
          // onClick={onScrollToTop}
          color="secondary"
          size="small"
          aria-label="scroll back to top"
          // sx={{ m: "0px 0px 0px auto", display: "flex" }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}

export default ContactsView;

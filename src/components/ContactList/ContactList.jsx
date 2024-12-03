import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectNameFilter } from "../../redux/filtersSlice";
import { selectContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const searchValue = useSelector(selectNameFilter);
  const contacts = useSelector(selectContacts);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <ul className={s.listContact}>
      {searchValue === ""
        ? contacts.map((contact) => (
            <li key={contact.id}>
              <Contact contact={contact} />
            </li>
          ))
        : filteredContacts.map((contact) => (
            <li key={contact.id}>
              <Contact contact={contact} />
            </li>
          ))}
    </ul>
  );
};

export default ContactList;

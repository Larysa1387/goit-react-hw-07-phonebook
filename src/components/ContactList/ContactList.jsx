import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import PropTypes from "prop-types";

import { getVisibleContacts, getLoader } from "redux/contacts-selectors";
import * as contactsOperations from "redux/contacts-operations";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const loader = useSelector(getLoader);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const onDeleteContact = id =>
    dispatch(contactsOperations.fetchDeleteContact(id));
  return (
    <>
      {loader && <h2>Loading...</h2>}
      {contacts.length !== 0 ? (
        <ul className={s.contactList}>
          {contacts.map(({ id, name, number, contactType }) => {
            return (
              <li key={id} className={s.contactItem}>
                {
                  <Contact
                    name={name}
                    number={number}
                    contactType={contactType}
                    onDelete={() => onDeleteContact(id)}
                  />
                }
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="plug-paragraph">No contact exists</p>
      )}
    </>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.shape(PropTypes.string.isRequired)),
//   onDeleteContact: PropTypes.func.isRequired,
// };

export default ContactList;

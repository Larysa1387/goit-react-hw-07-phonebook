import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// import PropTypes from "prop-types";

import { getVisibleContacts } from "redux/contacts-selectors";
// import { deleteContact } from "redux/contacts-actions";
import * as contactsOperations from "redux/contacts-operations";

import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const onDeleteContact = id =>
    dispatch(contactsOperations.fetchDeleteContact(id));
  return (
    <>
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

// const mapStateToProps = state => {
//   const { filter, contactsArr } = state.contacts;
//   const normalizedFilter = filter.toLowerCase();
//   const visibleContacts = contactsArr.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter)
//   );
//   return { contacts: visibleContacts };
// };

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: contactId => dispatch(deleteContact(contactId)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
export default ContactList;

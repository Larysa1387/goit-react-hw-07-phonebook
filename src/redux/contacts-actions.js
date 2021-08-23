import { createAction } from "@reduxjs/toolkit";
import shortid from "shortid";
// import { ADD_CONTACT, DEL_CONTACT, CHANGE_FILTER, } from "./contactsActions-types";

export const addContact = createAction(
  "contacts/Add",
  ({ name, number, contactType }) => {
    return {
      payload: {
        id: shortid.generate(),
        name,
        number,
        contactType,
      },
    };
  }
);
export const deleteContact = createAction("contacts/Delete");
export const changeFilter = createAction("contacts/Filter");

//Было
// export const addContact = ({ name, number, contactType }) => ({
//   type: ADD_CONTACT,
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//     contactType,
//   },
// });

// export const deleteContact = contactId => ({
//   type: DEL_CONTACT,
//   payload: contactId,
// });

// export const changeFilter = value => ({
//   type: CHANGE_FILTER,
//   payload: value,
// });

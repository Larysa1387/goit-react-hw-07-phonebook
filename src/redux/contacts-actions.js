import { createAction } from "@reduxjs/toolkit";
import shortid from "shortid";

export const fetchContactsRequest = createAction(
  "contacts/fetchContactsRequest"
);
export const fetchContactsSuccess = createAction(
  "contacts/fetchContactsSuccess"
);
export const fetchContactsError = createAction("contacts/fetchContactsError");

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

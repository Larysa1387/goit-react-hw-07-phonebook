import { createAsyncThunk } from "@reduxjs/toolkit";
// import * as contactsActions from "./contacts-actions";
import * as contactsAPI from "services/ContactsAPI";

// export const fetchContacts = () => async dispatch => {
//   dispatch(contactsActions.fetchContactsRequest());
//   try {
//     const contacts = await contactsAPI.fetchContacts();
//     dispatch(contactsActions.fetchContactsSuccess(contacts));
//   } catch (error) {
//     dispatch(contactsActions.fetchContactsError(error.message));
//   }
// };

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAllContacts",
  async () => {
    const contacts = await contactsAPI.fetchContacts();
    return contacts;
  }
);

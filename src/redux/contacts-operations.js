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
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsAPI.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  "contacts/fetchAddContacts",
  async ({ name, number, contactType }, { rejectWithValue }) => {
    try {
      const contact = await contactsAPI.fetchAddContact(
        name,
        number,
        contactType
      );
      return contact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchDeleteContact = createAsyncThunk(
  "contacts/fetchDeleteContacts",
  async (id, { rejectWithValue }) => {
    try {
      const contacts = await contactsAPI.fetchDeleteContact(id);
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

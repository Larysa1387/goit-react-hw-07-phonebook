import { combineReducers } from "redux";
import { /*createAction,*/ createReducer } from "@reduxjs/toolkit";
import { changeFilter } from "./contacts-actions";
import {
  fetchContacts,
  fetchAddContact,
  fetchDeleteContact,
} from "./contacts-operations";

const contactsArrReducer = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [fetchAddContact.fulfilled]: (state, action) => [...state, action.payload],
  [fetchDeleteContact.fulfilled]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const errorReducer = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
  [fetchAddContact.rejected]: (_, action) => action.payload,
  [fetchAddContact.pending]: () => null,
  [fetchDeleteContact.rejected]: (_, action) => action.payload,
  [fetchDeleteContact.pending]: () => null,
});

const isLoadingReducer = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [fetchAddContact.pending]: () => true,
  [fetchAddContact.fulfilled]: () => false,
  [fetchAddContact.rejected]: () => false,
  [fetchDeleteContact.pending]: () => true,
  [fetchDeleteContact.fulfilled]: () => false,
  [fetchDeleteContact.rejected]: () => false,
});

const filterReducer = createReducer("", {
  [changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  contactsArr: contactsArrReducer,
  filter: filterReducer,
  loader: isLoadingReducer,
  error: errorReducer,
});

import { combineReducers } from "redux";
import { /*createAction,*/ createReducer } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  changeFilter,
  // fetchContactsRequest,
  // fetchContactsSuccess,
  // fetchContactsError,
} from "./contacts-actions";
import { fetchContacts } from "./contacts-operations";

// const initialState = {
//   contacts: [],
//   filter: "",
// };

// const initialContacts = [
//   {
//     id: "id-1",
//     name: "Rosie Simpson",
//     number: "459-12-56",
//     contactType: "work",
//   },
//   {
//     id: "id-2",
//     name: "Hermione Kline",
//     number: "443-89-12",
//     contactType: "home",
//   },
//   {
//     id: "id-3",
//     name: "Eden Clements",
//     number: "645-17-79",
//     contactType: "other",
//   },
//   {
//     id: "id-4",
//     name: "Annie Copeland",
//     number: "227-91-26",
//     contactType: "work",
//   },
// ];

const contactsArrReducer = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const errorReducer = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
});

const isLoadingReducer = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

const filterReducer = createReducer("", {
  [changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  contactsArr: contactsArrReducer,
  filter: filterReducer,
  isLoadingReducer,
  errorReducer,
});

//Было:
// const contactsArrReducer = (state = initialContacts, { type, payload }) => {
//   switch (type) {
//     case ADD_CONTACT:
//       return [...state, payload];
//     case DEL_CONTACT:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = "", { type, payload }) => {
//   switch (type) {
//     case CHANGE_FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };

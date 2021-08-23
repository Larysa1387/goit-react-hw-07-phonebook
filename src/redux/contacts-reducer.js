import { combineReducers } from "redux";
import { /*createAction,*/ createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, changeFilter } from "./contacts-actions";

// const initialState = {
//   contacts: [],
//   filter: "",
// };

const initialContacts = [
  {
    id: "id-1",
    name: "Rosie Simpson",
    number: "459-12-56",
    contactType: "work",
  },
  {
    id: "id-2",
    name: "Hermione Kline",
    number: "443-89-12",
    contactType: "home",
  },
  {
    id: "id-3",
    name: "Eden Clements",
    number: "645-17-79",
    contactType: "other",
  },
  {
    id: "id-4",
    name: "Annie Copeland",
    number: "227-91-26",
    contactType: "work",
  },
];

const contactsArrReducer = createReducer(initialContacts, {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filterReducer = createReducer("", {
  [changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  contactsArr: contactsArrReducer,
  filter: filterReducer,
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

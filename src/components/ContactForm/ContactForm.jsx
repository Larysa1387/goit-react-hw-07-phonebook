import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { connect } from "react-redux";
import { getContacts } from "../../redux/contacts-selectors";
import { addContact } from "../../redux/contacts-actions";
// import store from "../../redux/store";
import PropTypes from "prop-types";
import shortid from "shortid";
import s from "./ContactForm.module.css";

// { contacts, onSubmit }
function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [contactType, setContactType] = useState("home");
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const contactInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const handleFormSubmit = e => {
    e.preventDefault();
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already exists in contacts`);
      return;
    }
    dispatch(addContact({ name, number, contactType }));
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
    setContactType("home");
  };

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      case "contactType":
        setContactType(value);
        break;
      default:
        return;
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className={s.ContactForm}>
      <div className={s.align}>
        <label htmlFor={contactInputId} className={s.inputLabel}>
          Name
          <input
            className={s.formInput}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            autoComplete="off"
            id={contactInputId}
            placeholder="Enter name"
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor={numberInputId} className={s.inputLabel}>
          Number
          <input
            className={s.formInput}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            id={numberInputId}
            placeholder="+380..."
            onChange={handleInputChange}
          />
        </label>
      </div>
      <p className={s.radioTitle}>Choose type of contact</p>
      <div className={s.radioAlign}>
        <label className={s.radioLabel}>
          <input
            type="radio"
            name="contactType"
            value="home"
            onChange={handleInputChange}
            checked={contactType === "home"}
          />
          Home
        </label>
        <label className={s.radioLabel}>
          <input
            type="radio"
            name="contactType"
            value="work"
            onChange={handleInputChange}
            checked={contactType === "work"}
          />
          Work
        </label>
        <label className={s.radioLabel}>
          <input
            type="radio"
            name="contactType"
            value="other"
            onChange={handleInputChange}
            checked={contactType === "other"}
          />
          Other
        </label>
      </div>
      <button className={s.btnSubmit} type="submit" disabled={!name}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape(PropTypes.string.isRequired)),
  // onSubmit: PropTypes.func.isRequired,
};

// const mapStateToProps = state => {
//   return { contacts: state.contacts.contactsArr };
// };

// const mapDispatchToProps = dispatch => ({
//   onSubmit: contact => dispatch(addContact(contact)),
// });

export default ContactForm;

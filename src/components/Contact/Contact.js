import React from "react";
import s from "./Contact.module.css";
import { ReactComponent as DeleteIcon } from "../icons/deleteIcon.svg";

const Contact = ({ name, number, contactType, onDelete }) => {
  return (
    <>
      <p>{name}</p>
      <div className={s.align}>
        <p>{number}</p>
        <p className={s.contactType}>({contactType})</p>
      </div>
      <button className={s.btnDelete} onClick={onDelete}>
        <DeleteIcon width="25" height="20" />
      </button>
    </>
  );
};

export default Contact;

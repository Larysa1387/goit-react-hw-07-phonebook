import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeFilter } from "../../redux/contacts-actions";
import s from "./Filter.module.css";

const Filter = ({ value, onChange }) => {
  return (
    <label className={s.inputLabel}>
      Find contact by name
      <input
        className={s.inputFilter}
        type="text"
        name="filter"
        value={value}
        placeholder="Start to type"
        onChange={onChange}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);

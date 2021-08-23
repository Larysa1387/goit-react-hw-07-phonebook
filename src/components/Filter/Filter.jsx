import React from "react";
// import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

// import { connect } from "react-redux";
import { getFilter } from "../../redux/contacts-selectors";
import { changeFilter } from "../../redux/contacts-actions";
import s from "./Filter.module.css";

// { value, onChange }
const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label className={s.inputLabel}>
      Find contact by name
      <input
        className={s.inputFilter}
        type="text"
        name="filter"
        value={filter}
        placeholder="Start to type"
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </label>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

// const mapStateToProps = state => ({
//   value: state.contacts.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(changeFilter(e.target.value)),
// });
export default Filter;

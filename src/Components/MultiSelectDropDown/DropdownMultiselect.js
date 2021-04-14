import React from "react";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

export default class DropDownMultiSelect extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = props.handleChange;
  }
  render() {
    const optionsArray = [
      { key: 0, label: "First Name" },
      { key: 1, label: "Last Name" },
      { key: 2, label: "Age" },
      { key: 3, label: "Descending" },
    ];

    return (
      <DropdownMultiselect
        options={optionsArray}
        name="sort-criteria"
        placeholder="Sort By:"
        // placeholderMultipleChecked="Sorted"
        handleOnChange={(selected) => this.handleChange(selected)}
      />
    );
  }
}

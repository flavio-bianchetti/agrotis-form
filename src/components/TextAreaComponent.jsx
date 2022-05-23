import React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";

const TextAreaComponent = ({
  dataTestId,
  label,
  maxLength,
  onChange,
  rows,
  value,
}) => {

  return (
    <TextField
      data-testid={ dataTestId }
      fullWidth
      helperText={ <span className="span-counter" >{ `${ value.length || 0}/${maxLength || 0}` }</span> }
      inputProps={ { maxLength: (maxLength) } }
      label={ label }
      multiline
      onChange={ onChange }
      rows={ rows }
      variant="standard"
    />
  );
};

TextAreaComponent.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  rows: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
}

export default TextAreaComponent;

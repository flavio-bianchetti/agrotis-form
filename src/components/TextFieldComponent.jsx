import React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";

const TextFieldComponent = ({
  error,
  dataTestId,
  helperText,
  label,
  maxLength,
  onChange,
  placeholder,
  value,
}) => {
  return (
    <TextField
      error={ error }
      data-testid={ dataTestId }
      fullWidth
      helperText={
        error
        ? `${helperText}`
        : <span className="span-counter" >{ `${ value.length || 0}/${maxLength || 0}` }</span>
      }
      inputProps={ { maxLength: maxLength } }
      label={ label }
      onChange={ onChange }
      placeholder={ placeholder }
      variant="standard"
      value={ value }
    />
  );
}

TextFieldComponent.propTypes = {
  error: PropTypes.bool.isRequired,
  dataTestId: PropTypes.string.isRequired,
  helperText: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default TextFieldComponent;

import React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";

const TextFieldComponent = ({
  error,
  dataTestId,
  helperText,
  label,
  params,
  placeholder,
}) => {

  return (
    <TextField
      error={ error }
      data-testId={ dataTestId }
      fullWidth
      helperText={ helperText }
      label={ label }
      placeholder={ placeholder }
      variant="standard"
      {...params}
    />
  );
}

TextFieldComponent.propTypes = {
  error: PropTypes.bool.isRequired,
  dataTestId: PropTypes.string.isRequired,
  helperText: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  params: PropTypes.object.isRequired,
}

export default TextFieldComponent;

import React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";

const TextAreaComponent = ({
  dataTestId,
  error,
  helperText,
  label,
  params,
  rows,
}) => {

  return (
    <TextField
      data-testId={ dataTestId }
      error={ error }
      helperText={ helperText }
      fullWidth
      label={ label }
      multiline
      variant="standard"
      rows={ rows }
      {...params}
    />
  );
};

TextAreaComponent.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  helperText: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  params: PropTypes.object.isRequired,
  rows: PropTypes.number.isRequired,
}

export default TextAreaComponent;

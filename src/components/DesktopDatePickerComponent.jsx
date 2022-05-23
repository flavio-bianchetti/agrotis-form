import React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

const DesktopDatePickerComponent = ({
  DesktopDataPickerLabel,
  DesktopDataPickerValue, 
  DesktopDataPickerOnChange,
  TextFieldComponentDataTestId,
  TextFieldComponentPlaceholder,
  TextFieldComponentError,
  TextFieldComponentHelperText,

}) => {
  return(
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label={ DesktopDataPickerLabel }
        inputFormat="dd/MM/yyyy"
        value={ DesktopDataPickerValue }
        onChange={ DesktopDataPickerOnChange }
        renderInput={
          (params) => {
            return <TextField
              data-testid={ TextFieldComponentDataTestId }
              { ...params }
              placeholder={ TextFieldComponentPlaceholder }
              error={ TextFieldComponentError }
              helperText={ TextFieldComponentError ? TextFieldComponentHelperText : "" }
              variant="standard"
            />
          }
        }
      />
    </LocalizationProvider>
  );
};

DesktopDatePickerComponent.propTypes = {
  DesktopDataPickerLabel: PropTypes.string.isRequired,
  DesktopDataPickerValue: PropTypes.string.isRequired,
  DesktopDataPickerOnChange: PropTypes.func.isRequired,
  TextFieldComponentDataTestId: PropTypes.string.isRequired,
  TextFieldComponentPlaceholder: PropTypes.string.isRequired,
  TextFieldComponentError: PropTypes.bool.isRequired,
  TextFieldComponentHelperText: PropTypes.element.isRequired,
};

export default DesktopDatePickerComponent;

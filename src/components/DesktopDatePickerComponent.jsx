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
          data-testId={ TextFieldComponentDataTestId }
          { ...params }
          placeholder={ TextFieldComponentPlaceholder }
          error={ DesktopDataPickerValue === "Data Inicial" || "Data Final" ? false : true }
          variant="standard"
        />}
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
};

export default DesktopDatePickerComponent;

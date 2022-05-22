import React from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem 
} from "@mui/material";

const SelectComponent = ({
  error,
  helperText,
  inputLabelDescription,
  selectDataTestId,
  selectValue,
  selectOnChange,
  selectMenuItens,
}) => {
  return(
    <FormControl
      fullWidth
      variant= "standard"
      size="small"
    >
      <InputLabel>{ inputLabelDescription }</InputLabel>
      <Select
        data-testId={ selectDataTestId}
        value={ selectValue }
        onChange={ selectOnChange }
        error={ error }
        helperText={ helperText }
      >
        {
          selectMenuItens.map((item) => {
            return (
              <MenuItem
                key={ item.id }
                value={ item.id }
              >
                { item.name }
              </MenuItem>
            );
          })
        }
      </Select>
    </FormControl>
  );
};

SelectComponent.propTypes = {
  error: PropTypes.bool.isRequired,
  helperText: PropTypes.string.isRequired,
  inputLabelDescription: PropTypes.string.isRequired,
  selectDataTestId: PropTypes.string.isRequired,
  selectValue: PropTypes.string.isRequired,
  selectOnChange: PropTypes.func.isRequired,
  selectMenuItens: PropTypes.array.isRequired,
};

export default SelectComponent;

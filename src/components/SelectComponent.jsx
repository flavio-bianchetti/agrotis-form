import React from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";

const SelectComponent = ({
  selectError,
  selectHelperText,
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
      error={ selectError }
    >
      <InputLabel>{ inputLabelDescription }</InputLabel>
      <Select
        data-testid={ selectDataTestId }
        defaultValue={ selectValue }
        onChange={ selectOnChange }
        value={ selectValue }
      >
        {
          selectMenuItens.map((item) => {
            return (
              <MenuItem
                key={ item.id }
                value={ item.id }
              >
                { /* documentação: https://mui.com/pt/material-ui/api/list-item-text/ */}
                {/* <ListItemText primary={ item.name }  secondary={ item.cnpj }/> */}
                { item.name }
              </MenuItem>
            );
          })
        }
      </Select>
      <FormHelperText>
        { selectError === true ? selectHelperText : "" }
      </FormHelperText>
    </FormControl>
  );
};

SelectComponent.propTypes = {
  selectError: PropTypes.bool.isRequired,
  selectHelperText: PropTypes.string.isRequired,
  inputLabelDescription: PropTypes.string.isRequired,
  selectDataTestId: PropTypes.string.isRequired,
  selectValue: PropTypes.string.isRequired,
  selectOnChange: PropTypes.func.isRequired,
  selectMenuItens: PropTypes.array.isRequired,
};

export default SelectComponent;

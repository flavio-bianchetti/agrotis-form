// The construction of this page was based on:
// https://react-hook-form.com/get-started/
// https://mui.com/pt/x/react-date-pickers/getting-started/
// https://mui.com/pt/material-ui/react-select/

import React from "react";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/system";
import { ThemeProvider } from "@mui/material/styles";
import HeaderComponent from "../components/HeaderComponent";
import BarComponent from "../components/BarComponent";
import TextFieldComponent from "../components/TextFieldComponent";
import DesktopDatePickerComponent from "../components/DesktopDatePickerComponent";
import SelectComponent from "../components/SelectComponent";
import TextAreaComponent from "../components/TextAreaComponent";
import AgrotisContext from "../context/AgrotisContext";
import Theme from "../themes/theme";

const FuncionalForm = () => {
  const {
    onSubmit,
    fullNameUser,
    handleChangeFullNameUser,
    isNameError,
    initialDate,
    isInitialDateError,
    handleChangeInitialDate,
    finalDate,
    isFinalDateError,
    handleChangeFinalDate,
    property,
    isPropertyError,
    handleChangeProperty,
    dataProperties,
    laboratory,
    isLaboratoryError,
    handleChangeLaboratory,
    dataLaboratories,
    observations,
    handleChangeObservations,
    cNPJProperty,
  } = React.useContext(AgrotisContext);

  

  return (
    <ThemeProvider theme={ Theme }>
      <HeaderComponent />
      <Box sx= {{ p: 2, flexGrow: 1 }}>
        <form onSubmit={ (event) => onSubmit(event) }>
          <Stack direction="column" spacing={2} boxShadow={2} >
            <BarComponent
              title="Teste front-end"
              btnName="Salvar"
              dataTestIdTitle="title-form"
              dataTestIdButton="button-save"
            />
            <Stack direction="row" padding={2} spacing={2} sx={{ flexGrow: 1 }}>
              <Stack direction="row" spacing={2} sx={{ flexGrow: 1 }}>
                <TextFieldComponent
                  dataTestId="input-name"
                  error={ isNameError }
                  label="Nome *"
                  maxLength={ 40 }
                  helperText={ isNameError ? warning : cNPJProperty }
                  onChange={ handleChangeFullNameUser }
                  placeholder="Nome "
                  value={ fullNameUser }
                />
              </Stack>
              <Stack direction="row" spacing={2}>
                  <DesktopDatePickerComponent
                    DesktopDataPickerLabel="Data Inicial *"
                    DesktopDataPickerValue={ initialDate }
                    DesktopDataPickerOnChange={ handleChangeInitialDate }
                    TextFieldComponentDataTestId="input-initial-date"
                    TextFieldComponentPlaceholder="Data Inicial"
                    TextFieldComponentError={ isInitialDateError }
                    TextFieldComponentHelperText={ 'Error' }
                  />
              </Stack>
              <Stack direction="row" spacing={2}>
                  <DesktopDatePickerComponent
                    DesktopDataPickerLabel="Data Final *"
                    DesktopDataPickerValue={ finalDate }
                    DesktopDataPickerOnChange={ handleChangeFinalDate }
                    TextFieldComponentDataTestId="input-final-date"
                    TextFieldComponentPlaceholder="Data Final *"
                    TextFieldComponentError={ isFinalDateError }
                    TextFieldComponentHelperText={ 'Error' }
                  />
              </Stack>
            </Stack>
            <Stack direction="row" padding={2} spacing={2}>
              <SelectComponent
                inputLabelDescription="Propriedades *"
                selectDataTestId="select-properties"
                selectValue={ property }
                selectOnChange={ handleChangeProperty }
                selectMenuItens={ dataProperties }
                selectHelperText={ 'Error' }
                selectError={ isPropertyError }
              />
              <SelectComponent
                inputLabelDescription="Laboratório *"
                selectDataTestId="select-laboratory"
                selectValue={ laboratory }
                selectOnChange={ handleChangeLaboratory }
                selectMenuItens={ dataLaboratories }
                selectHelperText={ 'Error' }
                selectError={ isLaboratoryError }
              />
            </Stack>
            <Stack direction="row" padding={2}>
              <TextAreaComponent
                dataTestId="textarea-observations"
                label="Observações"
                maxLength={ 1000 }
                onChange={ handleChangeObservations }
                rows={ 5 }
                value={ observations }
              />
            </Stack>
          </Stack>
        </form>
      </Box>
    </ThemeProvider>
  );
}

export default FuncionalForm;

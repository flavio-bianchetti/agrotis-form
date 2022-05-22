// The construction of this page was based on:
// https://react-hook-form.com/get-started/
// https://mui.com/pt/x/react-date-pickers/getting-started/
// https://mui.com/pt/material-ui/react-select/

import React from "react";
import Stack from "@mui/material/Stack";
import { Container, Box } from "@mui/system";
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
    register,
    handleSubmit,
    onSubmit,
    onError,
    dataProperties,
    dataLaboratories,
    isNameError,
    initialDate,
    finalDate,
    handleChangeInitialDate,
    handleChangeFinalDate,
    properties,
    laboratory,
    handleChangeProperties,
    handleChangeLaboratory,
  } = React.useContext(AgrotisContext);

  

  return (
    <ThemeProvider theme={ Theme }>
      <HeaderComponent />
      <Box sx= {{ p: 2, flexGrow: 1 }}>
        <form onSubmit={ handleSubmit(onSubmit, onError ) }>
          <Stack direction="column" spacing={2} boxShadow={2} >
            <BarComponent
              title="Teste front-end"
              btnName="Salvar"
            />
            <Stack direction="row" padding={2} spacing={2}>
              <TextFieldComponent
                params={ register("name", { required: true }) }
                data-testId="input-name"
                label="Nome"
                placeholder="Nome"
                error={ isNameError }
                helperText={ isNameError ? "Campo obrigatório" : "" }
              />
              <Container maxWidth="lg">
                <Stack direction="row" spacing={2} >
                  <DesktopDatePickerComponent
                    DesktopDataPickerLabel="Data Inicial"
                    DesktopDataPickerValue={ initialDate }
                    DesktopDataPickerOnChange={ handleChangeInitialDate }
                    TextFieldComponentDataTestId="input-initial-date"
                    TextFieldComponentPlaceholder="Data Inicial *"
                  />
                  <DesktopDatePickerComponent
                    DesktopDataPickerLabel="Data Final"
                    DesktopDataPickerValue={ finalDate }
                    DesktopDataPickerOnChange={ handleChangeFinalDate }
                    TextFieldComponentDataTestId="input-final-date"
                    TextFieldComponentPlaceholder="Data Final *"
                  />
                </Stack>
              </Container>
            </Stack>
            <Stack direction="row" padding={2} spacing={2}>
              <SelectComponent
                inputLabelDescription="Propriedades *"
                selectDataTestId="select-properties"
                selectValue={ properties }
                selectOnChange={ handleChangeProperties }
                selectMenuItens={ dataProperties }
              />
              <SelectComponent
                inputLabelDescription="Laboratório *"
                selectDataTestId="select-laboratory"
                selectValue={ laboratory }
                selectOnChange={ handleChangeLaboratory }
                selectMenuItens={ dataLaboratories }
              />
            </Stack>
            <Stack direction="row" padding={2}>
              <TextAreaComponent
                dataTestId="textarea-observations"
                params={ register("description") }
                label="Observações"
                rows={ 5 }
              />
            </Stack>
          </Stack>
        </form>
      </Box>
    </ThemeProvider>
  );
}

export default FuncionalForm;

// The construction of this page was based on:
// https://react-hook-form.com/get-started/
// https://mui.com/pt/x/react-date-pickers/getting-started/

import React from "react";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const FuncionalForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  const [initialDate, setInitialDate] = React.useState(new Date());
  const [finalDate, setFinalDate] = React.useState(new Date());

  const handleChangeInitialDate = (newValue) => {
    setInitialDate(newValue);
  };

  const handleChangeFinalDate = (newValue) => {
    setFinalDate(newValue);
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <header>
          <div>
            <h1>Teste front-end</h1>
          </div>
          <div>
            <Button
              variant="text"
              data-testId="button-save"
              type="submit"
            >
              Salvar
            </Button>
          </div>
        </header>
        <TextField
          data-testId="input-name"
          {...register("name")}
          required
          label="Nome"
          placeholder="Nome"
          variant="standard"
          // error
          // helperText="teste"
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            inputFormat="dd/MM/yyyy"
            value={ initialDate }
            onChange={ handleChangeInitialDate }
            renderInput={
              (params) => 
              <TextField
                data-testId="input-initial-date"
                {...params}
                required
                label="Data Inicial"
                placeholder="Data Inicial"
                variant="standard"
            />
            }
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            inputFormat="dd/MM/yyyy"
            value={ finalDate }
            onChange={ handleChangeFinalDate }
            renderInput={
              (params) => 
              <TextField
                data-testId="input-final-date"
                {...params}
                required
                label="Data Final"
                placeholder="Data Final"
                variant="standard"
            />
            }
          />
        </LocalizationProvider>
        <select {...register("properties")} placeholder="Propriedade *" data-testId="select-properties" >
          <option value="1">Propriedade 1</option>
          <option value="2">Propriedade 2</option>
          <option value="3">Propriedade 3</option>
        </select>
        <select {...register("laboratory")} placeholder="Laboratório *" data-testId="select-laboratory" >
          <option value="1">Laboratório 1</option>
          <option value="2">Laboratório 2</option>
          <option value="3">Laboratório 3</option>
        </select>
        <textarea {...register("observations")} placeholder="Observações" data-testId="textarea-observations" />
        
      </form>
    </section>
  );
}

export default FuncionalForm;

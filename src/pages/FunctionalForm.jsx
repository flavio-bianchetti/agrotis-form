// The construction of this page was based on:
// https://react-hook-form.com/get-started/
// https://mui.com/pt/x/react-date-pickers/getting-started/
// https://mui.com/pt/material-ui/react-select/

import React from "react";
import { useForm } from "react-hook-form";
import { Button, TextField, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const FuncionalForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  const [initialDate, setInitialDate] = React.useState(new Date());
  const [finalDate, setFinalDate] = React.useState(new Date());
  const [properties, setProperties] = React.useState('');
  const [laboratory, setLaboratory] = React.useState('');
  const [textArea, setTextArea] = React.useState('');

  const handleChangeInitialDate = (newValue) => {
    setInitialDate(newValue);
  };

  const handleChangeFinalDate = (newValue) => {
    setFinalDate(newValue);
  };

  const handleChangeProperties = (event) => {
    setProperties(event.target.value);
  };

  const handleChangeLaboratory = (event) => {
    setLaboratory(event.target.value);
  };

  const handleChangeTextArea = (event) => {
    setTextArea(event.target.value);
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
        <FormControl variant= "standard" sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel>Propriedade</InputLabel>
          <Select
            data-testId="select-properties"
            value={ properties }
            onChange={ handleChangeProperties }
          >
            <MenuItem value={1}>Agrotis 1</MenuItem>
            <MenuItem value={2}>Agrotis 2</MenuItem>
            <MenuItem value={3}>Agrotis 3</MenuItem>
            <MenuItem value={4}>Agrotis 4</MenuItem>
            <MenuItem value={5}>Agrotis 5</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant= "standard" sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel>Laboratório</InputLabel>
          <Select
            data-testId="select-laboratory"
            value={ laboratory }
            onChange={ handleChangeLaboratory }
          >
            <MenuItem value={1}>Agro Skynet</MenuItem>
            <MenuItem value={2}>Umbrella Agro</MenuItem>
            <MenuItem value={3}>Osborn Agro</MenuItem>
            <MenuItem value={4}>Skyrim Agro</MenuItem>
            <MenuItem value={5}>Agro Brasil</MenuItem>
          </Select>
        </FormControl>
        <TextField
          data-testId="textarea-observations"
          {...register("description")}
          label="Observações"
          placeholder="Observações"
          variant="standard"
          rows={5}
          value={ textArea }
          onChange={ handleChangeTextArea }
        />
      </form>
    </section>
  );
}

export default FuncionalForm;

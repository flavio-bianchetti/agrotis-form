// The construction of this page was based on:
// https://react-hook-form.com/get-started/

import React from "react";
import { useForm } from "react-hook-form";

const FuncionalForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <header>
          <div>
            <h1>Teste front-end</h1>
          </div>
          <div>
            <button
              data-testId="button-save"
              type="submit"
              disabled="false"
            >
              Salvar
            </button>
          </div>
        </header>
        <input {...register("name")} placeholder="Nome *" data-testId="input-name" />
        <input {...register("initialDate")} placeholder="Data Inicial *" data-testId="input-initial-date"/>
        <input {...register("finalDate")} placeholder="Data Final *" data-testId="input-final-date"/>
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

import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import AgrotisContext from "./AgrotisContext";
import { infosPropriedades, infosLaboratorios } from "../data/AgrotisDB";

const AgrotisProvider = ({ children }) => {
  const [fullNameUser, setFullNameUser] = useState("");
  const [isNameError, setIsNameError] = useState(false);

  const [initialDate, setInitialDate] = React.useState(new Date().toLocaleString());
  const [finalDate, setFinalDate] = React.useState(new Date().toLocaleString());
  const [dataProperties, setDataProperties] = useState([]);
  const [dataLaboratories, setDataLaboratories] = useState([]);
  const [isNameError, setIsNameError] = useState(false);
  const [properties, setProperties] = React.useState("");
  const [laboratory, setLaboratory] = React.useState("");
  
  useEffect(() => {
    setDataProperties(infosPropriedades);
    setDataLaboratories(infosLaboratorios);
  }, []);
  
  const onSubmit = (data, event) => {
    console.log("data", data);
    console.log("event", event);
    console.log("register", register);
  };
  
  const onError = (event) => {
    console.log("wrong");
    setIsNameError(true);
    console.log("event", event);
  }

  const handleChangeFullNameUser = (event) => {
    setFullNameUser(event.target.value);
    setIsNameError(false);
  };

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

  const agrotisValues = {
    fullNameUser,
    handleChangeFullNameUser,
    isNameError,
    onSubmit,
    onError,
    initialDate,
    finalDate,
    handleChangeInitialDate,
    handleChangeFinalDate,
    properties,
    laboratory,
    handleChangeProperties,
    handleChangeLaboratory,
};

  return (
    <AgrotisContext.Provider value={ agrotisValues }>
      { children }
    </AgrotisContext.Provider>
  );
};

AgrotisProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AgrotisProvider;

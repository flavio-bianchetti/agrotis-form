import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import AgrotisContext from "./AgrotisContext";
import { infosPropriedades, infosLaboratorios } from "../data/AgrotisDB";

const AgrotisProvider = ({ children }) => {
  const [fullNameUser, setFullNameUser] = useState("");
  const [isNameError, setIsNameError] = useState(false);

  const [initialDate, setInitialDate] = React.useState(new Date().toLocaleString());
  const [isInitialDateError, setIsInitialDateError] = useState(false);

  const [finalDate, setFinalDate] = React.useState(new Date().toLocaleString());
  const [isFinalDateError, setIsFinalDateError] = useState(false);

  const [dataProperties, setDataProperties] = useState([]);
  const [property, setProperty] = React.useState("");
  const [isPropertyError, setIsPropertyError] = useState(false);

  const [dataLaboratories, setDataLaboratories] = useState([]);
  const [isNameError, setIsNameError] = useState(false);
  const [properties, setProperties] = React.useState("");
  const [laboratory, setLaboratory] = React.useState("");
  const [isLaboratoryError, setIsLaboratoryError] = useState(false);

  
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
    setIsInitialDateError(false);
  };

  const handleChangeFinalDate = (newValue) => {
    setFinalDate(newValue);
    setIsFinalDateError(false);
  };

  const handleChangeProperty = (event) => {
    setProperty(event.target.value);
    setIsPropertyError(false);
  };

  const handleChangeLaboratory = (event) => {
    setLaboratory(event.target.value);
    setIsLaboratoryError(false);
  };

  };

  const agrotisValues = {
    fullNameUser,
    handleChangeFullNameUser,
    isNameError,
    onSubmit,
    onError,
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

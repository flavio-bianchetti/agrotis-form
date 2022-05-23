import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
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
  const [laboratory, setLaboratory] = React.useState("");
  const [isLaboratoryError, setIsLaboratoryError] = useState(false);

  const [observations, setObservations] = useState("");

  useEffect(() => {
    setDataProperties(infosPropriedades);
    setDataLaboratories(infosLaboratorios);
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();

    validateAllfields();

    const selectedProperty = dataProperties.find((p) => p.id === property);
    const selectedLaborarory = dataLaboratories.find((l) => l.id === laboratory);

    const result = {
      nome: fullNameUser,
      dataInicial: initialDate.toISOString(),
      dataFinal: finalDate.toISOString(),
      infosPropriedade: {
          id: selectedProperty.id,
          nome: selectedProperty.name,
      },
      cnpj: selectedProperty.cnpj,
      laboratorio: {
          id: selectedLaborarory.id,
          nome: selectedLaborarory.name,
      },
      observacoes: observations,
    };

    console.log(result);
  };

  const validateAllfields = () => {
    if (fullNameUser.length === 0) { 
      setIsNameError(true);
      return;
    }

    if (!(initialDate instanceof Date && !isNaN(initialDate))) {
      setIsInitialDateError(true);
      return;
    }

    if (!(finalDate instanceof Date && !isNaN(finalDate))) {
      setIsFinalDateError(true);
      return;
    }

    if (!property) {
      setIsPropertyError(true);
      return;
    }

    if (!laboratory) {
      setIsLaboratoryError(true);
      return;
    }

    console.log("sucess");
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

  const handleChangeObservations = (event) => {
    setObservations(event.target.value);
  };

  const agrotisValues = {
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

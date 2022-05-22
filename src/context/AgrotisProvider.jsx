import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import AgrotisContext from "./AgrotisContext";

const AgrotisProvider = ({ children }) => {
  const { register, handleSubmit } = useForm();
  
  useEffect(() => {
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

  const agrotisValues = {
    register,
    handleSubmit,
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

import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import AgrotisContext from "./AgrotisContext";

const AgrotisProvider = ({ children }) => {
  useEffect(() => {
  }, []);

  const agrotisValues = {
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

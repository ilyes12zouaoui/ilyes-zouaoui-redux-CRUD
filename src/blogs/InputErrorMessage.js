import React, { Component } from "react";

const InpurErrorMessage = ({ error }) => {
  if (!!error) return <span style={{ color: "red" }}>{error}</span>;

  return null;
};

export default InpurErrorMessage;

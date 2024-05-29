// import React from 'react'

import { useState } from "react";
import { Navigate } from "react-router-dom";
import CardForm from "../Components/CardForm";

const Checkout = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "10px", color: "white", display:"flex" }}>
      <div>
        <CardForm/>
      </div>
      
    </div>
  );
};

export default Checkout;

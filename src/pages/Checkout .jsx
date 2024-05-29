// import React from 'react'

import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CardForm from "../Components/CardForm";
import PurchaseSummary from "../Components/PurchaseSummary";

const Checkout = () => {
  const { items, totalItems, totalPrice } = useSelector((store) => store.cart);
  
  return (
    <div style={{marginTop: "10px", color: "white", textAlign:"center"}}>
    <h1>Checkout</h1>
    <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
      <div style={{width:"40%",textAlign:"left"}}>
        <PurchaseSummary/>
      </div>
      <div style={{width:"30%"}}>
        <CardForm/>
      </div>
    </div>
      
      
    </div>
  );
};

export default Checkout;

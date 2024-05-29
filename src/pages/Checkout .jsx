// import React from 'react'

import { useState } from "react";
import { Navigate } from "react-router-dom";
/* import { Link } from "react-router-dom"; */
import american_express_icon from "../assets/American_Express_logo_(2018).svg.png";
import mastercard_icon from "../assets/Mastercard-logo.svg.webp";
import visa_icon from "../assets/Visa_Inc._logo.svg.png";

const Checkout = () => {
  const [errMessage,setErrMessage] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [ccn,setCcn] = useState("");
  const [cardType,setCardType] = useState("");
  const [cvv,setCvv] = useState("");
  const [expMonth,setExpMonth] = useState("");
  const [expYear,setExpYear] = useState("");
  const AMERICAN_EXPRESS_REGEX = /^3[47][0-9]{13}$/;
  const MASTERCARD_REGEX = /5[1-5][0-9]{14}$/
  const VISA_REGEX = /^4[0-9]{12}(?:[0-9]{3})?$/

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (ccn==="",cvv==="",expMonth==="",expYear==="") {
      setErrMessage("Todos los campos son obligatorios");
    } else if (expMonth<1 || expMonth>12 || expYear<2024 || expYear>2050){
      setErrMessage("Introduzca una fecha valida");
    } else if (cardType === "Invalid") {
      setErrMessage("Introduzca un numero de tarjeta valido");
    } else if (cvv.length < 3) {
      setErrMessage("Introduzca un codigo de seguridad valido");
    } else {
      setRedirect(true);
    }
  };
  function detectCard(ccn){
    if(AMERICAN_EXPRESS_REGEX.test(ccn)){
      return "American Express Detected"
    }
    else if(MASTERCARD_REGEX.test(ccn)){
      return "Mastercard Detected"
    }
    else if(VISA_REGEX.test(ccn)){
      return "Visa Detected"
    }
    else {
      return "Invalid"
    }
  }
  return (
    <div style={{ textAlign: "center", marginTop: "10px", color: "white" }}>
      <h1>Checkout</h1>
      <h3>Informacion de Tarjeta de Credito/Debito</h3><br/>
      <div style={{background:"white",paddingTop:".3rem"}}>
        <img src={american_express_icon} style={{width:"64px",height:"48px"}}/>
        <img src={mastercard_icon} style={{width:"64px",height:"48px"}}/>
        <img src={visa_icon} style={{width:"64px",height:"48px"}}/>
      </div>
      <form onSubmit={handleSubmit}>
        <p style={{color:"red"}}>{errMessage}</p>
        <label>Numero de tarjeta: </label>
        <input 
        className="ccn" id="ccn" type="tel" pattern="\d*"
        inputMode="numeric" autoComplete="cc-number" minLength={"15"} maxLength={"16"} required placeholder="5555555555554444"
        value={ccn}
        onChange={(e) => {setCcn(e.target.value); setCardType(detectCard(e.target.value))}}
        ></input>
        <i> {cardType}</i><br/>
        <label>Codigo de seguridad: </label>
        <input className="cvv" id="cvv" type="tel" pattern="\d*"
        inputMode="numeric" minLength={"3"} maxLength={"3"} required placeholder="777"
        value={cvv}
        onChange={(e) => setCvv(e.target.value)}
        ></input><br/>
        <i>El codigo de seguridad son los 3 numeros que se encuentran en la parte de atras de la tarjeta.</i>
        <br/><br/>
        <label>Fecha de vencimiento: </label>
        <input className="exp-date" id="exp-month" type="number" inputMode="numeric" min={1} max={12} pattern="\d*"
        minLength={"1"} maxLength={"2"} required placeholder="mm"
        value={expMonth}
        onChange={(e) => setExpMonth(e.target.value)}
        ></input>
        <span>/</span>
        <input className="exp-date" id="exp-year" type="number" inputMode="numeric" min={2024} max={2050} pattern="\d*"
        minLength={"4"} maxLength={"4"} required placeholder="yyyy"
        value={expYear}
        onChange={(e) => setExpYear(e.target.value)}
        ></input><br/><br/>
        <button >Submit</button>
      </form>
      {redirect && <Navigate to="/succes" replace={true} />}
    </div>
  );
};

export default Checkout;

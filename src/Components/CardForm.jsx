import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import american_express_icon from "../assets/American_Express_logo_(2018).svg.png";
import mastercard_icon from "../assets/Mastercard-logo.svg.webp";
import visa_icon from "../assets/Visa_Inc._logo.svg.png";
import { useCreditCard } from "../hooks/useCreditCard";
import "./CardForm.css";

const CardForm = () => {
  const [errMessage, setErrMessage] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [ccn, setCcn] = useState("");
  const [cardType, setCardType] = useState("");
  const [cvv, setCvv] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const AMERICAN_EXPRESS_REGEX = /^3[47][0-9]{13}$/;
  const MASTERCARD_REGEX = /5[1-5][0-9]{14}$/;
  const VISA_REGEX = /^4[0-9]{12}(?:[0-9]{3})?$/;

  const { addNumberCard, addTypeCard } = useCreditCard();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ccn || !cvv || !expMonth || !expYear) {
      setErrMessage("Todos los campos son obligatorios");
    } else if (expMonth < 1 || expMonth > 12 || expYear < new Date().getFullYear() || expYear > 2050) {
      setErrMessage("Introduzca una fecha valida");
    } else if (cardType === "Invalid") {
      setErrMessage("Introduzca un numero de tarjeta valido");
    } else if (cvv.length < 3) {
      setErrMessage("Introduzca un codigo de seguridad valido");
    } else {
      addNumberCard(ccn);
      addTypeCard(cardType);
      setRedirect(true);
    }
  };

  const detectCard = (ccn) => {
    if (AMERICAN_EXPRESS_REGEX.test(ccn)) {
      return "American Express";
    } else if (MASTERCARD_REGEX.test(ccn)) {
      return "Mastercard";
    } else if (VISA_REGEX.test(ccn)) {
      return "Visa";
    } else {
      return "Invalid";
    }
  };

  return (
    <div className="card-form-container">
      <h3>Credit/Debit Card Information</h3>
      <div className="card-icons">
        <img src={american_express_icon} alt="American Express" className="img-american"/>
        <img src={mastercard_icon} alt="Mastercard" className="img-master"/>
        <img src={visa_icon} alt="Visa" className="img-visa"/>
      </div>
      <form className="form-checkout" onSubmit={handleSubmit}>
        {errMessage && <p className="error-message">{errMessage}</p>}
        <div className="form-group">
          <label className="label" htmlFor="ccn">Card Number:</label>
          <input
            className="ccn input"
            id="ccn"
            type="tel"
            pattern="\d*"
            inputMode="numeric"
            autoComplete="cc-number"
            minLength="15"
            maxLength="16"
            required
            placeholder="5555555555554444"
            value={ccn}
            onChange={(e) => {
              setCcn(e.target.value);
              setCardType(detectCard(e.target.value));
            }}
          />
          <i className="card-type">{cardType}</i>
        </div>
        <div className="form-group">
          <label className="label" htmlFor="cvv">Security Number:</label>
          <input
            className="cvv input"
            id="cvv"
            type="tel"
            pattern="\d*"
            inputMode="numeric"
            minLength="3"
            maxLength="3"
            required
            placeholder="777"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
          <i className="cvv-info">
            You can find your Card's security number behind the card.
          </i>
        </div>
        <div className="form-group">
          <label className="label">Expire Date:</label>
          <input
            className="exp-date input"
            id="exp-month"
            type="number"
            inputMode="numeric"
            min={1}
            max={12}
            required
            placeholder="MM"
            value={expMonth}
            onChange={(e) => setExpMonth(e.target.value)}
          />
          <span>/</span>
          <input
            className="exp-date input"
            id="exp-year"
            type="number"
            inputMode="numeric"
            min={new Date().getFullYear()}
            max={2050}
            required
            placeholder="YYYY"
            value={expYear}
            onChange={(e) => setExpYear(e.target.value)}
          />
        </div>
        <button className="btn-checkout" type="submit">Submit</button>
      </form>
      {redirect && <Navigate to="/succes" replace={true} />}
    </div>
  );
};

export default CardForm;

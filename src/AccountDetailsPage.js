import React from "react";
import "./index.css";
import { useLocation, useNavigate } from "react-router-dom";

const AccountDetailsPage = () => {
  const location = useLocation();
  const account = location.state?.account;
  const navigate = useNavigate();

  if (!account) {
    return <div>No se encontró la información de la cuenta.</div>;
  }

  const handleGoBack = () => {
    navigate("/Principal");
  };

  let accountType;
  if(account.tipo_letras == "CA"){
    accountType = "Caja de Ahorro en Pesos";
  }else{if(account.tipo_letras == "CC")
    accountType = "Cuenta corriente";
  }

  return (
    <div className="container-details">
      <h1>Este es tu saldo actual</h1>
      <p>Saldo: {account.saldo}</p>
      <p>Tipo de cuenta: {accountType}</p>
      <p>Número de cuenta: {account.n}</p>
      <button className= "button-back-menu"onClick={handleGoBack}>Volver al menú principal</button>
    </div>
  );
};

export default AccountDetailsPage;

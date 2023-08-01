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
      <div className="header">
        <rect>.</rect>
      </div>
      <h5>Consulta tu saldo</h5>
      <h1>Este es tu saldo actual</h1>
      <div className="text">
        <p>Saldo: {account.saldo}</p>
        <p>Tipo de cuenta: {accountType}</p>
        <p>Número de cuenta: {account.n}</p>
      </div>
      <button className= "button button-back-menu"onClick={() => navigate("/")}>Volver al menú principal</button>
      <button  className="button-exit" onClick={() => window.location.replace('https://www.google.com.ar')}>
          <p>
              Salir
              </p>
        </button>
    </div>
  );
};

export default AccountDetailsPage;

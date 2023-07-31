import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const  App = () => {
  const navigate = useNavigate();
  const handleGoBalance = () =>{
    navigate("/Principal");
  };
  return(
    
    <button className="button button-balance" onClick={handleGoBalance}>Consulta de Saldos</button>
    
  );
};
export default App;
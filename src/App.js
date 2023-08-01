import React, { useState, useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";
import "./index.css";

const App = () => {
  const [accounts, setAccounts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const navigate = useNavigate();

  // Función para consumir datos desde la URL y filtrar cuentas
  async function fetchAndFilterAccounts() {
    try {
      const response = await fetch("https://api.npoint.io/97d89162575a9d816661");
      const data = await response.json();
      const filteredAccounts = data.cuentas.filter(
        (account) =>
          //(parseInt(account.n)) && // En caso de que el numero de cuenta este vacio, no muestra la cuenta
          (account.moneda.charAt(0).toLowerCase() === "u$s" ||
            account.moneda.charAt(0).toLowerCase() === "$"|| account.moneda.charAt(0).toLowerCase() === "bs") &&
          (account.tipo_letras === "CC"  ||account.tipo_letras === "Cc"|| account.tipo_letras === "CA")
      );
      setAccounts(filteredAccounts);
    } catch (error) {
      console.error("Error fetching accounts data:", error);
      setAccounts([]);
    }
  }

  // UseEffect para cargar los datos una vez que el componente se monta
  useEffect(() => {
    fetchAndFilterAccounts();
  }, []);

  // Función para mostrar las cuentas de la página actual
  const getAccountsForCurrentPage = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return accounts.slice(startIndex, endIndex);
  };

  // Función para manejar el cambio de página
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Función para mostrar la información detallada de una cuenta al hacer clic en el botón
  const handleAccountClick = (account) => {
    navigate(`/account/${account.n}`, { state: { account } });
    if(account.n===" "){ //Si el numero de cuenta esta vacio entonces me muestra la informacion igual
      navigate(`/account/1`, { state: { account } });
    }
  };



  return (
    <div className="container">
      <div className="header">
        <rect>.</rect>
      </div>
      <h5>Consulta de Saldo</h5>
      <h1>Seleccione la cuenta a consultar</h1>
    
      {accounts.length > 0 ? (
        <>
          <div className="button-row">
          {/* Boton de paginación anterior */}
          {currentPage > 1 && (
            <button className="button button-previous" onClick={() => handlePageChange(currentPage - 1)}>
              {"<< Opciones Anteriores"}
            </button>
          )
        }
          {getAccountsForCurrentPage().map((account) => {
            let accountType;
            if (account.tipo_letras === "CA") {
                  accountType = "Caja de Ahorro en Pesos";
            } else if (account.tipo_letras === "CC"||account.tipo_letras === "Cc") {
                  accountType = "Cuenta corriente";
            }

            return (
              <div key={account.n}>
                <button className="button"onClick={() => handleAccountClick(account)}>
                  {accountType} - {account.n}
                </button>
              </div>
            );
          }
        )
      }
          
          
          {/* Boton de paginación siguiente */}
          {accounts.length > currentPage * itemsPerPage && (
            <button  className="button button-next"onClick={() => handlePageChange(currentPage + 1)}>
             {"Mas opciones >>"}
            </button>
          )
        }
        </div>
        {/*Boton de salir*/}
        <button  className="button-exit" onClick={() => window.location.replace('https://www.google.com.ar')}>
          <p>
              Salir
              </p>
        </button>
        </>
      ): 
      ( <p className="no-accounts-message">
          No hay cuentas disponibles que cumplan los criterios de filtrado.
        </p>
      )
    }
    </div>
  );
};

export default App;

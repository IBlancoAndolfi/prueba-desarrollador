import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AccountDetailsPage from "./AccountDetailsPage";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/account/:accountNumber" element={<AccountDetailsPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AccountDetailsPage from "./AccountDetailsPage";
import Principal from "./Principal";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/account/:accountNumber" element={<AccountDetailsPage />} />
      <Route path="/Principal" element={<Principal />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

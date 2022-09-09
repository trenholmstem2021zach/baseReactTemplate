import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/organisms/Footer";
import Header from "./components/organisms/Header";
import ValidRoutes from "./ValidRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <ValidRoutes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

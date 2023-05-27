import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/homepage";

function App() {
  return (
    <>
      <Navbar />
      
      <Home />
    </>
  );
}

export default App;

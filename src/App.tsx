import React from 'react';
import './App.css';
import { Home } from "./components/pages/Home"
import { Header } from "./components/organisms/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <Home/>
    </div>)

}

export default App;

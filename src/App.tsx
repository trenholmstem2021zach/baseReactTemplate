import React from 'react';
import './App.css';
import { Home } from "./components/pages/Home"
import { Header } from "./components/organisms/Header";
function App() {
  return (
    <div className="body">
      <Header />
      <em className="usa-logo__text">foo</em>
      <Home/>
    </div>)

}

export default App;

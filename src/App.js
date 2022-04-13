import React from "react";
import { BrowserRouter } from "react-router-dom";
import CustomRoutes from "./routes";
import './App.css';

export default function App() {
  return (
    <div className='main-root'>
      <BrowserRouter>
        <CustomRoutes/>
      </BrowserRouter>
    </div>
  );
}
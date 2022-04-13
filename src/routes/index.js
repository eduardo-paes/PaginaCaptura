import React from "react";
import { Route, Routes } from 'react-router-dom'

// -- Páginas
import { Subscription } from '../pages'

export default function CustomRoutes() {
  return (
    <Routes>
      <Route path="/subscription" element={<Subscription />}/>
      <Route path="/" element={<Subscription />}/>
    </Routes>
  );
}

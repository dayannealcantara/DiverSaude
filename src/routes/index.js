import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import PageLogin from "../Pages/PageLogin"

function routes() {
  return(
    <Routes>
      <Route  path="/" element={ <Home />}/>
      <Route  path="/login" element={ <PageLogin />}/>
    </Routes>
  )
}
export default routes
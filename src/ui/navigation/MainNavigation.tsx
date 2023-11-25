import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "@views/HomeScreen";

const MainNavigation = () => {
  return (
      <Routes>
            <Route path="/" element={<HomeScreen />}/>
      </Routes>
  )
}

export default MainNavigation

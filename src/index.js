import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Login from "./User/Pages/Login";
import SignUp from "./User/Pages/SignUp.js";
import Ask from './User/Pages/Ask';
import Events from './User/Pages/Events';
import Following from './User/Pages/Following';
import Test from './User/Pages/Test';
import NavbarHz from './Shared/Navbar/NavbarHz';




ReactDOM.render(
  <BrowserRouter>
  <NavbarHz/>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/ask" element={<Ask />} />
      <Route path="/events" element={<Events />} />
      <Route path="/following" element={<Following />} />
      <Route path="/test" element={<Test />} />
      <Route path="/" element={<Login/>} />
      <Route path="/SignUp" element={<SignUp/>} />

    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import App from "./App.js";
import Login from "./components/login.js";
import Secret from "./components/secret.js";
import Register from "./components/register.js";
import './index.css';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="secret" element={<Secret />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

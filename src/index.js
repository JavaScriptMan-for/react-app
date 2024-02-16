import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import Nav from "./Nav";
import Main from './Main';
import Interective from './Interective';
import Footer from './Footer';
import Date from './Date';
import reportWebVitals from './reportWebVitals';



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   //code
// );
const header = ReactDOM.createRoot(document.querySelector('#root'));
header.render(
  <>
  <Header />
  <Nav />
  <Main />
  <Interective />
  <Footer />
  <Date />
  </>
)

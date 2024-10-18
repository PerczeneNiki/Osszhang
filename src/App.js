import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import './styles/Styles';
import { Fragment } from 'react';
import ScrollButton from "helpers/ScrollButton";
import MainPage from "mainpage/MainPage.js";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AboutUsPage from "pages/AboutUsPage.js";
import OurWorkPage from "pages/OurWorkPage.js";
import Reports from "pages/ReportsPage.js";
import Writings from "pages/WritingsPage.js";
import Email1 from "pages/email1";
import style from 'styles/style.css';

export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;
return (
    <>
    
      <GlobalStyles />
      <Router basename="/">
        <Routes>
        <Route  exaxt path="/" element={<MainPage/>} />
          <Route path="/aboutUs" element={<AboutUsPage />}  />
          <Route path="/ourWork" element={ <OurWorkPage />} />
          <Route path="/reports" element={ <Reports />} />
          <Route path="/writings" element={ <Writings />} />
          <Route path="/letter1" element={ <Email1 />} />
        </Routes>
      </Router>
      <ScrollButton />
    </>
);
}
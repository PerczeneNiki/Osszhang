import React from "react";
import GlobalStyles from 'styles/GlobalStyles';

import MainPage from "mainpage/MainPage.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUsPage from "pages/AboutUsPage.js";
import OurWorkPage from "pages/OurWorkPage.js";
import Reports from "pages/ReportsPage.js";
import Writings from "pages/WritingsPage.js";

export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;
return (
    <>
      <GlobalStyles />
      <Router >
        <Routes>
        <Route  exaxt path="/" element={<MainPage/>} />
          <Route path="/aboutUs" element={<AboutUsPage />}  />
          <Route path="/ourWork" element={ <OurWorkPage />} />
          <Route path="/reports" element={ <Reports />} />
          <Route path="/writings" element={ <Writings />} />
        </Routes>
      </Router>
    </>
);
}
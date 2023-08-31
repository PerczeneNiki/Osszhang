import React from "react";
import GlobalStyles from 'styles/GlobalStyles';

import OEWeb from "mainpage/OEWeb.js";


import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import OEAboutUsPage from "pages/OEAboutUsPage.js";
import OEOurWorkPage from "pages/OEOurWorkPage.js";
import OEReports from "pages/OEReportsPage.js";
import OEWritings from "pages/OEWritingsPage.js";

export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;


return (
    <>
      <GlobalStyles />
      <Router >
        
        <Routes>
        
        <Route exact path="/" element={<OEWeb/>} />
          <Route path="/aboutUs" element={<OEAboutUsPage />} />
          <Route path="/ourWork" element={<OEOurWorkPage />} />
          <Route path="/reports" element={<OEReports />} />
          <Route path="/writings" element={<OEWritings />} />
        </Routes>
      </Router>
    </>
);
}
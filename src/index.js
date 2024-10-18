import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import Modal from "react-modal";

Modal.setAppElement("#root");

const font = new FontFace("CastaThin", "url(../fonts/CastaThin.ttf)", {
    style: "normal",
    weight: "500",
  });

const container = document.getElementById('root');
const root = createRoot(container);
document.getElementsByTagName("body")[0].style.fontFamily = font;
root.render(<App />);
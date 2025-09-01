import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/layout.css";
createRoot(document.getElementById("root")).render(<App />);

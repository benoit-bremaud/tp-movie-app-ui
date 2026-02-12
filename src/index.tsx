// This must be imported for first
import "reflect-metadata";
import "./index.css";
// enables i18n
import "./i18n";

import App from "./App";
import { EnvService } from "./services/envService";
import React from "react";
import ReactDOM from "react-dom/client";
import { container } from "tsyringe";

container.resolve(EnvService);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

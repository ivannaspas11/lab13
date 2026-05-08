import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

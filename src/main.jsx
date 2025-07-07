import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Wrapper from './context/Wrapper.jsx'
createRoot(document.getElementById("root")).render(
  <Wrapper>
    <BrowserRouter>
      <App />
      <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter>
  </Wrapper>
);

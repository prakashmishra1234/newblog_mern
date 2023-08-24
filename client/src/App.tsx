import React from "react";
import "./App.css";
import Navigation from "./Routing/Navigation";
import { BrowserRouter } from "react-router-dom";
import { Store } from "./Store";
import { Toaster } from "react-hot-toast";
import SimpleBackdrop from "./Components/SimpleBackdrop";
import AlertDialogSlide from "./Components/AlertDialogSlide";

function App() {
  return (
    <Store>
      <BrowserRouter>
        <AlertDialogSlide />
        <Toaster />
        <SimpleBackdrop />
        <Navigation />
      </BrowserRouter>
    </Store>
  );
}

export default App;

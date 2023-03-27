import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/routing/Navigation";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./store/store";
import { Toaster } from "react-hot-toast";
import { baseName } from "./Config";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter basename={baseName}>
        <Toaster
          toastOptions={{
            position: "top-center",
          }}
        />
        <Navigation />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

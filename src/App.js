import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#042743";
      showAlert("Dark Mode is Enable", "success");
      //document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light Mode is Enable", "success");
      //document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Kay_Sky"
          About="About us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />

        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>

            <Route exact path="/">
              <TextForm
                showAlert={showAlert}
                heading="Try textUtils-Wors Counter,Character Counter & Many More"
                mode={mode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

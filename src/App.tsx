import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import TodosPage from "./pages/TodosPage";
import "./index.scss";

const App: React.FC = () => {
  const routes = (
    <Switch>
      <Route component={TodosPage} path="/" exact />
      <Route component={AboutPage} path="/about" exact />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          {routes}
        </div>
      </Router>
    </>
  );
};

export default App;

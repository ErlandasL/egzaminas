import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import ClientCreation from "./components/ClientCreation";
import InventoryCreation from "./components/InventoryCreation";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Admin from "./components/Admin";
import BuildingRecordUpdate from "./components/BuildingRecordUpdate";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={ClientCreation} />
          <Route path="/create-inventory" component={InventoryCreation} />
          <Route path="/admin" component={Admin} />
          <Route path="/update/:id" component={BuildingRecordUpdate} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

import * as React from 'react';
import { Switch, Route, useHistory } from "react-router-dom";
import Home from './Components/Home';
import CssBaseline from "@material-ui/core/CssBaseline";

export default function App() {
  return (
    <>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
}

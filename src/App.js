import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import Dashboard from './Components/dashboard//Dashboard';
import BizzFuzz from './Components/BizzFuzz';
import { Switch, Route, useHistory } from "react-router-dom";
import Game from './Components/dashboard/TickToe';
import Home from './Components/Home';
import CssBaseline from "@material-ui/core/CssBaseline";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path={'/BizzFuzz'} component={BizzFuzz} />
        <Route exact path={'/TickToe'} component={Game} />
      </Switch>
      <Copyright />
    </>
  );
}

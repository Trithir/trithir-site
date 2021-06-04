import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import Dashboard from './Components/dashboard//Dashboard';
import BizzFuzz from './Components/BizzFuzz';
import { Switch, Route, useHistory } from "react-router-dom";
import Game from './Components/dashboard/TickToe';


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

// export default function App() {
//   return (
//     <div>
//       <Box >
//         <Typography variant="h4" component="h1" gutterBottom>
//           <Dashboard />
//         </Typography>
//         <ProTip />
//         <Copyright />
//       </Box>
//     </div>
//   );
// }

export default function App() {
  return (
    <div>
      <Box >
        <Typography variant="h4" component="h1" gutterBottom>
          <Dashboard
            child={
              <Switch>
                <Route
                  exact path={'/BizzFuzz'}
                  component={BizzFuzz}
                />
                <Route
                  exact path={'/TickToe'}
                  component={Game}
                />
              </Switch>
              }
            >
          </Dashboard>
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </div>
  );
}

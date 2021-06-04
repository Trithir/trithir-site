import React from 'react';
import { useHistory } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AppsIcon from '@material-ui/icons/Apps';

export function MainListItems() {
  let history = useHistory();

  const handleClickButton = (path) => {
    history.push(path)
  }

  return (
  <>
    <div>
    <ListItem button onClick={() => handleClickButton('/BizzFuzz')}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="BizzFuzz" />
    </ListItem>

    <ListItem button onClick={() => handleClickButton('/TickToe')}>
      <ListItemIcon>
        <AppsIcon />
      </ListItemIcon>
      <ListItemText primary="TickToe" />
    </ListItem>
    </div>
  </>
  )
};

export const secondaryListItems = (
  <div>
    {/* <ListSubheader inset>Saved reports</ListSubheader> */}
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    
  </div>
);

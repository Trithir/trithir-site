import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { createMuiTheme } from '@material-ui/core/styles';
import CustomizedTimeline from '../MTimeline';
import Typography from '@material-ui/core/Typography';
import FancyTimeline from '../OTimeline';

const useStyles = makeStyles({
  bg: {
    backgroundColor: "#1a1126",
    overflow: 'auto',
    scrollbarColor: 'transparent transparent',
  },
  list: {
    width: 530,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div className={classes.bg} 
    >
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <Typography>
            Hello there! As far back as my memory goes, I've been curious about how things worked, and interested in fixing or improving upon them.
          Growing up I built/disassembled/fixed anything and everything, limited only by a lack of finances or resources. By the time I 
          finished high school I had my eyes set on the automotive field. Off and on for the next 10 years I worked towards being a technician,
          but discovered it wasn't what I wanted. Working through a second round of college, I took some programming classes that re-ignited
          my lust for fixing and problem solving (I never stopped building things), and opened me to a new line of work that has been challenging
          and fulfilling. 
        </Typography>
        {/* <FancyTimeline /> */}
        {/* <CustomizedTimeline /> */}
        {/* <List>
          {['About', 'Schooling', 'Work', 'Etc'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </div>
    </div>
  );

  return (
    <div>
      {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button color='primary' onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          {console.log(state[anchor], anchor)}
          {/* <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer> */}
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)} BackdropProps={{ invisible: true }}>
            {list(anchor)}  
          </Drawer>
        </React.Fragment>
      ))}
    </div> 
  );
}

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#d32f2f'
    }
  },
  overrides: {
    MuiButton: {
      raisedPrimary: {
        color: 'white',
      },
    },
  }
});

  //  {if (state[anchor] === true) {{
  //   switch (anchor){{
  //     case 'left': 
  //       <button>Left</button>
  //       break;
  //     case 'right':
  //       <button>Right</button>
  //       break;
  //     case 'top':
  //       <button>Top</button>
  //       break;
  //     case 'bottom':
  //       <button>Bottom</button>
  //       break;
  //   }}
  // }}}

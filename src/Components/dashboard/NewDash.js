import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FancyTimeline from '../OTimeline';
import ProjectCards from '../ProjectCards';
import DoughnutChart from './Doughnut';

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
    <div  
    >
      <div
        className={clsx(classes.list, {
          [classes.topList]: anchor === 'top',
          [classes.bottomList]: anchor === 'right',
        })}
        role="presentation"
        // onClick={toggleDrawer(anchor, false)}
        // onKeyDown={toggleDrawer(anchor, false)}
      > 
        {state.top ? 
        <>
        <Typography className={classes.about}>
            Hello there! As far back as my memory goes, I've been curious about how things worked and interested in fixing or improving upon them.
          Growing up I built/disassembled/fixed anything and everything, limited only by a lack of finances or resources. By the time I 
          finished high school I had my eyes set on the automotive field. Off and on for the next 10 years I worked towards being a technician,
          but discovered it wasn't what I wanted. Making my way through a second round of college, I took some programming classes that re-ignited
          my lust for fixing and problem solving (I never really stopped building things), and opened me to a new line of work that has been challenging
          and fulfilling. I enjoy pushing my boundaries and trying things outside of ordinary. 
        </Typography>
        </>
        : ''
        } 
        {state.left ?
        <FancyTimeline />
        : ''
        }
        {state.bottom ?
        <DoughnutChart />
        : ''
        }
        {state.right ? 
        <ProjectCards /> 
        : ''
        }

      </div>
    </div>
  );

  return (
    <div>
        <React.Fragment key='left'>
          <Button color='primary' onClick={toggleDrawer('left', true)}>Timeline</Button>
          <Drawer anchor='left' open={state['left']} onClose={toggleDrawer('left', false)} BackdropProps={{ invisible: true }} PaperProps={{className:'bg', style: {backgroundColor:"rgba(0, 0, 0, 0)", boxShadow:"none"}}}>
            {list('left')}  
          </Drawer>
          <Button color='primary' onClick={toggleDrawer('bottom', true)}>DoughnutChart</Button>
          <Drawer anchor='bottom' open={state['bottom']} onClose={toggleDrawer('bottom', false)} BackdropProps={{ invisible: true }}>
            {list('bottom')}  
          </Drawer>
          <Button color='primary' onClick={toggleDrawer('top', true)}>About Me</Button>
          <Drawer anchor='top' open={state['top']} onClose={toggleDrawer('top', false)} BackdropProps={{ invisible: true }} PaperProps={{style: {backgroundColor:"rgba(0, 0, 0, 0)", boxShadow:"none"}}}>
            {list('top')}  
          </Drawer>
          <Button color='primary' onClick={toggleDrawer('right', true)}>Projects</Button>
          <Drawer anchor='right' open={state['right']} onClose={toggleDrawer('right', false)} BackdropProps={{ invisible: true }} PaperProps={{className:'bg', style: {backgroundColor:"rgba(0, 0, 0, 0)", boxShadow:"none"}}}>
            {list('right')}  
          </Drawer>
        </React.Fragment>
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
  },
});

const useStyles = makeStyles({
  bg: {
    // backgroundColor: "#1a1126",
    overflow: 'auto',
    // msOverflowStyle: 'none',
    // webkitScrollbar: {
    //   width: '0px'
    // },
    scrollbarColor: 'transparent transparent',
  },
  about:{
    display: 'flex',
    width: '50%',
    // color: (251, 100, 41, 0.87)
  },
  list: {
    width: 850,
    color: '#E57C12',
  },
  topList: {
    display:'flex',
    justifyContent: 'center',
    textAlign:'center',
    width: '100%',
  },
  bottomList: {
    width: '100%',
  },

});
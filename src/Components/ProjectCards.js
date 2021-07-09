import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import TickToe from './dashboard/TickToe'
import BizzFuzz from './BizzFuzz';
import SuitCaseDrums from './images/SuitCaseDrums.jpg'
import Nexus from './images/Nexus.png'
import TrithirBot from './images/TrithirBot.png'
import { CardActionArea } from '@material-ui/core';

export default function ProjectCards() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid container>
      <Grid item xs={2} className={classes.cardGrid}>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="Codespells Nexus" className={classes.avatar}>
                C
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="CodeSpells"
            subheader="March 2021"
          />
          <CardActionArea href='http://nexus.codespells.org'>
            <CardMedia
              className={classes.media}
              image={Nexus}
              title="CodeSpells"
            />
          </CardActionArea>
          <CardContent>
            <Typography variant="body2" component="p">
              Internship that turned into a full time position. Integral team member in creating
              the Nexus web server, where mages can create and share spells that render in a 3D world!
            </Typography>
          </CardContent>
          {/* <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions> */}
        </Card>
      </Grid>
      {/* <Grid item xs={2} className={classes.cardGrid}>    
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                A
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Activity Map"
            subheader="May 2021"
          />
          <CardMedia
            className={classes.media}
            image="map"
            title="Activity map"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              An app to log hiking and other outdoor activities. Sort your activities by length,
              duration, frequency of visits, and more!
            </Typography>
          </CardContent>
        </Card>
      </Grid> */}
      <Grid item xs={2} className={classes.cardGrid}>    
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="Tic Toe" className={classes.avatar}>
                T
              </Avatar>
            }
            title="Tic Tac Toe"
            subheader="May 2021"
            subheaderColor="#E57C12"
          />
          <CardContent>
            <TickToe />
            <Typography variant="body2" component="p">
              React game of Tic Tac Toe. Records the steps so you can see where things went wrong!
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={2} className={classes.cardGrid}>    
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                B
              </Avatar>
            }
            title="BizzFuzz"
            subheader="May 2021"
          />
          <CardContent>
            <BizzFuzz />
            <Typography variant="body2" component="p">
              Had some fun altering a "Hello world" setup of Bizz Fuzz to use some React-y stuff. 
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={2} className={classes.cardGrid}>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                D
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Suitcase Drumset"
            subheader="May 2021"
          />
          <CardMedia
            className={classes.media}
            image={SuitCaseDrums}
            title="Suitcase Drums"
          />
          <CardContent>
            <Typography variant="body2" component="p">
              I took a youth drumset and built it into a suitcase. For music on the go, 
              don't forget your SuitCaseDrumset!
            </Typography>
          </CardContent>
          {/* <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions> */}
        </Card>
      </Grid>
      <Grid item xs={2} className={classes.cardGrid}>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                T-B
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Trithir Bot"
            subheader="April 2021"
          />
          <CardActionArea href='https://github.com/Trithir/TrithirBot'>
            <CardMedia
              className={classes.media}
              image={TrithirBot}
              title="TrithirBot"
            />
          </CardActionArea>
          <CardContent>
            <Typography variant="body2" component="p">
              Trithir-bot is built on an existing basic request bot. Users
              have the ability to add songs to a streamer's playlist using simple commands. 
              Expanded the search function. Added a counter for dropped
              drumsticks.    
            </Typography>
          </CardContent>
          {/* <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions> */}
        </Card>
      </Grid>

    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: '#e57c12',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  cardGrid: {
    padding: theme.spacing(1),
  },
}));
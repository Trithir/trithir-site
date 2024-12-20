import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Link from '@mui/material/Link';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import Nexus from './images/Nexus.png'
import Flipbloq from './images/Flipbloq.png'
import TrithirBot from './images/TrithirBot.png'
import { CardActionArea } from '@material-ui/core';
import DraginBoard from './images/DraginBoard.png'

export default function ProjectCards() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid container direction='column'>
      <Grid item xs={12} className={classes.cardGrid}>
      <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                Dgn
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="DraginBoard"
            subheader="Apr 2022"
          />
          <CardActionArea href="https://DraginBoard.net">
            <CardMedia
              className={classes.media}
              image={DraginBoard}
              title="Flipbloq"
            />
          </CardActionArea>
          <CardContent>
            <Typography variant="body2" component="p">
              Organize your ideas and projects with DraginBoard. A simple and intuitive drag and drop interface with using a standalone desktop application. 
            </Typography>
            <Link href="https://DraginBoard.net" underline="none">
              Start organizing now!
            </Link>
          </CardContent>
        </Card>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                Fbq
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Flipbloq"
            subheader="Oct 2021"
          />
          <CardActionArea href="https://trithir.itch.io/flipbloq">
            <CardMedia
              className={classes.media}
              image={Flipbloq}
              title="Flipbloq"
            />
          </CardActionArea>
          <CardContent>
            <Typography variant="body2" component="p">
              An ever evoloving puzzle game developed in Unreal Engine 4. I started with a basic idea and followed a video for setting up a simple game. It has been constantly snowballing out from there. Each layer complete with its own set of fun development challenges to decipher! 
            </Typography>
            <Link href="https://trithir.itch.io/flipbloq" underline="none">
              Link to try the early development of Flipbloq.
            </Link>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} className={classes.cardGrid}>
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
              the Nexus. A react based web server, where mages can create and share spells that render in a 3D world!
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} className={classes.cardGrid}>
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
              Trithir Bot is built on an existing Twitch request bot written in TypeScript. Users
              have the ability to add songs to a streamer's playlist using simple commands. 
              Expanded the search function, added counters, chat confirmations, and more!
            </Typography>
          </CardContent>
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
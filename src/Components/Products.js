import React, { useState, useRef } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Nexus from './images/Nexus.png'
import Flipbloq from './images/Flipbloq.png'
import TrithirBot from './images/TrithirBot.png'
import DraginBoard from './images/DraginBoard.png'

export default function Products() {
  const classes = useStyles();
  const [selectedImage, setSelectedImage] = useState(null);
  const containerRef = useRef(null);

  const handleWheel = (event) => {
    if (containerRef.current) {
      event.preventDefault(); // Prevents default vertical scroll behavior
      containerRef.current.scrollLeft += event.deltaY; // Moves horizontally
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      {selectedImage && (
        <div className={classes.overlay} onClick={closeImage}>
          <img src={selectedImage} alt="Enlarged" className={classes.enlargedImage} />
        </div>
      )}

      <Grid 
        container 
        className={classes.horizontalScrollContainer} 
        ref={containerRef} 
        onWheel={handleWheel}
      >
        {[
          {
            title: "Blue Pen",
            subheader: "$25",
            image: DraginBoard,
            description: "Hand turned blue pen made from acrylic.",
          },
          {
            title: "Flipbloq",
            subheader: "Oct 2021",
            image: Flipbloq,
            link: "https://trithir.itch.io/flipbloq",
            description: "An ever-evolving puzzle game developed in Unreal Engine 4...",
          },
          {
            title: "CodeSpells",
            subheader: "March 2021",
            image: Nexus,
            link: "http://nexus.codespells.org",
            description: "Internship turned full-time job—helped create CodeSpells Nexus...",
          },
          {
            title: "Trithir Bot",
            subheader: "April 2021",
            image: TrithirBot,
            link: "https://github.com/Trithir/TrithirBot",
            description: "Built on a Twitch request bot with enhanced features...",
          },
          {
            title: "DraginBoard",
            subheader: "Apr 2022",
            image: DraginBoard,
            link: "https://DraginBoard.net",
            description: "Organize your ideas and projects with DraginBoard...",
          },
          {
            title: "Flipbloq",
            subheader: "Oct 2021",
            image: Flipbloq,
            link: "https://trithir.itch.io/flipbloq",
            description: "An ever-evolving puzzle game developed in Unreal Engine 4...",
          },
          {
            title: "CodeSpells",
            subheader: "March 2021",
            image: Nexus,
            link: "http://nexus.codespells.org",
            description: "Internship turned full-time job—helped create CodeSpells Nexus...",
          },
          {
            title: "Trithir Bot",
            subheader: "April 2021",
            image: TrithirBot,
            link: "https://github.com/Trithir/TrithirBot",
            description: "Built on a Twitch request bot with enhanced features...",
          },
        ].map((product, index) => (
          <Card key={index} className={classes.root}>
            <CardHeader
              avatar={<Avatar className={classes.avatar}>{product.title.charAt(0)}</Avatar>}
              title={product.title}
              subheader={product.subheader}
            />
            <CardMedia
                className={classes.media}
                image={product.image}
                title={product.title}
                onClick={() => handleImageClick(product.image)}
            />
            <CardContent>
              <Typography variant="body2">{product.description}</Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 250,
    maxWidth: 300,
    flexShrink: 0, // Prevents cards from shrinking
    marginRight: theme.spacing(2),
    backgroundColor: "rgba(0, 0, 0, 0)",
    color: "#e57c12",
  },
  media: {
    height: 140,
  },
  avatar: {
    backgroundColor: "#d32f2f",
  },
  horizontalScrollContainer: {
    display: "flex",
    // flexDirection: "row",
    flexWrap: "nowrap", // Prevents wrapping
    overflowX: "auto", // Enables horizontal scrolling
    padding: theme.spacing(2),
    scrollbarWidth: "none", // Hides scrollbar in Firefox
    "&::-webkit-scrollbar": {
      display: "none", // Hides scrollbar in Chrome/Safari
    },
  },
  enlargedImage: {
    position: "relative",
    top: "10vh", // Prevents it from being too high
    left: "50%",
    transform: "translateX(-50%)",
    maxWidth: "90vw", // Prevents overflow on width
    maxHeight: "70vh", // Prevents overflow on height
    objectFit: "contain", // Ensures full image is visible
    cursor: "pointer",
    borderRadius: "8px",
  },
}));
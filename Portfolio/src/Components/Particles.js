import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Particles from "react-tsparticles";
import particlesOptions from "./particles.json"

const Parts = () => {

  return (
    <Particles options={particlesOptions}/>
  );
};

export default Parts;

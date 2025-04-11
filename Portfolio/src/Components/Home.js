import React from "react";
import Header from "./Header";
import Particles from "react-tsparticles";
import particlesOptions from "./particles.json"



const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Particles options={particlesOptions}/>
    </React.Fragment>
  );
};

export default Home;
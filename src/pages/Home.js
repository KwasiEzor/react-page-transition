import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from "../images/img-1.jpg";
import { motion } from "framer-motion";
import { animateOne, animateTwo, transition } from "../animations";
const Home = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animateOne}
      transition={transition}
    >
      <Header />
      <Hero
        image={Image}
        title={"Animals Website"}
        description={"Wonderful world "}
      />
      <p>home page</p>
    </motion.div>
  );
};

export default Home;

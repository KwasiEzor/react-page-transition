import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from "../images/img-4.jpg";
import { motion } from "framer-motion";
import { animateTwo, transition } from "../animations";
const About = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animateTwo}
      transition={transition}
    >
      <Header />
      <Hero
        image={Image}
        title={" Nature Experience"}
        description={"Once in lifetime"}
      />
      <p>About page is working !!!</p>
    </motion.div>
  );
};

export default About;

import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from "../images/img-6.jpg";
import { motion } from "framer-motion";
import { animateThree, transition } from "../animations";
const Services = () => {
  return (
    <motion.div
      initial="out"
      animate="end"
      exit="out"
      variants={animateThree}
      transition={transition}
    >
      <Header />
      <Hero
        image={Image}
        title={"Amazing views"}
        description={"Discover their real world"}
      />
      <p>Services page is working</p>
    </motion.div>
  );
};

export default Services;

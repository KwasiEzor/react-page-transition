import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = styled.nav`
  height: 60px;
  background-color: transparent;
  padding: 0rem calc((100vw - 1300px) / 2);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  color: #fff;
  font-weight: bold;
  font-style: italic;
  font-size: 1.5rem;
  text-decoration: none;
  padding-left: 1rem;
  span {
    width: 60px;
    height: 60px;
    background-color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    border-radius: 5px;
    padding: 0.25rem 0.5rem;
    color: #000;
    font-family: "Verdana";
  }
`;
const NavbarLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 1rem;
  &:focus,
  &:hover {
    color: #ffcc30;
    transform: scaleX(1.1);
    transition: all 0.4s ease-in-out;
  }
`;
const NavItems = styled.div``;
const Header = () => {
  return (
    <Navbar>
      <div>
        <Logo to="/">
          {" "}
          <motion.span
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              animationDuration: 5,
              backgroundColor: "#ffcc30",
            }}
          >
            A
          </motion.span>{" "}
          Animals
        </Logo>
      </div>
      <NavItems>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/about">About</NavbarLink>
        <NavbarLink to="/services">Services</NavbarLink>
      </NavItems>
    </Navbar>
  );
};

export default Header;

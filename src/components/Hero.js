import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background: url(${({ image }) => image && image}) center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: -60px;
`;
const Container = styled.div`
  color: #fff;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.4);
  margin: 2rem;
  padding: 2rem;
  border-radius: 10px;
  h1 {
    font-size: clamp(2rem, 8vw, 5rem);
    margin-bottom: 0.5rem;
  }
  p {
    font-size: clamp(1rem, 6vw, 2.5rem);
    margin-bottom: 1rem;
  }
  button {
    font-size: clamp(0.8rem, 4vw, 1.2rem);
    padding: 0.8rem 2rem;
    background-color: #ffb347;
    background: linear-gradient(to right, #ffcc33, #ffb347);
    border: none;
    border-radius: 6px;
    outline: none;
    cursor: pointer;
  }
`;
const Hero = ({ image, title, description }) => {
  return (
    <Section image={image}>
      <Container>
        <h1>{title}</h1>
        <p>{description}</p>
        <button>Learn More</button>
      </Container>
    </Section>
  );
};

export default Hero;

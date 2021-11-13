import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import GlobalStyle from "./GlobalStyle";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";

const Section = styled.section`
  overflow: hidden;
`;

function App() {
  let location = useLocation();
  return (
    <Section>
      <GlobalStyle />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
        </Routes>
      </AnimatePresence>
    </Section>
  );
}

export default App;

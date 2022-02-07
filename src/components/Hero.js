import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Planet1 from "../Images/planet.svg";
import Planet2 from "../Images/planet-2.svg";
import Planet3 from "../Images/planet-3.svg";
import Planet4 from "../Images/planet-4.svg";

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #131313;
`;

const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
height: 100vh
padding: 3rem calc((100vw - 100px) / 2);

@media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr;
}
`;

const Button = styled(motion.button)`
  padding: 1rem 3rem;
  font-size: 1rem;
  color: white;
  font-weight: bolder;
  border: 2px solid white;
  outline: none;
  cursor: pointer;
  background: transparent;
`;

const ColumnLeft = styled.div`
  display: flex;
  color: white;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;

  h1 {
    margin-botton: 0.5rem;
    font-size: 2.5rem;
  }

  p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
  }
`;

const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  max-width: 250px;
  max-height: 250px;
`;

const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  position: relative;

  ${Image}:nth-child(1) {
    top: -60px;
    left: 50px;
  }
  ${Image}:nth-child(2) {
    top: 269px;
    left: 60px;
  }
  ${Image}:nth-child(3) {
    top: 455px;
    right: 100px;
  }
  ${Image}:nth-child(4) {
    top: 100px;
    left: 280px;
  }
`;

const Hero = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Section>
      <Container>
        <ColumnLeft>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Welcome To Space
          </motion.h1>
          <motion.p
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            Join the journey beyond our world
          </motion.p>
          <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{
              scale: 0.95,
              backgroundColor: "white",
              color: "#000",
              border: "none",
              transition: { duration: 0.1 },
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
          >
            Click Here
          </Button>
        </ColumnLeft>
        <ColumnRight>
          <Image
            src={Planet1}
            alt="Planet-1"
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          />
          <Image
            src={Planet2}
            alt="Planet-2"
            whileTap={{ scale: 0.7 }}
            drag={true}
            dragConstraints={{ left: -40, right: 100, top: 0, bottom: 50 }}
            initial={{ opacity: 0, x: 170 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          />
          <Image src={Planet3} alt="Planet-3" 
          whileTap={{ scale: 0.7 }}
          drag={true}
          dragConstraints={{ left: -40, right: 100, top: 0, bottom: 100 }}
          initial={{ opacity: 0, x: 170, y: 300 }}
          animate={{ opacity: 1, x: 0, y: 0, transition: { duration: 1 } }}
          />
          <Image src={Planet4} alt="Planet-4" 
          whileTap={{ scale: 0.7 }}
          drag={true}
          dragConstraints={{ left: -40, right: 100, top: 0, bottom: 50 }}
          initial={{ opacity: 0, x: 200, y: -100 }}
          animate={{ opacity: 1, x: 0, y: 0, transition: { duration: 1 } }}/>
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default Hero;

import React from 'react'
import styled from 'styled-components'
import { motion, useCycle } from "framer-motion";

import { MenuToggle } from './MenuToggle';
import { Navigation } from './Navigation';
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 80% 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 80% 60px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const MyNav = styled(motion.nav)`
  color: white;
     
      z-index: 999;
  `
const Background = styled(motion.div)`
  
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  min-width: 100px;
  max-width: 300px;
  width: 100%;
  background: #005750;

`
function RightNav(props) {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <MyNav

      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <Background  variants={sidebar} />

      <Navigation isOpen={isOpen} toggleOpen={toggleOpen}/>
      <MenuToggle toggle={() => toggleOpen()} />
    
    </MyNav>
  )
}

export default RightNav

import React from 'react'
import styled from 'styled-components'
import { motion, useCycle } from "framer-motion";

import { MenuToggle } from './MenuToggle';
import { Navigation } from './Navigation';
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 200px 60px)",
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
     
      
  `
const Background = styled(motion.div)`
  
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background: #fff;
`
function RightNav() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  // const containerRef = useRef(null);
  // const { height } = useDimensions(containerRef);
  return (
    <MyNav

      initial={false}
      animate={isOpen ? "open" : "closed"}
    //custom={height}
    // ref={containerRef}
    >
      <Background  variants={sidebar} />

      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    
    </MyNav>
  )
}

export default RightNav

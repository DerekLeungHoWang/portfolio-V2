import React from 'react'
import styled from 'styled-components'
import { motion, useCycle } from "framer-motion";

import { MenuToggle } from './MenuToggle';
import { Navigation } from './Navigation';
import { useTheme } from '@material-ui/core';
const sidebar = {
  open: (height = 300) => ({
    clipPath: `circle(${height * 2 + 200}px at 80% 40px)`,
    transition: {
      type: "spring",
      stiffness: 60,
      restDelta: 0
    }
  }),
  closed: {
    clipPath: "circle(30px at 73.5% 60px)",
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
  background: ${props => props.theme.palette.primary.main};
`
function RightNav(props) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const theme = useTheme();
  return (
    <MyNav
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <Background variants={sidebar} theme={theme} />

      <Navigation isOpen={isOpen} toggleOpen={toggleOpen} />
      <MenuToggle toggle={() => toggleOpen()} />

    </MyNav>
  )
}

export default RightNav

import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};
const MyList = styled(motion.ul)`
  position: absolute;
  right: 0px;
  top: 95px;
  width: 300px;
  padding:0px;
  
`
export const Navigation = (props) => {
  const { isOpen, toggleOpen } = props
  return (
    <>
      <MyList variants={variants}>
        {itemIds.map((text, i) => {
         

          return (
            <MenuItem isOpen={isOpen} toggleOpen={toggleOpen} text={text} key={text} />
          )
        })}
      </MyList>
    </>


  )
}
// <MyList variants={variants}>
//   {itemIds.map(i => (
//     <MenuItem i={i} key={i} />
//   ))}
// </MyList>


const itemIds = ["Skills", "Projects", "Contact", "Resume"];

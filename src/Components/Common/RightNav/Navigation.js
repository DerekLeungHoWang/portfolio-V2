import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import styled from "styled-components";

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
  right: 30px;
  top: 80px;
`
export const Navigation = () => (
  <MyList variants={variants}>
    {itemIds.map(i => (
      <MenuItem i={i} key={i} />
    ))}
  </MyList>
);

const itemIds = [0, 1, 2, 3, 4];

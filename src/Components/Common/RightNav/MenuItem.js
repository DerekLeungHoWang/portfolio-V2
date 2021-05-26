import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const IconPlaceHolder = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex: 40px 0;
  margin-right: 20px;

`

const TextPlaceHolder = styled.div`
   border-radius: 5px;
  width: 200px;
  height: 20px;
  flex: 1;
`

const MyList = styled(motion.li)`
  
  
`

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <MyList
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <IconPlaceHolder style={style} />
      <TextPlaceHolder style={style}/>
    </MyList>
  );
};

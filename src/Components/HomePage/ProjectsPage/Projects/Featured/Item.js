import React, { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { LoremIpsum } from "react-lorem-ipsum";
import { Link } from "react-router-dom";
import { items } from "./data";
import './style.css'
import image1 from '../../../../Common/Images/f1.jpg'
import { Frame, Scroll } from "framer"
import { useWheelScroll } from "./utils/use-wheel-scroll";
import styled from "styled-components";
import { Button } from "@material-ui/core";
export function Item({ id }) {
  const { category, title } = items.find(item => item.id === id);
  const containerRef = useRef(null);
  const y = useMotionValue(0);
  const dismissDistance = 150;
  const checkSwipeToDismiss = () => {
    // y.get() > dismissDistance && history.push("/");
  }


  useWheelScroll(
    containerRef,
    y,
    // constraints,
    checkSwipeToDismiss,
    true
  );
  // ref={containerRef} 
  return (
    <>
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"

      >
        <Link to="/" />
      </motion.div>
      <div className="card-content-container open" >
        <motion.div className="card-content" layoutId={`card-container-${id}`}       >
          <ImgContainer
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
         
          >
            <ItemImage
              // className="card-image" 
              src={image1} alt="abc" />
          </ImgContainer>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
        
          >
            <span className="category">{category}</span>
            <h2>{title}</h2>
          </motion.div>
          <motion.div className="content-container" animate>
            <Button>Youtube</Button>
            <Button>Website</Button>
            <Button>Code</Button>
            <LoremIpsum

              p={2}
              avgWordsPerSentence={6}
              avgSentencesPerParagraph={4}
            />

          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
const ItemImage = styled.img`
    filter: brightness(60%);
`

const ImgContainer = styled(motion.div)`
height: 50%;
overflow-x: scroll;    
white-space: nowrap;
width: 100%;

`

import React, { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { LoremIpsum } from "react-lorem-ipsum";
import { Link } from "react-router-dom";
import { items } from "./data";
import './style.css'
import image1 from '../../../../Common/Images/f1_1.jpg'
import image2 from '../../../../Common/Images/f.jpg'
import image3 from '../../../../Common/Images/a.jpg'

import { Frame, Scroll } from "framer"
import { useWheelScroll } from "./utils/use-wheel-scroll";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { ReactComponent as YoutubeIcon } from '../../../../Common/Images/youtube.svg';
import { ReactComponent as DesktopIcon } from '../../../../Common/Images/desktop.svg';
import { ReactComponent as GithubIcon } from '../../../../Common/Images/github2.svg';

export function Item({ id }) {
  console.log(id, "20");
  const images = [image1, image2, image3]
  const { category, title } = items.find(item => item.id === id);
  const containerRef = useRef(null);
  const y = useMotionValue(0);
  const dismissDistance = 150;
  const checkSwipeToDismiss = () => {
    // y.get() > dismissDistance && history.push("/");
  }


  // useWheelScroll(
  //   containerRef,
  //   y,
  //   // constraints,
  //   checkSwipeToDismiss,
  //   true
  // );
  // ref={containerRef} 
  return (
    <>
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0,display:"none", transition: { duration: 0.15 } }}
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
              src={id == "f" ? image2 : id == "a" ? image3 : image1} alt="abc" />
          </ImgContainer>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}

          >
            <span className="category">{category}</span>
            <h2>{title}</h2>
          </motion.div>
          <motion.div className="content-container" animate>
            <Button startIcon={<YoutubeSvg />} >Youtube</Button>
            <Button startIcon={<DesktopSvg />}>Website</Button>
            <Button startIcon={<GithubSvg />}>Code</Button>
            <LoremIpsum
              //startIcon
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
  
`

const ImgContainer = styled(motion.div)`
height: 50%;
overflow-x: scroll;    
white-space: nowrap;
width: 100%;

`

const YoutubeSvg = styled(YoutubeIcon)`
  height: 20px;
  width:20px;
`
const DesktopSvg = styled(DesktopIcon)`
  height: 20px;
  width:20px;
`
const GithubSvg = styled(GithubIcon)`
  height: 20px;
  width:20px;
`



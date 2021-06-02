import React, { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { LoremIpsum } from "react-lorem-ipsum";
import { Link } from "react-router-dom";
import { items } from "./data";
import './style.css'
import image1 from '../../../../Common/Images/f1_1.jpg'
import image2 from '../../../../Common/Images/f.jpg'
import image3 from '../../../../Common/Images/a.jpg'
import { useWheelScroll } from "./utils/use-wheel-scroll";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { ReactComponent as YoutubeIcon } from '../../../../Common/Images/youtube.svg';
import { ReactComponent as DesktopIcon } from '../../../../Common/Images/desktop.svg';
import { ReactComponent as GithubIcon } from '../../../../Common/Images/github2.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
export function Item({ id }) {

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
        exit={{ opacity: 0, display: "none", transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
        id="overWrapper"
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
          <Link to="/"> <Close icon={faTimesCircle}>Close</Close></Link>
          <motion.div className="content-container" animate>
            <Button startIcon={<YoutubeSvg />} >Youtube</Button>
            <Button startIcon={<DesktopSvg />}>Website</Button>
            <Button startIcon={<GithubSvg />}>Code</Button>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac felis sit amet leo fermentum ultricies. Donec pellentesque dui a sem placerat malesuada. Aenean libero justo, bibendum aliquam rutrum non, eleifend a velit. Donec tristique metus justo, vitae tristique orci facilisis et. Vivamus in cursus odio, at molestie orci. Nullam molestie massa quis tempor facilisis. Vestibulum ac enim pulvinar, semper elit in, facilisis est. Aliquam varius, purus posuere consectetur ultrices, quam mi pellentesque lorem, sed feugiat quam odio et sem. Mauris ligula diam, laoreet quis auctor id, convallis non neque.

Maecenas dictum justo quis quam rutrum, sit amet feugiat quam imperdiet. Praesent finibus nunc sit amet justo ultricies mattis. Vestibulum sed viverra libero, non consectetur ex. Nunc convallis dui ante, sed rhoncus orci feugiat ac. Curabitur ultrices posuere lacus, nec accumsan libero condimentum ut. Duis venenatis placerat nunc nec auctor. Mauris a cursus mauris, vel pharetra sem. Praesent auctor quam a erat lobortis, at condimentum nisl sollicitudin. Duis vulputate eu ex vitae egestas.</Text>

          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
const Text = styled.p`

 color: red;

`
const Close = styled(FontAwesomeIcon)`
  position: absolute;
  top:20px;
  right:20px;
  color: grey;
  font-size: 35px;
  background-color: black;
  border-radius: 100px;
  z-index: 15;
  @media (max-width: 385px) {
    position: fixed;
    top: 0px;
    right:40vw;
  }
`
const ItemImage = styled.img`
border-top-left-radius:20px;
border-top-right-radius:20px;
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



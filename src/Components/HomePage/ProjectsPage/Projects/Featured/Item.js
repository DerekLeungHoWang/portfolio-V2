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
  const { category, title, youtube_link, github_link, description, stack, developedTime } = items.find(item => item.id === id);
  const containerRef = useRef(null);




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

            <div className="cardContent">
              <a href={youtube_link} target="_blank"> <MyButton startIcon={<YoutubeSvg />} >Youtube</MyButton></a>
              <MyButton disabled startIcon={<DesktopSvg />}>Website</MyButton>
              <a href={github_link} target="_blank">  <MyButton startIcon={<GithubSvg />}>Code</MyButton></a>
              <h3>Intro</h3>
              <p>{description}</p>
              <h3>Main Technology</h3>
              <p>{stack}</p>
              <h3>Developed In</h3>
              <p>{developedTime}</p>
              {/* <p>asdasdasdasasdasdasdasdasdasdasasdasdasdasdasdasdasasdasdasdasdasdasdasasdasdas
              dasdasdasdasasdasdasasd
              asdasdasdasasdasdasdasd
              asdasdasdasasdasdasd
              asdasdasdasasdasdasdasdasdasasdasdasdasdasdasdasasdasdasdasdasdasasdasdasd
              dasdasdasdasasdasdasdasdasdasdasasdasdasdasdasdasdasasdasdasd</p> */}
            </div>



          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
const MyButton = styled(Button)`
z-index: 20;
`
const Text = styled.p`
  
 
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



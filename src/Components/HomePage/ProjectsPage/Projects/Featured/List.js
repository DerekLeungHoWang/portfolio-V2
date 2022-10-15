import React, { useEffect, useRef } from "react";
import { items } from "./data";
import { Link } from "react-router-dom";
import { motion, useMotionValue } from "framer-motion";
import './style.css'
import image1 from '../../../../Common/Images/f1.jpg'
import image2 from '../../../../Common/Images/f2.jpg'
import image3 from '../../../../Common/Images/a_1.jpg'
import { useWheelScroll } from "./utils/use-wheel-scroll";
import styled from "styled-components";
import { Grid } from "@mui/material";



function Card({ id, title, category, theme,i }) {
    
    const images = [image1, image2,image3]

    return (
        <MyCard className={`card `} initial="rest" whileHover="hover" animate="rest" >
            <div className="card-content-container">
                <motion.div className="card-content" layoutId={`card-container-${id}`}>
                    <ImageWrapper
                        className="card-image-container"
                        layoutId={`card-image-container-${id}`}

                    >
                        <Image
                            variants={textMotion}
                            //  className="card-image"

                            src={images[i]} alt="" />
                    </ImageWrapper>
                    <motion.div
                        className="title-container"
                        layoutId={`title-container-${id}`}
                    >
                        <span className="category">{category}</span>
                        <h2>{title}</h2>
                    </motion.div>
                </motion.div>
            </div>
            <Link to={id} className={`card-open-link`} />
        </MyCard>
    );
}

export function List({ selectedId, history }) {

    return (
        <Outer container spacing={5} direction="row"
            justify="center"
            alignItems="center" >

            {items.map((card, i) => (
                <Inner key={card.id} item component={motion.div}  >
                    <Card key={card.id} i={i} {...card} isSelected={card.id === selectedId} />
                </Inner>
            ))}

        </Outer>
    );
}

const textMotion = {
    rest: {
        scale: 1,
        
        transition: { duration: .3 }
    },
    hover: {

        scale: 1.1,
        transition: { duration: .3 }
    },

};
const Outer = styled(Grid)`

 
`
const Inner = styled(Grid)`
 
 
`

const ImageWrapper = styled(motion.div)`
  display: inline-block;
 
  
  
  
`
const Image = styled(motion.img)`
 
 
  
   
 
`

const MyCard = styled(motion.li)`
 
 
 
  
`
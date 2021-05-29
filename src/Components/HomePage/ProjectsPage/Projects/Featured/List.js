import React, { useRef } from "react";
import { items } from "./data";
import { Link } from "react-router-dom";
import { motion, useMotionValue } from "framer-motion";
import './style.css'
import image1 from '../../../../Common/Images/f1.jpg'
import { useWheelScroll } from "./utils/use-wheel-scroll";
import styled from "styled-components";


const Image = styled.img`
 object-fit: contain;
   
 
`
function Card({ id, title, category, theme }) {

    return (
        <li     className={`card ${theme}`}>
            <div    className="card-content-container">
                <motion.div  className="card-content" layoutId={`card-container-${id}`}>
                    <motion.div
                        className="card-image-container"
                        layoutId={`card-image-container-${id}`}
                    >
                        <Image 
                      //  className="card-image"
                        
                        src={image1} alt="" />
                    </motion.div>
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
        </li>
    );
}

export function List({ selectedId,history }) {

    return (
        <ul className="card-list">
            {items.map(card => (
                <Card   key={card.id} {...card} isSelected={card.id === selectedId} />
            ))}
        </ul>
    );
}

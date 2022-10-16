import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";
import { Button, Grid, useTheme } from "@mui/material";
import data from './Skills.json'
import { useInView } from "react-intersection-observer";

import { ReactComponent as ReactSvg } from '../../../Common/Images/react.svg';
import { ReactComponent as SpringBootSvg } from '../../../Common/Images/springBoot.svg';
import { ReactComponent as SeleniumSvg } from '../../../Common/Images/selenium.svg';


function AllSkills({ delayPerPixel = 0.0018 }) {
    const originOffset = useRef({ top: 0, left: 0 });
    const [animate, setAnimate] = useState(false)
    const controls = useAnimation();

    useEffect(() => {
        if (animate) {
            controls.start("visible");

        } else {
            controls.start("hidden");
        }

    }, [animate]);

    const handleClick = (e) => {

        setAnimate(!animate)

    }
    const getText = (item) => {

        if (item.id == 1) {
            return (<ReactSvg />
            )
        }

        if (item.id == 18) {
            return (<SpringBootSvg />
            )
        }

        if (item.id == 25) {
            return (<span style={{ width: "65px", wordWrap: "break-word", fontWeight: "900" }}>
                {animate ? "Hide" : "Show"}
            </span>)
        }
        if (item.id == 34) {
            return (<SeleniumSvg fill="#64ffda" stroke="#64ffda" />
            )
        }
        return (<span style={{ width: "65px", wordWrap: "break-word" }}>
            {item.skill}
        </span>)



    }


    return (
        <motion.div initial="hidden" animate={controls} variants={{}}
            style={{ display: "inline-block", minWidth: 320, maxWidth: 650 }}
        >
            <Grid container direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {/* <Grid container item xs={12} direction="row"
                justify="center"
                alignItems="center" >*/}

                {data.map((item, i) => (
                    <GridItem
                        item
                        id={i}
                        key={i}
                        i={i}
                        category={item.category}
                        skill={item.skill}
                        onClick={handleClick}
                        originIndex={24}
                        delayPerPixel={delayPerPixel}
                        originOffset={originOffset}
                        setAnimate={setAnimate}
                    >

                        {getText(item)}

                    </GridItem>


                ))}

                {/* </Grid> */}
            </Grid >
        </motion.div>
    );
}

function GridItem(props) {
    const delayRef = useRef(0);
    const offset = useRef({ top: 0, left: 0 });
    const ref = useRef();
    const [inViewRef, inView] = useInView()
    const { delayPerPixel, i, originIndex, originOffset, onClick, id, category, skill, setAnimate } = props
    const theme = useTheme();



    useLayoutEffect(() => {
        if (!inView && i === originIndex) {
            setAnimate(false)
        }

        if (inView && i === originIndex) {
            setAnimate(true)
        }



        const element = ref.current;
        if (!element) return;
        offset.current = {
            top: element.offsetTop,
            left: element.offsetLeft
        };
        if (i === originIndex) {
            originOffset.current = offset.current;
        }
    }, [delayPerPixel, inView]);

    useEffect(() => {

        const dx = Math.abs(offset.current.left - originOffset.current.left);
        const dy = Math.abs(offset.current.top - originOffset.current.top);
        const d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
        delayRef.current = d * delayPerPixel;
    }, [delayPerPixel]);
    function handleRef(node) {
        inViewRef(node);
        ref.current = node;
    }
    return (<Box
        component={motion.div}
        variant="contained"
        theme={theme}
        category={category}
        skill={skill}
        ref={handleRef} id={id} variants={itemVariants} custom={{ delayRef, id }} onClick={onClick}>{props.children}</Box>)
        ;
}

const itemVariants = {
    hidden: props => {

        return ({

            opacity: props.id == 24 ? 1 : 0,
            scale: props.id == 24 ? 1 : 0,
            transition: { delay: props.delayRef.current, }
        })
    },
    visible: props => ({

        opacity: 1,
        scale: 1,
        transition: { delay: props.delayRef.current }
    })
};

const Box = styled(Button)`
  margin: 10px;
  height: 65px;
  width: 65px;
  cursor: pointer;
  text-align: center;
  font-size: 11px;
  border:${({ skill }) => {
        skill = skill.toLowerCase()
        switch (skill) {
            case "center":
                return "2px solid red"
            default:
                return ;
        }

    }};
  color:${({ skill }) => {
        skill = skill.toLowerCase()
        switch (skill) {
            case "center":
                return "#d46e6e"
            case "react":
                return "#0af2bc"
            case "spring boot":
                return "#0af2bc"
            case "selenium":
                return "#0af2bc"
            default:
                return "white";
        }

    }};
  font-weight: 600;
  background:${({ category, theme }) => {
        switch (category) {
            case "center":
                return "black"
            case "frontend":
                return theme.palette.primary.frontend
            case "backend":
                return theme.palette.primary.backend
            case "deployment":
                return theme.palette.primary.deployment
            case "testing":
                return theme.palette.primary.testing
            case "others":
                return theme.palette.primary.others
            default:
                return null;
        }
    }};
    &:hover{
       
        background:${({ category, theme }) => {
        switch (category) {
            case "center":
                return "black"
            case "frontend":
                return theme.palette.primary.frontend
            case "backend":
                return theme.palette.primary.backend
            case "deployment":
                return theme.palette.primary.deployment
            case "testing":
                return theme.palette.primary.testing
            case "others":
                return theme.palette.primary.others
            default:
                return null;
        }
    }};
    }
`;

export default AllSkills;

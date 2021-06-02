import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import styles from './CoverPage.module.css'
import Button from '@material-ui/core/Button';
import { Grid, useTheme } from '@material-ui/core';
import StyledButton from '../../Common/StyledButton/StyledButton';
import { useSelector } from 'react-redux';
import { blue, pink } from '@material-ui/core/colors';
import Pdf from '../../Common/PDF/resume.pdf'


const Title = () => {
    const line1 = "I am Derek Leung,  "
    const line2 = "Software Developer."
    return (<Heading
        initial="hidden"
        animate="visible"
        variants={sentence}

    >


        {line1.split("").map((char, index) => {
            return (
                <motion.span
                    key={`${char}-${index}`}
                    variants={letter}
                    style={{ color: "white" }}
                >
                    {char}
                </motion.span>
            )
        })}
        <br />
        {line2.split("").map((char, index) => {
            return (
                <motion.span

                    key={`${char}-${index}`}
                    variants={letter}>
                    {char}
                </motion.span>
            )
        })}


    </Heading>)
}




const sentence = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.05
        }
    }
}
const letter = {
    hidden: {
        opacity: 0, y: 50,
    },
    visible: {
        opacity: 1,
        y: 0
    }
}



const Wrapper = styled(Grid)`
    color: white;
    height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.palette.primary.background};
`;





export default function CoverPage() {
    const theme = useTheme();
    const prjPageInview = useSelector(state => state.AnimationReducer.prjPageInView)
    const ref = React.useRef(null)
    const talkBtn = useAnimation();
    const [animate, setAnimate] = useState(false);
    const [pos, setPos] = useState("relative")



    return (
        <Wrapper container
            direction="row"
            justify="center"
            alignItems="center"
            theme={theme}
            id="coverPage"

        >
            <Container item >
                <SayHi theme={theme}
                    initial="hidden"
                    animate="visible"
                    variants={sayHi}>Hi There,</SayHi>
                <MyTitle />
                <Button

                    size="large"
                    component={motion.div}
                    variant="outlined"
                    color="primary"
                    ref={ref}
                    // initial="hidden"
                    // variants={talkBtnVariants}
                    animate={talkBtn}

                >
                    <a href={Pdf} target="_blank">    Resume</a>



                </Button>
            </Container>

        </Wrapper>
    )
}

const Container = styled(Grid)`
 
  padding-left: 60px !important;
 
   
`
const MyTitle = styled(Title)`
  
  
   
`
const SayHi = styled(motion.h4)`
    color: ${props => props.theme.palette.primary.main};
   
`
const sayHi = {
    hidden: {
        opacity: 0,
        y: 20

    },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.2 }
    }
}


const Heading = styled(motion.h2)`
    font-family:  sans-serif;
    color:white;
    font-size: 52px;
 
`

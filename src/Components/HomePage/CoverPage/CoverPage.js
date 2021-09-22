import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import styles from './CoverPage.module.css'
import Button from '@material-ui/core/Button';
import { Container, Grid, useTheme } from '@material-ui/core';
import StyledButton from '../../Common/StyledButton/StyledButton';
import { useSelector } from 'react-redux';
import { blue, pink } from '@material-ui/core/colors';
import Pdf from '../../Common/PDF/resume.pdf'
import { ReactComponent as GoodTeamSVG } from '../../Common/Images/goodTeam.svg';
import Navbar from '../../Common/Navbar/Navbar';

const Title = () => {
    const line1 = "I am Ho Wang Leung,  "
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


    const handleClick = (e) => {
    
       document.getElementById("skillPage").scrollIntoView()
        

       

    }




    return (


        <Container className={styles.coverContainer} >
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid container item xs={12} lg={4} alignItems="center" justify="center">
                    <div>
                        <SayHi theme={theme}
                            initial="hidden"
                            animate="visible"
                            variants={sayHi}>Hi There,</SayHi>
                        <MyTitle theme={theme} />

                        <Button
                            size="large"
                            component={motion.div}
                            variant="contained"
                            color="primary"
                            ref={ref}
                            // initial="hidden"
                            // variants={talkBtnVariants}
                            animate={talkBtn}
                            style={{ marginRight: "15px" }}
                            onClick={handleClick}
                        >
                            Know More
                        </Button>
                        <a href={Pdf} target="_blank">
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
                                Resume
                            </Button>
                        </a>
                    </div>
                </Grid>
                <Grid container item lg={4} xs={12} justify="center" alignItems="center">

                    <GoodTeamSVG className={styles.goodTeamSvg} />

                </Grid>
            </Grid>
        </Container>


    )
}


const MyTitle = styled(Title)`
      color:  ${props => props.theme.palette.primary.main};
  
   
`
const SayHi = styled(motion.h3)`
    color: ${props => props.theme.palette.primary.green};
   
`
const sayHi = {
    hidden: {
        opacity: 0,
        y: 100

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
    color:black;
`

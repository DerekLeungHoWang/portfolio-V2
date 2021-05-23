import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';
import styles from './CoverPage.module.css'
import Button from '@material-ui/core/Button';
import { Grid, useTheme } from '@material-ui/core';
import StyledButton from '../../Common/StyledButton/StyledButton';


const Title = () => {
    const line1 = "I am Derek Leung , "
    const line2 = "a Software Developer"
    return (<motion.h1
        initial="hidden"
        animate="visible"
        variants={sentence}

    >

        <motion.h6 color="primary">Hi,There</motion.h6>
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


    </motion.h1>)
}
const myButton = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}

const StyledTitle = styled(Title)`
 color: white;
`;

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
    background-color: rgb(31, 31, 44);
`;



export default function CoverPage() {
    const theme = useTheme();
    return (
        <Wrapper container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <Grid item  >
                <StyledTitle />
                <StyledButton >Let's Talk</StyledButton>
            </Grid>

        </Wrapper>
    )
}

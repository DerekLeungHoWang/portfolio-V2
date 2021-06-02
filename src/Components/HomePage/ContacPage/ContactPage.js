import { motion } from 'framer-motion';
import styled from 'styled-components';
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { Grid, useTheme } from '@material-ui/core';
import { ContactForm } from './ContactForm';


const Wrapper = styled(Grid)`
height: 100vh;
width: 100vw;
background-color: ${props => props.theme.palette.primary.background};
color: white;
`;

const Title = styled(motion.h1)`
    color:${props => props.theme.palette.primary.main};
`
export default function ContactPage() {
    const theme = useTheme();

    return (
        <Wrapper theme={theme} container >
            <Grid container item xs={12}
                direction="column"
                justify="center"
                alignItems="center"
            >
                {/* <Grid container item xs={12} lg={6} direction="column"
                    justify="center"
                    alignItems="center" >
                       <Title theme={theme} >Contact</Title>
                </Grid> */}
                <Title theme={theme} >Contact</Title>

                <ContactForm />
            </Grid>
        </Wrapper>
    )
}

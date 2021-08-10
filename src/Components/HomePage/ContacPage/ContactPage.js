import { motion } from 'framer-motion';
import styled from 'styled-components';
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { Grid, useTheme } from '@material-ui/core';
import { ContactForm } from './ContactForm';


const Wrapper = styled(Grid)`
margin-top: 90px;
height: auto;
width: 100vw;
background-color: ${props => props.theme.palette.primary.background};
color: white;
padding-bottom: 90px;
`;

const Title = styled(motion.h1)`
    color:${props => props.theme.palette.primary.main};
    font-size: 40px;
    margin-bottom: 90px;
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
     
                <Title theme={theme} >Contact</Title>

                <ContactForm />
            </Grid>
        </Wrapper>
    )
}

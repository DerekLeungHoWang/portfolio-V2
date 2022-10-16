import { motion } from 'framer-motion';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { Container, Grid, useTheme, Button } from '@mui/material';
import { ContactForm } from './ContactForm';
import PageHeader from '../../Common/PageHeader/PageHeader';
import axios from 'axios';



const Wrapper = styled(Container)`
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
        <Wrapper theme={theme}  >
            <Grid container item xs={12}
                direction="column"
                justifyContent="center"
                alignItems="center"
            >

                <PageHeader>Contact</PageHeader>

                <ContactForm   />

            </Grid>
        </Wrapper>
    );
}


import { motion } from 'framer-motion';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { setPrjPageInView } from '../Actions/HomePageActions';
import { Grid, useTheme } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import ProjectArchive from './Projects/Archive/ProjectArchive';
import AllProjects from './Projects/AllProjects/AllProjects';
import FeaturedProjects from './Projects/Featured/FeaturedProjects';
import PageHeader from '../../Common/PageHeader/PageHeader';
import SwitchView from './Projects/SwitchView/SwitchView';

const MyContainer = styled(Container)`
     
    height: auto;
    width: 100%;
    background-color: ${props => props.theme.palette.primary.background};
  
`;



const Title = styled(motion.h1)`
    color:${props => props.theme.palette.primary.main};
`


export default function FeaturedProjectPage(props) {
    const { id } = props
    const theme = useTheme();
    const dispatch = useDispatch()

    

    const [ref, inView, entry] = useInView({ threshold: 0.1 });
    useEffect(() => {
        if (inView) {

        } else {

        }
    }, [inView]);

    return (
        <MyContainer theme={theme} maxWidth={false} > 
            <Grid container 
                direction="column"
                justify="center"
                alignItems="center"
               
            >
                <PageHeader  >Featured</PageHeader>
                <FeaturedProjects  />
            </Grid>
        </MyContainer>
    )
}


import { motion } from 'framer-motion';
import styled from 'styled-components';
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { setPrjPageInView } from '../Actions/HomePageActions';
import { Grid, useTheme } from '@material-ui/core';
import ProjectArchive from './Projects/Archive/ProjectArchive';
import AllProjects from './Projects/AllProjects/AllProjects';
import FeaturedProjects from './Projects/Featured/FeaturedProjects';

const Wrapper = styled(Grid)`
    min-height: 100vh;
    height: auto;
    width: 100%;
   background-color: ${props => props.theme.palette.primary.background};
   //background-color: green;
`;

const Container = styled(Grid)`
    height: 100%;
    width: 100%;
   
 
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
        <Wrapper id="featuredPage" ref={ref} theme={theme}
            container
        >
            
            <Container container item xs={12} style 
            direction="row"
                justify="center"
                alignItems="center"  >
               <Title theme={theme} >Featured</Title>
                <FeaturedProjects id={id} />

            </Container>
        </Wrapper>
    )
}

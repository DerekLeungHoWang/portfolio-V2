
import { motion } from 'framer-motion';
import styled from 'styled-components';
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { setPrjPageInView } from '../Actions/HomePageActions';
import { Container, Grid, useTheme } from '@material-ui/core';
import ProjectArchive from './Projects/Archive/ProjectArchive';
import AllProjects from './Projects/AllProjects/AllProjects';
import FeaturedProjects from './Projects/Featured/FeaturedProjects';
import PageHeader from '../../Common/PageHeader/PageHeader';

const Wrapper = styled(Container)`
    height: auto;
    width: 100vw;
    background-color: ${props => props.theme.palette.primary.background};
    
`;
const Title = styled(motion.h1)`
    color:${props => props.theme.palette.primary.main};
    font-size: 40px;
`


export default function ProjectsPage(props) {
    const { id } = props
    const theme = useTheme();
    const dispatch = useDispatch()

    const [ref, inView, entry] = useInView({ threshold: 0.1 });
    useEffect(() => {

        if (inView) {
            dispatch(setPrjPageInView(true))
        } else {
            dispatch(setPrjPageInView(false))
        }
    }, [inView]);

    return (
        <Wrapper id="projectPage" ref={ref} theme={theme} container style={{maxWidth:"70%"}}>
            <Grid container
                xs={12}
                direction="column"
                justify="center"
                alignItems="center"
            >

                <PageHeader>More Projects</PageHeader>

                <ProjectArchive />
            </Grid>
        </Wrapper>
    )
}

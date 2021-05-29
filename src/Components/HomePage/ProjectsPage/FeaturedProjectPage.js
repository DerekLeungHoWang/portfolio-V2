
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
    height: auto;
    width: 100vw;
    background-color: ${props => props.theme.palette.primary.background};
    user-select: none;
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
        <Wrapper id="featuredPage" ref={ref} theme={theme} container direction="row"
            justify="center"
            alignItems="center" >
            <Grid container item xs={12}  >
                <Title theme={theme} >Featured</Title>
                <FeaturedProjects id={id} />

            </Grid>
        </Wrapper>
    )
}

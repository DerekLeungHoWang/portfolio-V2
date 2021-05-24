import { Grid, makeStyles } from '@material-ui/core';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react'
import styled from 'styled-components';
import CoverPage from './CoverPage/CoverPage'
import ProjectsPage from './ProjectsPage/ProjectsPage'
import { useInView } from "react-intersection-observer";
import { useSelector } from 'react-redux';
const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,


    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
const Col = styled(Grid)`  
`;




export default function HomePage() {

 
    const classes = useStyles();
    return (
        <Grid container
            className={classes.root}
        >
            <Col container item xs={12}  >
                <CoverPage  />
            </Col>
            <Col container item xs={12}  >
                <ProjectsPage />
            </Col>
         
        </Grid>
    )
}

import { Grid, makeStyles } from '@material-ui/core';
import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';
import CoverPage from './CoverPage/CoverPage'
import ProjectsPage from './ProjectsPage/ProjectsPage'
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
const Inner = styled(Grid)`

 
 
   
`;
export default function HomePage() {
    const classes = useStyles();
    return (
        <Grid container
            className={classes.root}
        >
            <Grid container item xs={12}  >
                <CoverPage />
            </Grid>
            <Grid container item xs={12}  >
                <ProjectsPage />
            </Grid>

        </Grid>
    )
}

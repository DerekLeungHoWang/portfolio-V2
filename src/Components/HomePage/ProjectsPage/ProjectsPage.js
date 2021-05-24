
import { motion } from 'framer-motion';
import styled from 'styled-components';
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { setPrjPageInView } from '../Actions/HomePageActions';
const Wrapper = styled(motion.div)`
    height: 100vh;
    width: 100vw;
    background: black;
    
`;
export default function ProjectsPage() {
     const dispatch = useDispatch()

    const [ref, inView, entry] = useInView({ threshold: 0.1 });
    useEffect(() => {
       
        if (inView) {      
            dispatch(setPrjPageInView(true))
        } else {
            dispatch(setPrjPageInView(false))
        }
    }, [ inView]);

    return (
        <Wrapper ref={ref}>
            <h1 style={{ color: "green" }}>HELLO</h1>
        </Wrapper>
    )
}

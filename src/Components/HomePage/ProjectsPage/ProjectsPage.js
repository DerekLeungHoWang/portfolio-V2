
import { motion } from 'framer-motion';
import styled from 'styled-components';
import React from 'react'
const Wrapper = styled(motion.div)`
    height: 100vh;
    width: 100vw;
    background: red;
    
`;
export default function ProjectsPage() {
    return (
        <Wrapper>
            <h1 style={{ color: "green" }}>HELLO</h1>
        </Wrapper>
    )
}

import React, { useEffect, useRef } from 'react'
import "./pj.scss";
import data from '../Projects.json'
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import gsap from "gsap";
import styled from 'styled-components';
import { Grid } from '@material-ui/core';



function ProjectDetail({ match }) {
    let { params: { projectId } } = match

    let containerRef = useRef(null);
    let imageRef = useRef(null);
    let imageReveal = CSSRulePlugin.getRule(`.img-container:after`);
    console.log(imageReveal)
    let tl = useRef(gsap.timeline());
    useEffect(() => {

        tl.current.set(imageReveal, { width: "100%", })
        tl.current.to(containerRef, {
            duration: 0,
            visibility: "visible"
        })
            .to(imageReveal, {
                duration: 1.4,
                width: "0%",
                ease: "Power2.easeInOut",
                delay: .75
            })
            .from(imageRef, {
                duration: 1.4,
                scale: 1.6,
                ease: "Power2.easeInOut",
                delay: -1.4
            })

    }, []);

    return (
        data.map((item, index) => {

            return (item.id === parseInt(projectId) &&
                (<Container container ref={el => (containerRef = el)} xs={12}
                    direction="row"
                    justify="center"
                    alignItems="center">

                    <Grid container item
                        lg={6}
                    >
                        <div class="heading animatable">{item.title}</div>
                    </Grid>
                    <Grid container item className='img-container'
                        lg={6}
                    >
                        <img
                            ref={el => (imageRef = el)}
                            src="https://jardinage.lemonde.fr/images/dossiers/2017-07/carlin-2-140206.jpg"
                        />
                    </Grid>





                </Container>))
        })



    )

}
const Container = styled(Grid)`
      width: 100%;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    visibility: hidden;
background-color:#0a192f;

`
{/* <div class="heading animatable">{item.title}</div> */ }

export default ProjectDetail

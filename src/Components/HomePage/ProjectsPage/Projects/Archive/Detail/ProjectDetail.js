import React, { useEffect, useRef } from 'react'
import "./pj.scss";
import data from '../Projects.json'
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import gsap from "gsap";
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import image1 from '../../../../../Common/Images/project1.jpg'


function ProjectDetail({ match }) {
    let { params: { projectId } } = match

    let containerRef = useRef(null);
    let imageRef = useRef(null);
    let imageReveal = CSSRulePlugin.getRule(`.img-container:after`);
    console.log(imageReveal)
    let tl = useRef(gsap.timeline());
    useEffect(() => {
        document.getElementById("navBar").style.display = "none"
        tl.current.set(imageReveal, { width: "100%", })
        tl.current.to(containerRef, {
            duration: 0,
            visibility: "visible"
        })
            .to(imageReveal, {
                duration: 1.4,
                width: "0%",
                ease: "Power2.easeInOut",
                delay: .75,
            })
            .from(imageRef, {
                duration: 1.4,
                scale: 1.6,
                ease: "Power2.easeInOut",
                delay: -1.4
            })
            .to(imageRef, {
                duration: 2.4,
                borderRadius: "20px"
            })

        return () => {
            document.getElementById("navBar").style.display = "block"
        }

    }, []);

    return (
        data.map((item, index) => {

            return (item.id === parseInt(projectId) &&
                (<Container key={item.id} container ref={el => (containerRef = el)}
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Row container item
                        lg={12}
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >

                        <div className='img-container'>
                            <img
                                ref={el => (imageRef = el)}
                                src={image1}
                            />
                        </div>

                    </Row>
                    <Grid container item
                        lg={12}
                    >
                        <div className="projectDescription animatable">{item.title}</div>

                        <div style={{ margin: "50px" }} className="projectDescription animatable">{item.description}</div>
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

const Row = styled(Grid)`
 
`
{/* <div class="heading animatable">{item.title}</div> */ }

export default ProjectDetail

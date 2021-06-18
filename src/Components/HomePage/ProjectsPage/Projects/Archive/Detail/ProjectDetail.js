import React, { useEffect, useRef } from 'react'
import "./pj.scss";
import {data} from '../data'
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import gsap from "gsap";
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core'
import { ReactComponent as YoutubeIcon } from '../../../../../Common/Images/youtube.svg';
import { ReactComponent as DesktopIcon } from '../../../../../Common/Images/desktop.svg';
import { ReactComponent as GithubIcon } from '../../../../../Common/Images/github2.svg';
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


        return () => {
            document.getElementById("navBar").style.display = "block"
        }

    }, []);

    return (
        data.map((item, index) => {

            return (item.id === parseInt(projectId) &&
                (<Outer key={item.id} container ref={el => (containerRef = el)}
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Inner container item   >

                        <Row container item
                            lg={12}
                            direction="column"
                            justify="center"
                            alignItems="center"
                        >
                            <TopTitle
                            >
                                <p className="projectDescription animatable">Frontend</p>
                                <p className="projectDescription animatable">2021</p>
                            </TopTitle>


                            <div className='img-container'>
                                <img
                                    ref={el => (imageRef = el)}
                                    src={item.img}
                                />
                            </div>


                        </Row>
                        <Grid container item
                            lg={12}
                            direction="row"
                            justify="center"
                            alignItems="flex-start"
                        >

                            <ButtonGroup>
                                <a href={item.youtube_link} target="_blank">
                                    <Button
                                 
                                        color="primary" startIcon={<YoutubeSvg />}>Video</Button></a>
                                <a href={item.actual_link} target="_blank">
                                    <Button
                                        style={{ marginLeft: "10px" }}
                                        color="primary" startIcon={<DesktopSvg />} >Website</Button></a>
                                <a href={item.github_link} target="_blank">
                                    <Button style={{ marginLeft: "10px" }}
                                        color="primary" startIcon={<GithubSvg />}>Code</Button>
                                </a>
                            </ButtonGroup>

                            <div id="pjrojectWrapper">

                                <div className="projectTitle animatable">
                                    {item.title}

                                </div>
                                <div className="projectDescription animatable">

                                    {item.description}
                                </div>
                            </div>
                        </Grid>
                    </Inner>

                </Outer>))
        })



    )

}
const Outer = styled(Grid)`
      width: 100%;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    visibility: hidden;
background-color:#0a192f;
overflow: hidden;
`
const Inner = styled(Grid)`
      width: 80%;
    height: auto;

`
const TopTitle = styled.div`
    width: 81%;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   padding-top: 0px;
   margin-top: 0px;
   margin-bottom: 15px;

   p{
    margin: 0px  10px;
    padding: 0px 0px;
    font-weight: 600;
    padding-bottom: 15px;
    font-size: 1.2rem;
   }
   
`

const ButtonGroup = styled.div`
    width: 80%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-top: 10px;
 
`

const Row = styled(Grid)`
  
`
const YoutubeSvg = styled(YoutubeIcon)`
  height: 100%;
  width:20px;
`
const DesktopSvg = styled(DesktopIcon)`
  height:  100%;
  width:20px;
  fill: white;
`
const GithubSvg = styled(GithubIcon)`
  height:  100%;
  width:20px;
  stroke: white;
 
`

export default ProjectDetail

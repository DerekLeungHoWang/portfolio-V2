import React, { useEffect, useRef, useState } from 'react'
import "./pj.scss";
import { data } from '../data'
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
    const [loaded, setLoaded] = useState(false)
    let containerRef = useRef(null);
    let imageRef = useRef(null);
    let imageReveal = CSSRulePlugin.getRule(`.img-container:after`);
    console.log(imageReveal)
    let tl = useRef(gsap.timeline());

    useEffect(() => {
        document.getElementById("navBar").style.display = "none"
        if (loaded) {
            console.log("loaded");
          document.querySelector(".project_detail_inner_container").style.visibility = "visible"

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
        }


        return () => {
            document.getElementById("navBar").style.display = "block"
        }

    }, [loaded]);


    useEffect(() => {

        data.forEach((d) => {

            if (d.id === parseInt(projectId)) {
                const img = new Image()
                img.src = d.img

                img.onload = () => {
                    setLoaded(true)
                };
            }


        });


    }, [])


    return (
        data.map((item, index) => {

            return (  item.id === parseInt(projectId) &&
                (<div key={item.id} ref={el => (containerRef = el)}
                    className="project_detail_container"
                >

                    <div className="project_detail_inner_container">
                        <SideText className="animatable">PROJECT - 01</SideText>
                        <div>
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
                        </div>

                        <div id="buttonGrouptWrapper">

                            <ButtonGroup className="animatable">
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
                        </div>

                        <div id="pjrojectWrapper">

                            <div className="projectTitle animatable">
                                {item.title}

                            </div>
                            <div className="projectDescription animatable">

                                {item.description}
                            </div>
                        </div>
                    </div>



                </div>))
        })



    )

}
const SideText = styled.h1`
    color:#2FA687;
    position: absolute;
    transform: rotate(90deg);
    top:40%;
    left:5%;
    @media (max-width: 768px) {
       display: none;
    }
`
const TopTitle = styled.div`
    width: 100%;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   p{
 
    font-weight: 600;
    padding-bottom: 15px;
    font-size: 1.2rem;
   }
   
`

const ButtonGroup = styled.div`
     
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-top: 10px;
    margin-bottom: 5px;
    @media (max-width: 375px) {
        Button{
       font-size: 10px;
    }
  }

 
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

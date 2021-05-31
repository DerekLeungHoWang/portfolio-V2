import { Grid, useTheme } from '@material-ui/core'
import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush, faCogs, faVial } from '@fortawesome/free-solid-svg-icons'

const data = [
    {
        id: 1,
        icon: "faPaintBrush",
        title: "Frontend",
        highlightText: "React.js",
        description1: "My strength in the frontend is ",
        description2: ", combining with libraries like styled comopnents and framer motion to create amazing UI experience"
    },
    {
        id: 2,
        icon: "faCogs",
        title: "Backend",
        highlightText: "Spring Boot",
        description1: "Familiar with creating web api and manipulating data with MySQL using ",
        description2: ""
    },
    {
        id: 3,
        icon: "faViral",
        title: "Autmoated Testing",
        highlightText: "Selenium",
        description1: "Adopting autmoated Testing with ",
        description2: " has helped me and my team to save a ton of time, able to precisely and flexibly locate element with dynamic xpath."
    }
]

const Wrapper = styled(motion.div)`
    color:white;
    height:"100%";
    margin: auto 25px;
`

const Title = styled(motion.h2)`
/* margin-top: 30px;
margin-bottom: 30px; */
margin-left: 10px;
`
const Description = styled(motion.p)`
   color: #9d9ca1;
   font-size: 20px;
   line-height: 28px;

`

const Divider = styled(motion.div)`
   border-bottom: 1px solid white;
    border-radius: 100%;
 
    &:last-child{
        margin: 25px 25px; 
    }
`
const HighlightText = styled(motion.span)`
       color:${props => props.theme.palette.primary.main};
       font-weight: 600;

`

const Icon = styled(FontAwesomeIcon)`
    font-size: 20px;
`
export default function SkillLeft() {
    const theme = useTheme();
    const icons = [faPaintBrush, faCogs, faVial]
    return (
        <Grid container direction="row"
            justify="center"
            alignItems="center">
            <Grid container item xs={12} direction="row"
                justify="center"
                alignItems="center" >
                <motion.div initial="hidden" variants={{}}
                    style={{ display: "inline-block", minWidth: 320, maxWidth: 650 }}
                >
                    {data.map((item, i) => {


                        return ((
                            <Wrapper key={i} >
                                <Divider />
                                <Grid item container direction="row"

                                    alignItems="center">
                                    <Icon icon={icons[i]} />
                                    <Title>
                                        {item.title}
                                    </Title>

                                </Grid>
                                <Description>
                                    <span>{item.description1}</span>
                                    <HighlightText theme={theme}  >{item.highlightText}</HighlightText>
                                    <span>{item.description2}</span>
                                </Description>
                            </Wrapper>

                        ))
                    })}
                    <Divider />
                </motion.div>
            </Grid>


        </Grid>
    )
}

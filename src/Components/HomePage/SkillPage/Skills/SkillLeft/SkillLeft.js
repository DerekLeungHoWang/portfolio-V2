import { Grid } from '@material-ui/core'
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
        description: "React.js has been my favourite frontend framework, love to use with material-ui/ant-design for quick development "
    },
    {
        id: 2,
        icon: "faCogs",
        title: "Backend",
        description: "Currently my main backend technology is Spring Boot and MySQL, also had experience with Node.js with express.js"
    },
    {
        id: 3,
        icon: "faViral",
        title: "Autmoated Testing",
        description: "I am especially good at Selenium and able to use relative xpath to capture the location of web element in a dynamic and flexible way. Combining with Apache Poi to create fully customized test report in excel format"
    }
]

const Wrapper = styled(motion.div)`
    color:white;
    height:"100%";
`

const Title = styled(motion.h2)`

margin-left: 10px;
`
const Description = styled(motion.p)`
   

`

const Divider = styled(motion.div)`
   border-bottom: 1px solid white;
    border-radius: 100%;
     margin-top: 50px;

`

const Icon = styled(FontAwesomeIcon)`
    font-size: 20px;
`
export default function SkillLeft() {

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
                                    {item.description}
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

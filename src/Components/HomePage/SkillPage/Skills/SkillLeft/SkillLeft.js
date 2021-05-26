import { Grid } from '@material-ui/core'
import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'


const data = [
    {
        id: 1,
        title: "Frontend",
        description: "React.js has been my favourite frontend framework, love to use with material-ui/ant-design for quick development "
    },
    {
        id: 2,
        title: "Backend",
        description: "Currently my main backend technology is Spring Boot and MySQL, also had experience with Node.js with express.js"
    },
    {
        id: 3,
        title: "Autmoated Testing",
        description: "I am especially good at Selenium and able to use relative xpath to capture the location of web element in a dynamic and flexible way. Combining with Apache Poi to create fully customized test report in excel format"
    }
]

const Wrapper = styled(motion.div)`
    color:white;
    height:"100%";
`

const Title = styled(motion.h2)`


`
const Description = styled(motion.p)`
   

`

const Divider = styled(motion.div)`
   border-bottom: 1px solid white;
    border-radius: 100%;
     margin-top: 50px;

`
export default function SkillLeft() {


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
                                <Title>
                                    {item.title}
                                </Title>
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

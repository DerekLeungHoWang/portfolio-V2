import { Container, Grid } from '@material-ui/core'
import React from 'react'

export default function ProjectBody({ item }) {
    return (
        <Container maxWidth={false} style={{ width: "100%" }}>
            <Grid container direction="column" justify="center" alignItems="center">

                <Grid container item xs={12} direction="column" justify="center" alignItems="center">
                    <div>
                        <Grid style={{marginBottom:"15px"}} container xs={12} direction="column" justify="center" alignItems="center">
                            <span className="projectTitle animatable"  >
                                Introduction
                            </span>
                        </Grid>

                        <div className="projectDescription animatable">
                            {item.description}
                        </div>
                    </div>
                </Grid>






         



            </Grid>
        </Container>
    )
}

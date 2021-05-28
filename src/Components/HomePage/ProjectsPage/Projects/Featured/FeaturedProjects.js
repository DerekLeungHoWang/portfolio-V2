import { Grid } from '@material-ui/core'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

import { Item } from './Item'
import { List } from './List'
import './style.css'

const Wrapper = styled(Grid)`
    width:100vw !important;

`

export default function FeaturedProjects(props) {
    let imageHasLoaded = true
    const { id } = props
    return (
        <Wrapper

            container direction="row"
            justify="center"
            alignItems="center">
            <Grid  item xs={9}>
                <List selectedId={id} />
                <AnimatePresence>
                    {id && imageHasLoaded && <Item id={id} key="item" />}
                </AnimatePresence>
            </Grid>
        </Wrapper>
    )
}

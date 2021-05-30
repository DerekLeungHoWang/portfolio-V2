import { Grid } from '@material-ui/core'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect } from 'react'
import styled from 'styled-components'

import { Item } from './Item'
import { List } from './List'
import './style.css'

const Wrapper = styled(Grid)`
    width: 100%;
    height: 100%;

`
const Container = styled(Grid)`
    width: 100%;
   

`
export default function FeaturedProjects(props) {
    let imageHasLoaded = true
    const { id } = props
    useEffect(() => {

        if (id) {
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.body.style.overflow = 'unset'
            document.body.style.overflowX = 'hidden'
        }  
    }, [id])

   
    return (
        <>
          
                <List selectedId={id} />
                <AnimatePresence>
                    {id && imageHasLoaded

                        && <Item id={id} key="item" />
                        //  
                    }
                </AnimatePresence>
         
        </>
    )
}

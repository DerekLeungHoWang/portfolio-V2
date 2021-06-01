import { Grid } from '@material-ui/core'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect } from 'react'
import styled from 'styled-components'

import { Item } from './Item'
import { List } from './List'
import './style.css'
import image1 from '../../../../Common/Images/f1.jpg'
import image2 from '../../../../Common/Images/f2.jpg'
import image3 from '../../../../Common/Images/a_1.jpg'
import image1_1 from '../../../../Common/Images/f1_1.jpg'
import image2_1 from '../../../../Common/Images/f.jpg'
import image3_1 from '../../../../Common/Images/a.jpg'
import useWindowSize from '../../../../Common/utils/use-window-size'


const Wrapper = styled(Grid)`
    width: 100%;
    height: 100%;

`
const Container = styled(Grid)`
    width: 100%;
   

`
export default function FeaturedProjects(props) {
    const windowSize = useWindowSize();
    
    let imageHasLoaded = true
    const { id } = props
    useEffect(() => {

        if (id) {
            document.body.style.overflow = 'hidden'
             
            //overscroll-behavior-y: none;
        }

        return () => {
            document.body.style.overflow = 'unset'
            document.body.style.overflowX = 'hidden'
         
        }
    }, [id])

    useEffect(() => {
        let imageList = [image1, image2,image3,image1_1,image2_1,image3_1]
        imageList.forEach((image) => {
            new Image().src = image
        });
    }, [])

    return (
        <>

            <List selectedId={id} />
            <AnimatePresence>
                {id && imageHasLoaded

                    && <Item windowSize={windowSize} id={id} key="item" />
                    //  
                }
            </AnimatePresence>

        </>
    )
}

import { Button, styled, useTheme } from '@material-ui/core'
import { motion } from 'framer-motion'
import React, { forwardRef } from 'react'
import styles from './StyledButton.module.css'


const StyledButton = forwardRef((props, ref) => {


    const myButton = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 1
            }
        }
    }



    return (
        <Button
          
            initial="hidden"
            animate={props.animate ? props.animate : "visible"}
            component={motion.div}
            variants={props.variants ? props.variants : myButton}
            variant="outlined"
            color="primary"
        
        >{props.children}</Button>
    )
})
export default StyledButton;
import { Button, styled, useTheme } from '@material-ui/core'
import { motion } from 'framer-motion'
import React from 'react'
import styles from './StyledButton.module.css'


export default function StyledButton(props) {

 
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
            className={styles.styledButton}
            initial="hidden"
            animate="visible"
            component={motion.div}
            variants={myButton}
            variant="outlined"
            color="primary"

        >{props.children}</Button>
    )
}

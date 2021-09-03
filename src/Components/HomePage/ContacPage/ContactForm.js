import { Button, Grid, makeStyles, Paper, TextField } from "@material-ui/core";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { useFormControls } from "./ContactFormControls";

const inputFieldValues = [
    {
        name: "fullName",
        label: "Name",
        id: "my-name"
    },
    {
        name: "email",
        label: "Email",
        id: "my-email"
    },
    {
        name: "message",
        label: "Message",
        id: "my-message",
        multiline: true,
        rows: 10
    }
];
const useStyles = makeStyles(theme => ({
    // textField: {
    //     width: '90%',
    //     marginLeft: 'auto',
    //     marginRight: 'auto',
    //     paddingBottom: 0,
    //     marginTop: 0,
    //     fontWeight: 500,
    //     color: 'white !important'
    // },


    // cssLabel: {
    //     color: `${theme.palette.primary.main} !important`
    // },
    // input: {
    //     color: `${theme.palette.primary.main} !important`,
    //     '&:-webkit-autofill': {
    //         WebkitBoxShadow: `0 0 0 100px ${theme.palette.primary.paper} inset`,
    //         WebkitTextFillColor: `${theme.palette.primary.main}`,

    //     },


    // },
    // underline: {
    //     '&:before': {
    //         borderBottom: `1px solid ${theme.palette.primary.main}`
    //     },
    //     '&:after': {
    //         borderBottom: `2px solid ${theme.palette.primary.main}`
    //     },
    //     '&:hover:not($disabled):not($focused):not($error):after': {
    //         borderBottom: `1px solid ${theme.palette.primary.main}`
    //     },
    //     '&:hover:not($disabled):not($focused):not($error)': {
    //         borderBottom: `1px solid ${theme.palette.primary.main}`
    //     },
    // },
    // cssFocused: {},

    // notchedOutline: {

    //     borderColor: `${theme.palette.primary.main} !important`
    // },
    // paper: {
    //     background: `${theme.palette.primary.paper} !important`,
    //     padding:"50px 20px"
        
    // },

}));

export const ContactForm = () => {

    const {
        handleInputValue,
        handleFormSubmit,
        formIsValid,
        errors
    } = useFormControls();
    const classes = useStyles();

    const [ref, inView, entry] = useInView({ threshold: 0.1 });


    return (
        <form as={motion.div} autoComplete="off" onSubmit={handleFormSubmit}

            ref={ref}
        // className={classes.multilineColor}
        >
            {/* <Paper component={motion.div} initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={containerVariants} className={classes.paper}  > */}
                <Grid container spacing={3} direction="row"
                    justify="center"
                    alignItems="center">
                    {inputFieldValues.map((inputFieldValue, index) => {
                        return (

                            <Grid key={index} container item xs={12} direction="column"
                                justify="center"
                                alignItems="center">
                                <TextField
                                    
                                    variant="outlined"
                                    key={index}
                                    // initial="hidden"
                                    // animate={inView?"visible":"hidden"}
                                    variants={textFieldVariants}
                                    component={motion.div}
                                    onChange={handleInputValue}
                                    onBlur={handleInputValue}
                                    name={inputFieldValue.name}
                                    label={inputFieldValue.label}
                                    error={errors[inputFieldValue.name]}
                                    multiline={inputFieldValue.multiline ?? false}
                                    fullWidth
                                    rows={inputFieldValue.rows ?? 1}
                                    autoComplete="none"
                                    {...(errors[inputFieldValue.name] && {
                                        error: true,
                                        helperText: errors[inputFieldValue.name]
                                    })}
                                    // InputLabelProps={{
                                    //     classes: {
                                    //         root: classes.cssLabel,
                                    //         focused: classes.cssFocused,
                                    //     },
                                    // }}
                                    // InputProps={{
                                    //     classes: {
                                    //         root: classes.cssOutlinedInput,
                                    //         // focused: classes.cssFocused,
                                    //         // notchedOutline: classes.notchedOutline,
                                    //         input: classes.input,
                                    //         underline: classes.underline
                                    //         // cssLabel: classes.cssLabel
                                    //     },


                                    // }}
                                  //  className={classes.textField}

                                />
                            </Grid>
                        );
                    })}
                    <Button
                        style={{ margin: "20px 0px" }}
                        variant="contained"
                        type="submit"
                        color="primary"
                        disabled={false}
                    >
                        Send Message
                     </Button>
                </Grid>
            {/* </Paper> */}
        </form>
    );
};


const containerVariants = {
    hidden: {

        opacity: 0
    },
    visible: {

        opacity: 1,
        transition: { staggerChildren: .2 }
    }
}
const textFieldVariants = {
    hidden: {
        y: 100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1
    }
}


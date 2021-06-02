import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { ListItem, ListItemText, useTheme } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setSelectedMenu } from "./actions/NavActions";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    },
    display:"inherit"
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    },
    transitionEnd:{display:"none"}
  }
};


const TextPlaceHolder = styled.div`
   border-radius: 5px;
  width: 200px;
  height: 20px;
  flex: 1;
`

const MyList = styled(ListItem)`
    width:"100%";


`

const ItemText = styled(ListItemText)`
     color: ${props => props.theme.palette.primary.secondary};
     display: flex;
    align-items: center;
    justify-content: center;
    
`



export const MenuItem = ({ text, toggleOpen }) => {
  const ref = React.useRef();
  const dispatch = useDispatch()
  const theme = useTheme();
  const handleClick = (e) => {
    let id = ref.current.id.toLowerCase()
    console.log(id);
    if (id === "home") {
      toggleOpen()
      document.getElementById("coverPage").scrollIntoView()
    }
    if (id === "skills") {
      toggleOpen()
      document.getElementById("skillPage").scrollIntoView()
    }
    if (id === "projects") {
      toggleOpen()
       
      
     document.getElementById("projectPage").scrollIntoView()
    }
    if (id === "contact") {
      toggleOpen()
      document.getElementById("skillPage").scrollIntoView()
    }

    dispatch(setSelectedMenu(id))

  }
  return (
    <MyList
      ref={ref}
      id={text}
      key={text}
      button
      component={motion.li}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
    >
      <ItemText theme={theme} comonent={motion.div} primary={text} />
    </MyList>
  );
};


{/* <ListItem button key={text}>
  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
  <ListItemText primary={text} />
</ListItem> */}
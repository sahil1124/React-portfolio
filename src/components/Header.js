import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Avatar,
  Box,
  Grid

} from '@material-ui/core'
import avatar from '../avatar.png'
import Typed from 'react-typed'

//CSS styles
const useStyles=makeStyles(theme=>({
  avatar:{
    width:theme.spacing(15),
    height:theme.spacing(15),
    margin:theme.spacing(1)
  },
  title:{
    color:"tomato"
  },
  subtitle:{
    color:"tan",
    marginBottom:"3rem"
  },
  typedContainer:{
    position:"absolute",
    top:"50%",
    left:"50%",
    transform:"translate(-50%,-50%)",
    width:"100vw",
    textAlign:"center",
    zIndex:1,

  }

}))

const Header=()=>{
  const classes=useStyles()
  return(
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar src={avatar} alt="sahil" className={classes.avatar}/>
      </Grid>
      <Typography variant="h4" className={classes.title}>
        <Typed  strings={["Sahil Sharma"]} typeSpeed={40}/>
      </Typography>
      <br/>

      <Typography variant="h5" className={classes.subtitle}>
        <Typed  strings={["Web Development","Full Stack","React Learner"]} typeSpeed={40} backSpeed={60}loop/>
      </Typography>

    </Box>
  )
}

export default Header

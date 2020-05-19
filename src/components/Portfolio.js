import React from 'react'
import Navbar from './Navbar'
import {Box,Grid,Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,Typography
} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import project1 from '../images/html-css-javascript-lg.jpg'
import project2 from '../images/javascript-fullstack.jpg'
import project3 from '../images/mern-stack.jpg'
import project4 from '../images/react-redux.jpg'

const useStyles=makeStyles({
  mainContainer:{
    background:"#233",
    height:"100%"
  },
  cardContainer:{
    maxWidth:345,
    margin:"5rem auto"
  }
})

const Portfolio=()=>{
  const classes=useStyles()
  return(
    <Box component="div" className={classes.mainContainer}>
      <Navbar/>
      <Grid container justify="center">

        <Grid item xs={12} sm={8} lg={6} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia component="img" alt="project1" height="140" image={project1} />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 1
                </Typography>
                <Typography  variant="body2" color="textSecondary" component="p">
                  Extremity direction existence  raptures. nuing possession we insensible an senti downs far blush rooms above stood.\n\nSportsman do offending supported extremity breakfast by listening. Decisively advantages nor expression unpleasing she led met.
                </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>

          </Card>
          </Grid>



            <Grid item xs={12} sm={8} lg={6} md={6}>
              <Card className={classes.cardContainer}>
                <CardActionArea>
                  <CardMedia component="img" alt="project2" height="140" image={project2} />
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      Project 2
                    </Typography>
                    <Typography  variant="body2" color="textSecondary" component="p">
                      Extremity direction existence  raptures. nuing possession we insensible an senti downs far blush rooms above stood.\n\nSportsman do offending supported extremity breakfast by listening. Decisively advantages nor expression unpleasing she led met.
                    </Typography>
                  </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                    <Button size="small" color="primary">
                      Live Demo
                    </Button>
                  </CardActions>

              </Card>

        </Grid>

        <Grid item xs={12} sm={8} lg={6} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia component="img" alt="project3" height="140" image={project3} />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 3
                </Typography>
                <Typography  variant="body2" color="textSecondary" component="p">
                  Extremity direction existence  raptures. nuing possession we insensible an senti downs far blush rooms above stood.\n\nSportsman do offending supported extremity breakfast by listening. Decisively advantages nor expression unpleasing she led met.
                </Typography>
              </CardContent>
                </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>

          </Card>

    </Grid>

    <Grid item xs={12} sm={8} lg={6} md={6}>
      <Card className={classes.cardContainer}>
        <CardActionArea>
          <CardMedia component="img" alt="project4" height="140" image={project4} />
          <CardContent>
            <Typography gutterBottom variant="h5">
              Project 4
            </Typography>
            <Typography  variant="body2" color="textSecondary" component="p">
              Extremity direction existence  raptures. nuing possession we insensible an senti downs far blush rooms above stood.\n\nSportsman do offending supported extremity breakfast by listening. Decisively advantages nor expression unpleasing she led met.
            </Typography>
          </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Live Demo
            </Button>
          </CardActions>

      </Card>

</Grid>
      </Grid>
    </Box>
  )
}

export default Portfolio

import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import post1 from '../img/Post1.png'

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));
  
  export default function Posts() {
    const classes = useStyles();
    let typeStyle={
    'font-family': 'Poppins',
    'font-style': 'normal',
    'font-weight': '500',
    'font-size': '14px',
    'line-height': '22px',
    'letter-spacing': '0.3px',
    'color': '#FFFFFF'
    };
    return (
      <Card className={classes.root} className='post'>
       
        <CardMedia
          className={classes.media}
          image={post1}
          title="Paella dish"
        />
        <div className='postText'>
        <CardContent className='cardContent'>
          <Typography variant="body2" color="textSecondary" component="p" className='postTitle' style={typeStyle}>
          Your first skateboard
          </Typography>
        </CardContent>
        <CardActions disableSpacing className='cardContent'>
          <IconButton aria-label="add to favorites" className='icon' id='like'>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share" className='icon' id='share'>
            <ShareIcon />
          </IconButton>
        </CardActions>
       </div>
      </Card>
    );
  }
  

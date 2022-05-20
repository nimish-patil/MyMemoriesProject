import React from 'react';
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import { updatePost, deletePost } from '../../../actions/posts';
import { useDispatch } from 'react-redux';

const Post = ({ post, currentId, setCurrentId }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant='h6' >{post.creator}</Typography>
        <Typography variant='body2' >{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size='small' onClick={()=>setCurrentId(post._id)}>
          <EditIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant='body2' color='textSecondary' >{post.tags.map((tag)=>(`#${tag} `))}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant='h5' >{post.title}</Typography>
      <CardContent>
        <Typography gutterBottom variant='body2' color='textSecondary' >{post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size='small' color='primary' onClick={ () => dispatch(updatePost({...post, likeCount: post.likeCount+1 })) }>
          <ThumbUpAltIcon size='small' /> &nbsp; {post.likeCount}
        </Button>
        <Button size='small' color='secondary' onClick={()=> dispatch(deletePost(post))}>
          <DeleteIcon size='small' />
        </Button>
      </CardActions>
    </Card>

  )
}

export default Post
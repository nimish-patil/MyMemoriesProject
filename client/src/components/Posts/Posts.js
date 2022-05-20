import React from 'react'
import Post from './Post/Post'
import { useSelector } from 'react-redux';
import { CircularProgress, Grid } from '@material-ui/core';
import useStyles from './styles'

const Posts = ({ currentId, setCurrentId }) => {
    const posts = useSelector((state) => state.posts)
    const classes = useStyles();
    console.log(posts);
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                 { posts.map((post)=>(
                    <Grid item key={ post._id } xa={12} sm={6}>
                        <Post post={post} currentId={ currentId } setCurrentId={ setCurrentId } />
                    </Grid>
                 )) }
            </Grid>
        )
    )
}

export default Posts;
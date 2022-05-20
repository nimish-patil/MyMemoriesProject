import React,  { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grid, Grow } from '@material-ui/core';
import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { getPosts } from './actions/posts'

const App = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const [currentId, setCurrentId] = useState(null);

    useEffect(()=>{
        console.log('use effect triggered');
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <>
            <Container maxwidth='lg'>
                <AppBar className={classes.appBar} color='inherit' position='static'>
                    <Typography variant='h2' className={classes.heading} align='center'>Memories</Typography>
                    <img src={memories} className={classes.image} alt='memories' height='60'/>
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid container justify='space-between' alignItems='stretch' spacing={3}>
                            <Grid item xs={12} sm={7}>
                                <Posts currentId={ currentId } setCurrentId={ setCurrentId }/>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Form currentId={currentId} setCurrentId={ setCurrentId } />
                            </Grid>
                        </Grid>
                    </Container>       
                </Grow>
            </Container>    
        </>
    )
    
}

export default App;
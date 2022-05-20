import * as api from '../api';
import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

//action creators

export const getPosts = () => async (dispatch) => {
    try{
        const {data} = await api.fetchPosts();
        dispatch({ type: FETCH_ALL, payload: data });
    }
    catch(error){
        console.log(error.message)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const {data} = await api.createPost(post);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePost = (post) => async (dispatch) => {
    try {
        console.log(post);
        const { data } = await api.updatePost(post);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePost = (post) => async (dispatch) => {
    try {
        await api.deletePost(post._id);
        dispatch({ type: DELETE, payload: post });
    } catch (error) {
        console.log(error.message);
    }
}
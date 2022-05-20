import axios from 'axios';

const url = 'https://nimish-memories-project.herokuapp.com/posts'

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (updatedPost) => axios.patch(`${ url }/${ updatedPost._id }`, updatedPost);
export const deletePost = (deletePostId) => axios.delete(`${url}/${deletePostId}`);
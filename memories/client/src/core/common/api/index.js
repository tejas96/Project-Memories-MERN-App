import axios from 'axios';

const baseUrl = 'http://localhost:3002/api';

export const fetchPosts = (payload)=> axios.get(`${baseUrl}/posts`);

export const createPost = (payload)=> axios.post(`${baseUrl}/posts`,payload);

export const updatePost = (payload)=> axios.put(`${baseUrl}/posts`,payload);
import postsActions from '../types/posts';
import * as api from '../../common/api';

export const getPosts = () => async (dispatch)=> { 
    try{
        const { data } = await api.fetchPosts();
        dispatch({type: postsActions.FETCH_ALL_POST, payload : data,})
    }catch(error){
        console.log(error);
    }
}

export const createPost = (post) => async (dispatch)=>{
    try{
        const { data } = await api.createPost(post);
        dispatch({type: postsActions.CREATE_POSTS, payload : data,})
    }catch(error){
        console.log(error);
    }
}
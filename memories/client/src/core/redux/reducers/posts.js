import postsActions from '../types/posts';

const postReducer = (state=[], action) =>{
    switch(action.type){
        case postsActions.FETCH_ALL_POST:
            return action.payload;
        case postsActions.CREATE_POSTS:
            console.log(action.payload);
            return [...state, action.payload];
        default :
            return state;
    }
}

export default postReducer;
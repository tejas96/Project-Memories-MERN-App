import postsActions from '../types/posts';

const postReducer = (state=[], action) =>{
    switch(action.type){
        case postsActions.FETCH_ALL_POST:
            return [...state,...action.payload];
        case postsActions.CREATE_POSTS:
            return [...state, action.payload];
        case postsActions.UPDATE_POST:
            return [...state, action.payload];
        default :
            return state;
    }
}

export default postReducer;
import formActions from '../types/form';

const formReducer = (state={}, action) =>{
    switch(action.type){
       case formActions.SET_FORM_INFO:
           return {...state, updatePostInfo : action.payload}
        default :
            return state;
    }
}

export default formReducer;
import formActions from '../types/form';
import * as api from '../../common/api';

export const setPostFormData = (postInfo) => (dispatch)=>{
    dispatch({type:formActions.SET_FORM_INFO, payload : postInfo});
}
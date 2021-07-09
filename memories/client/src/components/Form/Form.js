import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import useStyles from './styles';
import {Paper, Typography, TextField, Button} from '@material-ui/core';
import FileBase from 'react-file-base64';
import { createPost,updatePost } from '../../core/redux/actions/posts';

const Form = (props) =>{

    const classes = useStyles();
    const [formData, setFormData] = useState({
        "title" : "",
        "message" : "",
        "creator" : "",
        "tags" : [],
        "selectedFile" : "",
        "likeCount" : 0,
    })
    const formUpdateInfo = useSelector((state)=>state.form.updatePostInfo);

    const dispatch = useDispatch();

    const handleFormSubmit = (event)=>{
        event.preventDefault();
        if(formUpdateInfo)
            dispatch(updatePost(formUpdateInfo))
        else
            dispatch(createPost(formData));
    }

    const handleOnChange = (event) =>{
        const property = event.target.name;
        const value = event.target.value;
    
        setFormData({
            ...formData,
            [property]:value,
        });
    }

    useEffect(()=>{
        if(formUpdateInfo)
            setFormData(formUpdateInfo);
    },[formUpdateInfo]);

    return(
       <Paper className={classes.paper} elevation={3} variant='outlined'>
           <form className={`${classes.form} ${classes.root}`} autoComplete='off' noValidate onSubmit={handleFormSubmit}>
                <Typography variant='h6' align='center'>Create A Memories</Typography>
                <TextField className ={''} name='creator' label='Creator' variant='outlined' onChange={handleOnChange} value={formData.creator} fullWidth/>
                <TextField className ={''} name='title' label='Title' variant='outlined' onChange={handleOnChange} value={formData.title} fullWidth/>
                <TextField className ={''} name='message' label='Message' variant='outlined' onChange={handleOnChange} value={formData.message} fullWidth/>
                <TextField className ={''} name='tags' label='Tags' variant='outlined' onChange={handleOnChange} value={formData.tags} fullWidth/>
                <div className={classes.fileInput}>
                    <FileBase type='file' multiple={false} onDone={(base64)=>{setFormData({...formData, selectedFile:base64.base64})}}/>
                </div>
                <Button fullWidth variant='contained' type='submit' size='large' color='primary'  className={classes.buttonSubmit}>Submit</Button>           
                <Button fullWidth variant='contained' type='reset' size='large' color='secondary'  className={classes.buttonSubmit}>Clear</Button>           
            </form>

       </Paper>
    )
}

export default Form;

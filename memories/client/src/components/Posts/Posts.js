import {useSelector} from 'react-redux';
import {CircularProgress, Grid} from '@material-ui/core';
import Post from './Post/Post';
import useStyles from './styles';

const Posts = (props) =>{
    const classes = useStyles();
    const post = useSelector((state)=>state.posts);
    console.log('tejas', post);
    return(
        <>
           {
            !post.length ? <CircularProgress color='secondary'/> : (
                <Grid container alignItems='stretch' spacing={3} className={classes.container}>
                    {
                         post.map(post=>{
                            return(
                                <Grid item xs={12} sm={6} key={post._id}>
                                        <Post post={post}/>
                                </Grid>
                            )
                        })
                    }
                </Grid>
               
            )

            }
        </>
    )
}

export default Posts;

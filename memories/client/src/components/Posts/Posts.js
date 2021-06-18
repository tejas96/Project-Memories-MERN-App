import {useSelector} from 'react-redux';
import Post from './Post/Post';
import useStyles from './styles';

const Posts = (props) =>{
    const classes = useStyles();
    const post = useSelector((state)=>state.posts);
    console.log('tejas', post);
    return(
        <>
            <Post/>
            <Post/>
            <Post/>
            <h1>Posts</h1>
        </>
    )
}

export default Posts;

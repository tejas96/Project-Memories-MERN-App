import {Container, Typography, AppBar, Grow, Grid} from '@material-ui/core';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import { useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { getPosts } from './core/redux/actions/posts';

const App = (props)=>{

    const classes = useStyles();
    const dispath = useDispatch();
    useEffect(()=>{
        dispath(getPosts());
    },[dispath])

    return(
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h1' align='center'>Memories</Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form/>
                        </Grid>
                    </Grid> 
                </Container>
            </Grow>
        </Container>
    )
}

export default App;
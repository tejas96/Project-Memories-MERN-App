const userRouter = require('./user');
const postsRouter= require('./posts');

/**
 * 
 * @param server 
 * 
 * Add new routes here 
 */
const routesHandler = (server)=>{
    server.use('/api/user',userRouter);
    server.use('/api/posts',postsRouter);
}

module.exports  = routesHandler;
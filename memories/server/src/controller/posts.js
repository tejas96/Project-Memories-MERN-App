const PostMessage = require('../models/postsMessage');

module.exports = {
    getPosts : async (req, res)=>{
        try{
            const postMessage = await PostMessage.find();
            res.status(200).json(postMessage);
        }catch(error){
            res.status(500).json({message : error.message });
        }
    },
    createPost : async (req, res)=>{
        const post = req.body;
        try{
            const newPost = new PostMessage(post);
            await newPost.save();
            res.status(201).json(newPost);
        }catch(error){
            res.status(500).json({message : error.message});
        }
    }
}
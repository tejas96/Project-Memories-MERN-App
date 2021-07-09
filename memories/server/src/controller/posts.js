const mongoose = require('mongoose');

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
    },

    updatePost : async (req, res) => {
        const post = req.body;
        let id = post._id;
        delete post._id;
            try{
        const updatedPost = await PostMessage.updateOne({_id:id},post);
       return Response.status(200).json(updatedPost);
            }catch(error){
                console.log(error);
            }
    
    }
}
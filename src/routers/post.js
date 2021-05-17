const express = require('express')
const Post = require('../models/post')
const router = new express.Router()

//Create a new post
router.post('/posts', async (req, res) => {
    const post = new Post({...req.body})
    try {
        await post.save()
        res.status(201).send(post)
    } catch (e) {
        res.status(400).send()
    }
})

//Get post by id
router.get('/posts/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const post = await Post.findOne({_id})
        if(!post){
            return res.status(404).send()
        }
        res.send(post)
    } catch (e) {
        res.status(500).send()
    }
})



// Get all posts
router.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find()
        res.send(posts)
    } catch (e) {
        res.status(500).send()
    }
})



//Update post
router.patch('/posts/:id', async (req, res) => {
    const updates = Object.keys(req.body)

    const allowedUpdates = ['title', 'text']

    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update)
    })

    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid updates!'})
    }

    try {
        const post = await Post.findOne({_id: req.params.id})

        if(!post){
            return res.status(404).send()
        }

        updates.forEach((update) => {
            post[update] = req.body[update]
        })

        await post.save()
        res.send(post)
        
    } catch (e) {
        res.status(400).send(e)
    }
})

//Delete post
router.delete('/posts/:id', async (req, res) => {
    try {
        const post = await Post.findOneAndDelete({_id: req.params.id})
        if(!post) {
            return res.status(404).send()
        }
        res.send(post)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router
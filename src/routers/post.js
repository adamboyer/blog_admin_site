const express = require('express')
const Post = require('../models/post')
const router = new express.Router()

router.post('/posts', async (req, res) => {
    const post = new Post({...req.body})
    try {
        await post.save()
        res.status(201).send(post)
    } catch (e) {
        res.status(400).send()
    }
})

router.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find({})
        res.send(posts)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router
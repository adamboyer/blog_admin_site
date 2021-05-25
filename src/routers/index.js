const express = require('express')
const request = require('request')
const router = new express.Router()
const hbs = require('hbs')


router.get('', (req, res) => {
   
    request({url: 'http://127.0.0.1:3000/posts', json: true}, (error, {body}) => {
        if(error){
           return res.render('index',{})
        }
        res.render('index', {posts: body})
    })
    
})

router.get('/edit/:postId', (req, res) => {
    request({url: `http://127.0.0.1:3000/posts/${req.params.postId}`, json: true}, (error, {body}) => {
        if(error){
           return res.render('edit',{})
        }
        res.render('edit', {post: body})
    })
})

module.exports = router
const router = require('express').Router()
const digimonlist = require('./digimonadventure')
const movielist = require('./movielist')

const path = require('path')
const fs=require('fs')
const url = require('url')

router.get('/', (req,res)=>{
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.write( JSON.stringify( movielist ) )
    res.end()
})
router.get('/*',(req,res)=>{
    const parsedUrl = url.parse(req.url)
    const resource = parsedUrl.pathname
    const resourcePath = resource.substring(1,resource.length)
    res.writeHead(200, {'Content-Type': 'application/json'})

    if(resourcePath === "digimonadventure")
        res.write(JSON.stringify(digimonlist))
    else if(resourcePath === "pingu")
        res.write(JSON.stringify(digimonlist))
    else
        res.write(JSON.stringify({}))
    res.end()

})
module.exports = router
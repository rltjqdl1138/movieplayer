const router = require('express').Router()
const fs=require('fs')
const url = require('url')

router.get('/', (req,res)=>{
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.write( JSON.stringify({ }))
    res.end()
})
router.get('/*',(req,res)=>{
    const parsedUrl = url.parse(req.url)
    const resource = parsedUrl.pathname
    const resourcePath = "./src/image"+resource+".jpeg"
    fs.readFile(resourcePath,(err,data)=>{
        res.writeHead(200,{ "Content-Type":"image/jpeg" })
        res.end(data)
    })
})

module.exports = router
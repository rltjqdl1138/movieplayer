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
    const resourcePath = __dirname+"/../../src/movie"+resource+".mp4"
    var range = req.headers.range
    if(!range)
            return res.sendStatus(416)
    var position = range.replace(/bytes=/,"").split("-")
    var start = parseInt(position[0],10)
    fs.stat(resourcePath, (err,stats)=>{
        if(err){
            res.writeHead(500, {'Content-Type':'text/html'})
            return res.end(err)
        }
        var total = stats.size
    //    var _end = start+65535 > total ? total-1 : start+65536
        var end = position[1] ? parseInt(position[1],10): total-1
        var chunksize = (end-start) + 1
        res.writeHead(206,{
                "Content-Range":        "bytes "+start+"-"+end+"/"+total,
                "Accept-Range":         "bytes",
                "Content-Length":       chunksize,
                "Content-Type":         "video/mp4"
        })

        const stream = fs.createReadStream(resourcePath, { start, end} )
                .on("open",()=>{
                        stream.pipe(res)
                }).on("error",(err)=>{
                        res.end(err)
                })

    })
})

module.exports = router

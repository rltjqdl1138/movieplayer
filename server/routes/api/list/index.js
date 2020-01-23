const router = require('express').Router()
const url = require('url')
const mysql = require('mysql')
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1138877',
  database : 'myMoviePlayer'
});
var movielist

connection.connect();
  
connection.query('SELECT * FROM movie', (error, results)=>{
    if (error) {
        console.log(error);
    }
    movielist = results
});

router.get('/', (req,res)=>{
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.write( JSON.stringify( movielist ) )
    res.end()
})
router.get('/*',(req,res)=>{
    console.log(movielist)
    const parsedUrl = url.parse(req.url)
    const resource = parsedUrl.pathname
    const resourcePath = resource.substring(1,resource.length)
    res.writeHead(200, {'Content-Type': 'application/json'})
    const result = movielist.find( ({ movieID }) => movieID === Number(resourcePath) );
    connection.query("SELECT * FROM video where movieID ='"+resourcePath+"';", (error, results)=>{
        if (error) {
            res.write(JSON.stringify({}))
            console.log(error);

            res.end()
        }else{
            var movie = {
                movieName: result.movieName,
                movieUrl: result.movieURL,
                videoList:results
            }
            res.write(JSON.stringify(movie))

            res.end()
        }
    });

})
module.exports = router
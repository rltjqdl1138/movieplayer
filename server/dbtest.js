var mysql = require('mysql')
const movielist = require('./routes/api/list/movielist')
const di = require('./routes/api/list/digimonadventure')
const pi = require('./routes/api/list/pingu')
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1138877',
    database : 'myMoviePlayer'
});
    
connection.connect();


movielist.map((value)=>{
    var tmp = "INSERT INTO movie (movieURL, movieName) VALUES ('"+value.movieID+"','"+value.movieName+"');"
    connection.query(tmp, function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        console.log(results);
    });
    console.log(tmp)
})

const tempList = di
/*
tempList.map((value)=>{
    var tmp = "INSERT INTO video (videoNumber, videoTitle, movieID) VALUES ('"+value.videoNumber+"','"+value.videoTitle+"', 3);"
    
    connection.query(tmp, function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        console.log(results);
    });
    console.log(tmp)
})
*/
    
  connection.end();
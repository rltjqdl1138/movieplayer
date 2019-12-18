const express = require('express')
const app = express();
const port = 3000;

app.use('/api', require('./routes/api'))
app.use('/image', require('./routes/image'))
app.use('/movie', require('./routes/movie'))
app.listen(port, () => {
    console.log('Express is listening on port', port);
});


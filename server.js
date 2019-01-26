const { createServer } = require('http');
const path = require('path');
const express = require('express');
const compression = require('compression');
const morgan = require('morgan');

const normalizePortprocess = port => parseInt(port, 10);
const PORT = normalizePortprocess(process.env.PORT || 3000);

const app = express();
const dev = app.get('env'); // returns 'development'


app.disable('x-powered-by');
app.use(compression());
app.use(morgan('common'));

app.use(express.static(path.resolve(__dirname, 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});



if (dev) {
    app.use(morgan('dev'));
}




const server = createServer(app);

server.listen(PORT, err => {
    if(err) throw new err;
    
    console.log(`Server listen in ${PORT}...`); 
});
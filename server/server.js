const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const fs = require('fs');

const selectionPriceChange = require('./selectionPriceChange');
const selectionStateChange = require('./selectionStateChange');
const eventStateChange = require('./eventStateChange');

const JSON_DATA = JSON.parse(fs.readFileSync('./server/data.json', 'utf-8'));

app
    .use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS,PUT");
        res.header("Access-Control-Allow-Credentials", "true");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        next();
    })
    .route('/api/selections').get((req, res) => res.status(200).json(JSON_DATA));

io.on('connection', socket => {
    setInterval(() => { selectionPriceChange(JSON_DATA, socket) }, 20000);
    setInterval(() => { selectionStateChange(JSON_DATA, socket) }, 30000);
    setInterval(() => { eventStateChange(JSON_DATA, socket) }, 30000);
});


http.listen(3001, () => console.log('running'));
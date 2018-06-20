require('dotenv').config();
const http = require('http');
const app = require('./lib/app');
const connect = require('./lib/util/connect');

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

connect(process.env.MONGODB_URI) || 'mongodb://localhost:27017';


server.listen(PORT, () => {
    //eslint-disable-next-line
    console.log(`server listening on port`, server.address().port);
});
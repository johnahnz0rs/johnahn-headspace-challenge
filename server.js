const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'client/build')));


// Authenticate via OAuth
let tumblr = require('tumblr.js');
let client = tumblr.createClient({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    token: process.env.TOKEN,
    token_secret: process.env.TOKEN_SECRET
});

// Make the request
client.userInfo(function (err, data) {
    // ...
    if (err) {
        console.log(err);
    } else {
        console.log('*** got some data back from client.userInfo ***', data);
    }
});

// Make the request
client.blogPosts('peacecorps.tumblr.com', function (err, data) {
    // ...
    if (err) {
        console.log(err);
    } else {
        console.log('*** got some data back from client.blogPosts ***', data);
    }
});



// ROUTES
const mockAPI = 'https://5b8af02d78169a0014daacf8.mockapi.io/';

app.get('/api/all-devs', function(req, res) {
    res.send(`make an api call to ${mockAPI}/devs`);
});

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index,html'));
});




// production deployment to heroku
if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}



// app.get('/', (req, res) => {
// 	res.send('hello johnahnz0rs is l33t');
// });

// app.get('/', function(req, res) {
//     res.send('GET request to the homepage');
// });
//
// app.post('/', function(req, res) {
//     res.send('POST request to the homepage');
// });



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`*** lol johnahnz0rs is listening on port ${port} ***`));
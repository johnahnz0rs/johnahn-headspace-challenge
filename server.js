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


// ROUTES
// const mockAPI = 'https://5b8af02d78169a0014daacf8.mockapi.io/';

app.get('/api/default', function(req, res) {
    client.taggedPosts('puppy', function(err, data) {
        if (err) {
            console.log(err);
        } else {
            // console.log('*** doggos on demand ***', data.length);
            res.json(data);
        }
    })
});


app.get('/api/blog/:blog/:tag', (req, res) => {
    const blogName = `${req.params.blog}.tumblr.com`;
    const tag = req.params.tag;
    client.blogPosts(blogName, { tag: tag }, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log('*** data response from search by blog and tag ***', blogName, tag);
            res.json(data.posts);
        }
    });
});

app.get('/api/blog/:blog', (req, res) => {
    const blog = `${req.params.blog}.tumblr.com`;
    client.blogPosts(blog, function(err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log('*** data response from search by blog ***', blog);
            res.json(data.posts);
        }
    });
});

app.get('/api/tag/:tag', (req, res) => {
    const tag = req.params.tag;
    client.taggedPosts(tag, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log('**** data response from search by tag ***', tag, data);
            res.json(data);
        }
    });
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



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`*** lol johnahnz0rs is listening on port ${port} ***`));
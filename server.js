const express = require('express');

const app = express();
const port = process.env.PORT || 5000

app.get('/api/hello', (req, res) => {
	res.send({ express: 'Hello from Express this is johnahnz0rs speaking just a moment lol'});
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

app.listen(port, () => console.log(`*** johnahnz0rs is listening on port ${port}`));
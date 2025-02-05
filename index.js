const express = require('express');
const app = express();
const port = 3000;

//Serve static files form the "Public" folder
app.use(express.static('public'));

//Define a rout for the home page
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

//Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

app.get('/about', (req, res) => {
    res.send('About Us');
});

app.use(express.json()); //Middleware to parse JSON bodies

app.post('/submit', (req, res) => {
    const data =req.body;
    res.send(`Received: ${JSON.stringify(data)}`);
})

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
})
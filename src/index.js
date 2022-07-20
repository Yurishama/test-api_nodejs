const express = require('express')
const app = express()
const port = 5000

let count = 0;

app.get('/', (req, res) => {
    res.send('Just message')
})

app.post('/', (req, res) => {
    res.send('POST request to the homepage')
})

app.put('/', (req, res) => {
    res.send(405).send("The product cannot be found");
})

app.get('/api', (req, res) => {
    res.json({ count })
    res.send('Just message /api end point')
    
})

app.post('/api', (req, res) => {
    ++count;
    res.json({ count });
});

app.delete('/api', (req, res) => {
    --count;
    res.json({ count });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
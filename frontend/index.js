const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());
app.use(express.static('public'));

const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Library App Frontend!');
});

app.get('/books', async (req, res) => {
  try {
    const response = await axios.get('http://library-backend:8080/books');
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

app.listen(port, () => {
  console.log(`Frontend running at http://localhost:${port}`);
});
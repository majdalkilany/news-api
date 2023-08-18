const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 8080;
const NEWS_API_URL = 'https://newsapi.org/v2/everything?q=technology&sortBy=popularity&apiKey=3cf6d8ff54464bf3919350313b64b96d';

app.get('/news', async (req, res) => {
    try {
        const response = await axios.get(NEWS_API_URL);

        // Return the data from axios response
        res.send(response.data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send({ error: "Failed to fetch data" });
    }
});

// Add headers to all routes to prevent CORS issues
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


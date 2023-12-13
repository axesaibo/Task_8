const express = require('express');
const fs = require('fs').promises; // Using promises for fs functions

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// ReadFile Endpoint
app.get('/readFile/:filename', async (req, res) => {
    const { filename } = req.params;

    try {
        const content = await fs.readFile(filename, 'utf-8');
        res.status(200).send(content);
    } catch (err) {
        res.status(404).send('File not found');
    }
});

// WriteFile Endpoint
app.post('/writeFile/:filename', async (req, res) => {
    const { filename } = req.params;
    const { data } = req.body;

    if (!data) {
        return res.status(400).send('No data provided');
    }

    try {
        await fs.writeFile(filename, data, 'utf-8');
        res.status(201).send('File written successfully');
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
});

// UpdateFile Endpoint
app.put('/updateFile/:filename', async (req, res) => {
    const { filename } = req.params;
    const { data } = req.body;

    if (!data) {
        return res.status(400).send('No new data provided');
    }

    try {
        await fs.appendFile(filename, `\n${data}`, 'utf-8');
        res.status(200).send('File updated successfully');
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

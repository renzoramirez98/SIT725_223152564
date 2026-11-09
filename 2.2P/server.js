
 // Import Express to create our web server
const express = require('express');

// Import path to work with folder locations
const path = require('path');

// Create an Express application
const app = express();

// Set the server port to 3000
const PORT = process.env.PORT || 3000;

// Serve webpage files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// GET endpoint to add two numbers
app.get('/add', (req, res) => {

    // Read the numbers from the URL
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    // Check that both numbers are valid
    if (!Number.isFinite(a) || !Number.isFinite(b) ||
        req.query.a === '' || req.query.b === '') {
        return res.status(400).send('Please enter two valid numbers.');
    }

    // Add the two numbers
    const sum = a + b;

    // Return the result to the browser
    res.send(`The sum of ${a} and ${b} is ${sum}`);
});

// Start the web server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

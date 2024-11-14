const express = require('express');
const data = require('./data/pizza.json');
const app = express();
const port = 3002;

// Import path module
const path = require('path');

// Middleware to serve static files
app.use('/pizza', express.static(path.join(__dirname, 'public')));

// API endpoint to handle pizza search
app.get('/api/pizza', (req, res) => {
    const searchTerm = req.query.search ? req.query.search.toLowerCase() : ''; // Get the search term

    // Filter the pizza data based on name or description matching the search term
    const filteredPizzas = data.pizzas.filter(pizza => 
        pizza.name.toLowerCase().includes(searchTerm) || 
        pizza.description.toLowerCase().includes(searchTerm)
    );

    // Return the filtered pizzas as a JSON response
    res.json({ pizzas: filteredPizzas });
});

// Start the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

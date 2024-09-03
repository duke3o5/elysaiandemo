const express = require('express');
const app = express();
const cors = require('cors');

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());



app.get('/', (req, res) => {
    res.json('Hello World!, This message is coming from backend');
});

// Basic route for testing
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// Set the port to an environment variable or default to 5000
const port = process.env.PORT || 5000;

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

require('dotenv').config(); // Loads variables from .env
 
const express = require('express'); //Imports Express
const app = express();

const PORT = process.env.PORT || 3000; // Reads the port from .env
const APP_NAME = process.env.APP_NAME || 'My Node App';


// Handles GET requests to / and Sends a response to the client
app.get('/',(req,res) => {
    res.send(`Hello World! Welcome to ${APP_NAME}`);
});


// Start the server 
app.listen(PORT,()=>{
    console.log(`${APP_NAME} is running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV}`);
    console.log(`URL: http://localhost:${PORT}`);
});

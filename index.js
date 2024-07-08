const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000;

// Middleware to parse JSON body
app.use(bodyParser.json());

// Endpoint to handle incoming messages
app.post('/webhook', async (req, res) => {
  const { message } = req.body;

  // Process the message
  const response = await processMessage(message);

  // Send back the response
  res.json(response);
});

// Function to process incoming messages
async function processMessage(message) {
  // Example: Echo the message
  const responseText = `You said: ${message.text}`;

  return { text: responseText };
}

// Start the server
app.listen(port, () => {
  console.log(`Bot server listening at http://localhost:${port}`);
});

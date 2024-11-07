const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));  // Serve static files from 'public' directory

// In-memory storage for emoji pins
let emojiPins = [];

// Get all emoji pins
app.get('/pins', (req, res) => {
  res.json(emojiPins);
});

// Add a new emoji pin
app.post('/pins', (req, res) => {
  const { emoji, location } = req.body;
  const newPin = { id: Date.now(), emoji, location };
  emojiPins.push(newPin);
  res.status(201).json(newPin);
});

// Update an emoji pin
app.put('/pins/:id', (req, res) => {
  const { id } = req.params;
  const { emoji, location } = req.body;
  const pinIndex = emojiPins.findIndex(pin => pin.id == id);

  if (pinIndex === -1) return res.status(404).json({ error: 'Pin not found' });

  emojiPins[pinIndex] = { id: Number(id), emoji, location };
  res.json(emojiPins[pinIndex]);
});

// Delete an emoji pin
app.delete('/pins/:id', (req, res) => {
  const { id } = req.params;
  emojiPins = emojiPins.filter(pin => pin.id != id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
 
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const app = express();
// const port = 8000;

// app.use(bodyParser.json());
// app.use(cors());
// app.use(express.static('public'));  // Serve static files from 'public' directory

// // In-memory storage for emoji pins
// let emojiPins = [];

// // Get all emoji pins
// app.get('/pins', (req, res) => {
//   res.json(emojiPins);
// });

// // Add a new emoji pin
// app.post('/pins', (req, res) => {
//   const { emoji, location } = req.body;
//   const newPin = { id: Date.now(), emoji, location };
//   emojiPins.push(newPin);
//   res.status(201).json(newPin);
// });

// // Update an emoji pin
// app.put('/pins/:id', (req, res) => {
//   const { id } = req.params;
//   const { emoji, location } = req.body;
//   const pinIndex = emojiPins.findIndex(pin => pin.id == id);

//   if (pinIndex === -1) return res.status(404).json({ error: 'Pin not found' });

//   emojiPins[pinIndex] = { id: Number(id), emoji, location };
//   res.json(emojiPins[pinIndex]);
// });

// // Delete an emoji pin
// app.delete('/pins/:id', (req, res) => {
//   const { id } = req.params;
//   emojiPins = emojiPins.filter(pin => pin.id != id);
//   res.status(204).send();
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });


// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const app = express();
// const port = 8000;

// app.use(bodyParser.json());
// app.use(cors());
// app.use(express.static('public')); // Serve static files from the 'public' folder

// // In-memory storage for emoji pins
// let emojiPins = [];

// // Get all emoji pins
// app.get('/pins', (req, res) => {
// 	res.json(emojiPins);
// });

// // Add a new emoji pin
// app.post('/pins', (req, res) => {
// 	const { emoji, location } = req.body;
// 	const newPin = { id: Date.now(), emoji, location };
// 	emojiPins.push(newPin);
// 	res.status(201).json(newPin);
// });

// // Update an emoji pin
// app.put('/pins/:id', (req, res) => {
// 	const { id } = req.params;
// 	const { emoji, location } = req.body;
// 	const pinIndex = emojiPins.findIndex((pin) => pin.id == id);

// 	if (pinIndex === -1) return res.status(404).json({ error: 'Pin not found' });

// 	emojiPins[pinIndex] = { id: Number(id), emoji, location };
// 	res.json(emojiPins[pinIndex]);
// });

// // Delete an emoji pin
// app.delete('/pins/:id', (req, res) => {
// 	const { id } = req.params;
// 	emojiPins = emojiPins.filter((pin) => pin.id != id);
// 	res.status(204).send();
// });

// app.listen(port, () => {
// 	console.log(`Server running at http://localhost:${port}`);
// });


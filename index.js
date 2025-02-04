const express = require("express");
const app = express();

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello, Vercel! Your Node.js app is running successfully.");
});

// Define a dynamic route
app.get("/api/greet/:name", (req, res) => {
  const { name } = req.params;
  res.json({ message: `Hello, ${name}! Welcome to the Vercel-deployed app.` });
});

// Listen on the default port provided by Vercel
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
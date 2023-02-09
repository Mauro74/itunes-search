const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

// Serving the static client app on http://localhost:3001
app.use(express.static(path.join(__dirname, "../client/build")));

// Starting the server
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT} 💻`);
});

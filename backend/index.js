const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Можно использовать токен в будущем
const TELEGRAM_BOT_TOKEN = "7926988231:AAGlqZNcBm-q3hd5KHBdHMOn-H5_-xwet5w";

app.use(express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

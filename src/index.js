const express = require("express");
const { PORT } = require("./Configs/server.config");
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

// Testing
app.get("/test", (req, res) => {
  return res.json({ message: "Testing is ok" });
});

// Server
app.listen(PORT, () => {
  console.log(`Server Listening to PORT:${PORT}`);
});

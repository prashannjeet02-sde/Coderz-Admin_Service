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

// Routes
const problemRoutes = require("./Routes/index");
app.use("/api", problemRoutes);

// Server
const DB = require("./Configs/db.config");
app.listen(PORT, async () => {
  console.log(`Server Listening to PORT:${PORT}`);
  await DB();
  console.log("Connection to Database is Successfull");
});

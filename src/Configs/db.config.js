const mongoose = require("mongoose");
const { NODE_ENV, ATLAS_DB_URL } = require("./server.config");

async function ConnectToDB() {
  try {
    if (NODE_ENV === "development") {
      await mongoose.connect(ATLAS_DB_URL);
    }
  } catch (error) {
    console.log("Database Connection Failed");
    console.log(error);
  }
}

module.exports = ConnectToDB;

const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const PORT = 3000;
const connectDB = require("./db/connect");
require("dotenv").config();

app.use(express.json());
app.use(express.static("./public"));

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, console.log(`Server is listening at port ${PORT}...`));
  } catch (err) {
    console.log(err);
  }
};

start();

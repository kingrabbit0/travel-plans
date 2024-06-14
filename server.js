const express = require("express");
const path = require("path");

const config = require("./config");

require("dotenv").config();

const port = process.env.PORT || 5000;
// const host = process.env.HOST || "localhost";

const app = express();

app.use(express.static(path.join(__dirname, "static")));

const travelRouter = require("./server/router/api")

app.use("/travel", travelRouter);

app.all("*", (req, res) => {
  res.status(200).json({ 
    message: "Good Approach" 
  });
});

// const server = app;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

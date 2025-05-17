const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const routeHandler = require("./routes");

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
  });
});

app.use("/api/v1", routeHandler);
module.exports = app;

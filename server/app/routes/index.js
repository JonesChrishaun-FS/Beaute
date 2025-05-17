const express = require("express");
const router = express.Router();
const beauteRoutes = require("./beauteRoutes");

router.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
  });
});

router.use("/beaute", beauteRoutes);

module.exports = router;

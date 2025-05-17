const router = require("express").Router();
const { addFav, getAllFavs } = require("../controller/beauteController");

router.post("/", addFav);
router.get("/", getAllFavs);

module.exports = router;

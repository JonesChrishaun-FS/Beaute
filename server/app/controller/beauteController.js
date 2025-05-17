const beaute = require("../model/Beaute");

const addFav = (req, res) => {
  try {
    beaute.create(req.body);
  } catch (error) {
    if (error.name == "ValidationError") {
      res.status(404).json({ error });
    } else {
      res.status(500).json(res.status(500).json(error.message));
    }
  }
};

const getAllFavs = async (req, res) => {
  const allFavs = await beaute.find();
  res.status(200).json({
    data: allFavs,
  });
};

const deleteFav = (req, res) => {};
module.exports = { addFav, getAllFavs };

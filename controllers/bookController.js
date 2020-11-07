const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Book.find({})
      .then((books) => console.log(books),
      res.json(books))
      .catch((err) => res.status(422).json(err));
  },
};

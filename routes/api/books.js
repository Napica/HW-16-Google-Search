const router = require ("express").Router();
const booksController = require ("../../controllers/bookController")

router.route("/")
    .get(booksController.findAll)

module.exports = router
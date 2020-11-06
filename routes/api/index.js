const router = require("express").Router();
const booksRoutes = require("./books");

// User routes
router.use("/books", booksRoutes);

module.exports = router;

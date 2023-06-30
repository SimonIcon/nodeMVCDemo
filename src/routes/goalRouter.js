const express = require("express")
// importing all my controllers
const { getGoal, setGoal, updateGoal, deleteGoal } = require("../controllers/goalController")
// creating route instance
const router = express.Router()
router.get('/', getGoal)
router.post('/', setGoal)
router.put('/:id', updateGoal)
router.delete('/:id', deleteGoal)

// exporting my route to app.js
module.exports = router;
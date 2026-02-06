const express = require('express');
const {
  getAllNotes,
  updateNote,
  deleteNote,
  createNote,
} = require('../controllers/notesControllers');
const router = express.Router();

router.route('/').get(getAllNotes).post(createNote);
router.route('/:id').put(updateNote).delete(deleteNote);

module.exports = router;

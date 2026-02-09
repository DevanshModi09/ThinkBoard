const express = require('express');
const {
  getNoteById,
  updateNote,
  deleteNote,
  createNote,
} = require('../controllers/notesControllers');
const router = express.Router();

router.route('/').get(getAllNotes).post(createNote);
router.route('/:id').put(updateNote).delete(deleteNote).get(getNoteById);

module.exports = router;

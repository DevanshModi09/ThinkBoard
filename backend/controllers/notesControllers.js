const Note = require('../models/Note');

const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find({}).sort({ createdAt: -1 });
    res.status(200).json({ notes });
  } catch (error) {
    res.status(500).json({
      errormsg:
        'Error from the catch block of getAllNotes controller : ' + error,
    });
  }
};

const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = await Note.insertOne({ title, content });
    res.status(201).json({ newNote });
  } catch (error) {
    console.log(
      'Error from the catch block of createNote controller : ' + error,
    );
  }
};

const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
      },
      { new: true },
    );
    if (!updateNote) return res.status(404).json({ message: 'Note not found' });
    res.status(200).json({ message: 'Note updated successfully' });
  } catch (error) {
    console.log(
      'Error from the catch block of updateNote controller : ' + error,
    );
    res.status(500).json({ message: 'internal server error' });
  }
};

const deleteNote = async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deleteNote)
      return res.status(404).json({ message: 'Note does not exist ' });
    res.status(200).json({ message: 'Note deleted successfully' });
  } catch (error) {
    console.log(
      'Error from the catch block of deletedNote controller : ' + error,
    );
  }
};

module.exports = {
  getAllNotes,
  updateNote,
  deleteNote,
  createNote,
};

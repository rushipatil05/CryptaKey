import express from 'express';
import Note from '../models/Note.js';
import middleware from '../middleware/middleware.js';
import { encryptPassword, decryptPassword } from '../utils/encryption.js';

const router = express.Router();

// ADD NOTE
router.post('/add', middleware, async (req, res) => {
  try {
    const { url, username, password } = req.body;

    const encryptedPassword = encryptPassword(password);

    const newNote = new Note({
      url,
      username,
      password: encryptedPassword,
      userId: req.user.id
    });

    await newNote.save();

    return res.status(200).json({ success: true, message: "Data created successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: "Error in adding data" });
  }
});

// GET NOTES
router.get('/', middleware, async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.user.id });

    const decryptedNotes = notes.map(note => ({
      ...note._doc,
      password: decryptPassword(note.password)
    }));

    return res.status(200).json({ success: true, notes: decryptedNotes });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Can't retrieve notes" });
  }
});

// DELETE NOTE
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedNote = await Note.findByIdAndDelete(id);
    return res.status(200).json({ success: true, deletedNote });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Can't delete notes" });
  }
});

export default router;

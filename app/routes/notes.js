const express = require("express");
const router = express.Router();
const Note = require("../models/Note");
const auth = require("../middlewares/auth");

router.get("/", auth, async (req, res) => {
  try {
    const notes = await Note.find({ author: req.user._id });
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.post("/", auth, async (req, res) => {
  const { title, body } = req.body;

  try {
    const note = new Note({ title, body, author: req.user._id });
    await note.save();
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ error: "Problem to create a new note" });
  }
});

router.get("/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findById(id);
    if (!isOwner(req.user, note)) {
      return res.status(403).json({ error: "Permission denied" });
    }
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ error: "Problem to get a note" });
  }
});

router.put("/:id", auth, async (req, res) => {
  const { title, body } = req.body;
  const { id } = req.params;

  try {
    const note = await Note.findById(id);

    if (!isOwner(req.user, note)) {
      return res.status(403).json({ error: "Permission denied" });
    }

    const updatedNote = await Note.findOneAndUpdate(
      { _id: id },
      { $set: { title, body } },
      { upsert: true, new: true }
    );

    res.status(200).json(updatedNote);
  } catch (error) {
    res.status(500).json({ error: "Problem to update a note" });
  }
});

function isOwner(user, note) {
  return user._id.equals(note.author._id);
}

module.exports = router;

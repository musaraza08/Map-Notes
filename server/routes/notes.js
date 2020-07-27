const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Note = require("../models/Note");

router.get("/", async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch {
    res.json({ message: err });
  }
});

router.post(
  "/",
  [
    body("title").isLength({ min: 1 }),

    body("description").isLength({ min: 1 }),
  ],
  (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

    const note = new Note({
      title: req.body.title,
      description: req.body.description,
      lat: req.body.lat,
      lng: req.body.lng,
    });

    note
      .save()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  }
);

module.exports = router;

const express = require("express");
const router = express.Router();
const notesController = require("../controller/notes");

// READ - Get All Data Router
router.get("/", notesController.findAllNotes);

// READ - Get One Data Router
router.get("/:id", notesController.findOneNotes);

// CREATE - Create Data Router
router.post("/", notesController.createNotes);

// UPDATE - Update Data Router
router.put("/:id", notesController.updateNotes);

// DELETE - Delete Data Router
router.delete("/:id", notesController.deleteNotes);

module.exports = router;

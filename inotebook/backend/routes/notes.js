const express = require("express");
const router = express.Router();
var bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const Notes = require("../models/Notes");
const fetchuser = require("../middleware/fetchuser");

///route 1  Get  a Notes  details using :Get  "/api/notes/fetchallnotes" . Require auth
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Some error");
  }
});
///route 2  Add  a new  Notes  details using :Get  "/api/notes/addnew notes" . Require auth
router.post(
  "/addnewnotes",
  fetchuser,
  [
    body("title", "Enter valid title").isLength({ min: 3 }),
    body("description", "description must be at least 5 character").isLength({
      min: 4,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savenotes = await note.save();
      res.json(savenotes);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Some error");
    }
  }
);

///route 3  Update  a Exists  Notes  details using :Get  "/api/notes/update notes" . Require auth
router.put("/updatenotes/:id", fetchuser, async (req, res) => {
  try {
    const { title, description, tag } = req.body;


    // Create new obeject
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

// Find the Note to be updated and update it
    let note= await Notes.findById(req.params.id);
    if(!note){
      return res.status(404).send("Not Found");
    }
    if(note.user.toString() !== req.user.id){
     return  res.status(401).send(" Not Allowed")
    }
    note = await Notes.findByIdAndUpdate(req.params.id, {$set: newNote},{new:true})
    res.json(note)
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Some error");
  }
});


///route 4  DElete  a Exists  Notes  details using :Get  "/api/notes/update notes" . Require auth
router.delete("/deletenoote/:id", fetchuser, async (req, res) => {
  try {  
// Find the Note to be deleted and delete it
    let note= await Notes.findById(req.params.id);
    if(!note){
      return res.status(404).send("Not Found");
    }
    if(note.user.toString() !== req.user.id){
     return  res.status(401).send(" Not Allowed")
    }
    note = await Notes.findByIdAndDelete(req.params.id)
    res.json({"Success:":" Note Has been Deleted"})
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Some error");
  }
});



module.exports = router;

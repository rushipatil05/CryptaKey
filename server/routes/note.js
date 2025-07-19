import express from 'express'
import Note from '../models/Note.js';
import middleware from '../middleware/middleware.js';
import bcrypt from 'bcrypt'
const router=express.Router();

router.post('/add', middleware, async (req, res) => {
  try {
    const { url, username, password } = req.body;


    const newNote = new Note({
      url,
      username,
      password, // ✅ store hashed value
      userId: req.user.id
    });

    await newNote.save();

    return res.status(200).json({ success: true, message: "Data created successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: "Error in adding data" });
  }
});

router.get('/',middleware,async (req,res)=>{
    try{
        const notes = await Note.find({ userId: req.user.id })
        return res.status(200).json({success: true,notes})
    }catch(error){
        return res.status(500).json({success: false,message: "cant retrieve notes"})
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const updateNote = await Note.findByIdAndDelete(id)
        return res.status(200).json({success: true, updateNote})
    } catch(error) {
        return res.status(500).json({success: false, message: "cant delete notes"})
    }
})


export default router;
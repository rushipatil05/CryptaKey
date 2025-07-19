import mongoose from "mongoose";

const NoteSchema= new mongoose.Schema({
    url:{type:String,required:true},
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
});

const Note = mongoose.model('Note',NoteSchema);
export default Note;
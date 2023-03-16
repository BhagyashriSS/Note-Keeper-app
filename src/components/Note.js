import { MdDeleteForever} from 'react-icons/md';
import { BsPencilSquare} from "react-icons/bs";
import React, { Component }  from 'react';
const Note =({note,handleDeleteNote,setEditNoteId}) =>{
 function editNote(event){
   setEditNoteId(note.id);
   event.preventDefault();
   //prepopulate values
   
 } 
  
return(
    <div className="note">
        <span   > {note.text}</span>
        <div  className="note-footer">
            <small>{note.date}</small>
            <BsPencilSquare  onClick={editNote} className='delete-icon' size='1.3em'/>
            <MdDeleteForever onClick={()       => handleDeleteNote(note.id)} className='delete-icon' size='1.3em'/>

        </div>
    </div>
)
};
export default Note;
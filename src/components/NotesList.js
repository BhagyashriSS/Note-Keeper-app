import AddNote from "./AddNote";
import EditableNote from "./EditableNote";
import Note from "./Note";
import { Fragment } from "react";
import React, { Component }  from 'react';
const NotesList = ({notes,handleAddNote,handleDeleteNote,editNoteId,setEditNoteId,handleSubmitEditNote})=>{
   
    return(
        <div className="notes-list">
       {notes.map( (note)=>
       <Fragment>
       {editNoteId===note.id ? 
        <EditableNote 
         note={note} 
        setEditNoteId={setEditNoteId}
         handleAddNote={handleAddNote}
         handleSubmitEditNote={handleSubmitEditNote}
       /> 
       :
       <Note  
            note={note}
            handleDeleteNote={handleDeleteNote}
            setEditNoteId={setEditNoteId}
        
        /> }
       
          
       </Fragment> 
          
       )}
       <AddNote handleAddNote={handleAddNote} />
        </div>
    )
}
export default NotesList;
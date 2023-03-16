import React, { Component }  from 'react';
import  { useState } from "react";
import { GrUndo } from "react-icons/gr";

const EditableNote= ({note,setEditNoteId,handleSubmitEditNote})=>{
  
    const characterLimit=50;
   const [editText,setEditText]=useState(note.text);
    

   const handleChange =(event)=>{
    if(characterLimit-event.target.value.length >=0)
      {
        setEditText(event.target.value);
      }
}
    const handleSaveClick =(event)=>{
        if(editText.trim().length > 0){
            handleSubmitEditNote(event,editText); 
            setEditText(''); 
        }  
    }
  
   
    return( <div className="note new">
       <textarea 
         rows="8" 
         cols="10"
         value={editText}
         onChange={handleChange}
         ></textarea>
         <div className="note-footer">
           <small>{characterLimit-editText.length} Remaining </small>
           <GrUndo onClick={()       => setEditNoteId(null)} className='delete-icon' size='1.7em'/>
           <button className="save" onClick={handleSaveClick}> Save</button>
          

         </div>
   </div>);
}
export default EditableNote;
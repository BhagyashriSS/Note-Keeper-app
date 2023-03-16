 // eslint-disable-next-line
import React, { Component }  from 'react';
import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";


const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is first note",
      date: "15/12/22"
    },
    {
      id: nanoid(),
      text: "this is first note",
      date: "15/12/22"
    },
    {
      id: nanoid(),
      text: "this is first note",
      date: "15/12/22"
    },
    {
      id: nanoid(),
      text: "this is first note",
      date: "15/12/22"
    }
  ]);

  const [searchText, setSearchtext] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  const [editNoteId,setEditNoteId]=useState(null);



   useEffect( ()=>{
       const savedNotes=JSON.parse(localStorage.getItem('react-notes-app-data'));
       if(savedNotes){
        setNotes(savedNotes);
       }
   },[]);

  useEffect(()=>{
    localStorage.setItem('react-notes-app-data',JSON.stringify(notes));
  },[notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];//spread operator
    setNotes(newNotes);

  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

   const submitEditNote = (event,textEdit)=> {
      event.preventDefault();
       const editedNote={
        id:editNoteId,
        text:textEdit,
        date:new Date().toLocaleDateString()
       }
       const newNotes=[...notes];

       const index= notes.findIndex( (note)=> note.id===editNoteId );

       newNotes[index]=editedNote;
       setNotes(newNotes);
       setEditNoteId(null);
   }




  return (
    <div className={`${darkMode  && 'dark-mode'} `}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} mode={darkMode} />
        <Search handleSearchNote={setSearchtext} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          editNoteId={editNoteId}
          setEditNoteId={setEditNoteId}
          handleSubmitEditNote={submitEditNote}
        />
      </div>
    </div>
  );
}
export default App;
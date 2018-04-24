import React, { Component } from 'react';
import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm';

import { DB_CONFIG } from './shared/config';
// import * as firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/database';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);

    if (!firebase.apps.length) {
      this.app = firebase.initializeApp(DB_CONFIG);
    }
    this.database = this.app.database().ref().child('notes');
  
    this.state = {
      notes: [],
    };
  }

  componentWillMount() {
    const previousNotes = this.state.notes;
    
    this.database.on('child_added' , snap =>{
      previousNotes.push({
        id: snap.key,
        noteContent: snap.val().noteContent,
      })

      this.setState({
        notes: previousNotes
      })
    })

    this.database.on('child_removed', snap => {
      for(var i=0; i < previousNotes.length; i++){
        if(previousNotes[i].id === snap.key){
          previousNotes.splice(i, 1);
        }
      }

      this.setState({
        notes: previousNotes
      })
    })
  }

  addNote(note){
    this.database.push().set({ noteContent: note })
  }

  removeNote(noteId){
    console.log("from the parent: " + noteId);
    this.database.child(noteId).remove();
  }

  // componentDidMount() { }

  render() {
    // const { memo } = this.state;
    // console.log(this.state);
    return (
      <div className="noteWrapper">
      <header className="noteHeader">
        <h1 className="heading">React & Firebase To-Do List</h1>
      </header>
      <div className="notesBody">
        {
          this.state.notes.map((note) => {
            return (
              <Note noteContent={note.noteContent} noteId={note.id} key={note.id} removeNote={this.removeNote} />
            )
          })
        }
        <div className="notesFooter">
          <NoteForm addNote={this.addNote}/>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
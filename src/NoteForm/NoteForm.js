import React, { Component } from 'react';
import './NoteForm.css';
import PropTypes from 'prop-types';

class NoteForm extends Component{
    constructor(props) {
        super(props);
        // this.addNote = this.addNote.bind(this);

        this.state = {
            newNoteContent: '',
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeNote = this.writeNote.bind(this);
        console.log(this.handleUserInput);
        console.log(this.writeNote);
    }

    handleUserInput(e){
        this.setState({
            newNoteContent: e.target.value,
        })
    }

    writeNote(){
        this.props.addNote(this.state.newNoteContent);
        this.setState({
            newNoteContent: '',
        })
    }
    
    render(props){
        return(
            <div className="formWrapper">
                <input className = "noteInput" placeholder="Write" value={this.state.newNoteContent} 
                onChange={this.handleUserInput} />
                <button className = "noteButton" onClick={this.writeNote}>Add note</button>
            </div>
        )
    }
}

NoteForm.protoTypes = { 
}

export default NoteForm;
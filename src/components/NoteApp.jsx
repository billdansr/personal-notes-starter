import React from 'react';
import { getInitialData } from '../utils';
import NoteAppHeader from './NoteAppHeader';
import NoteAppBody from './NoteAppBody';

class NoteApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
        }

        this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this);
        this.onDeleteNoteEventHandler = this.onDeleteNoteEventHandler.bind(this);
        this.onArchiveNoteEventHandler = this.onArchiveNoteEventHandler.bind(this);
        this.onUnarchiveNoteEventHandler = this.onUnarchiveNoteEventHandler.bind(this);
        this.onSearchNoteEventHandler = this.onSearchNoteEventHandler.bind(this);
    }

    onAddNoteEventHandler({title, body}) {
        this.setState((previousState) => {
            return {
                notes: [
                    ...previousState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date(),
                        archived: false,
                    },
                ],
            };
        });
    }

    onDeleteNoteEventHandler(id) {
        const updatedNotes = this.state.notes.filter((note) => note.id !== id);

        this.setState(() => {
            return {
                notes: updatedNotes,
            };
        });
    }

    onArchiveNoteEventHandler(id) {
        this.setState((previousState) => {
            const updatedNote = previousState.notes.map((note) =>
            note.id === id ? {...note, archived: true} : note    
            );
            
            return {
                notes: updatedNote,
            };
        });
    }
    
    onUnarchiveNoteEventHandler(id) {
        this.setState((previousState) => {
            const updatedNote = previousState.notes.map((note) =>
            note.id === id ? {...note, archived: false} : note
            );

            return {
                notes: updatedNote,
            };
        });
    }

    onSearchNoteEventHandler({keyword}) {
        this.setState(() => {
            return {
                keyword: keyword,
            };
        });
        console.log(this.state)
    }

    render() {
        return (
            <React.Fragment>
                <NoteAppHeader searchNote={this.onSearchNoteEventHandler}  />
                <NoteAppBody
                    notes={this.state.notes}
                    addNote={this.onAddNoteEventHandler}
                    deleteNote={this.onDeleteNoteEventHandler}
                    archiveNote={this.onArchiveNoteEventHandler}
                    unarchiveNote={this.onUnarchiveNoteEventHandler}
                    keyword={this.state.keyword}
                />
            </React.Fragment>
        );
    }
}

export default NoteApp;

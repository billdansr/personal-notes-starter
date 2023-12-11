import React from 'react';
import NoteItem from './NoteItem';
import { showFormattedDate } from '../utils';

function NoteList({notes, deleteNote, archiveNote, unarchiveNote}) {
    return (
        <div className="notes-list">
            {
                notes.map((note) => (
                    <NoteItem
                        key={note.id}
                        title={note.title}
                        body={note.body}
                        createdAt={showFormattedDate(note.createdAt)}
                        id={note.id}
                        deleteNote={deleteNote}
                        archiveNote={archiveNote}
                        unarchiveNote={unarchiveNote}
                        archived={note.archived}
                    />
                ))
            }
        </div>
    );
}

export default NoteList;

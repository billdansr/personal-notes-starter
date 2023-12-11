import React from 'react';
import NoteInput from './NoteInput';
import NoteList from './NoteList';

function isDataEmpty(notes) {
    if (!notes.length) {
        return true;
    }
    return false;
}

function NoteAppBody({notes, addNote, deleteNote, archiveNote, unarchiveNote, keyword}) {
    let activeNotes = notes.filter((note) => note.archived === false);
    let archivedNotes = notes.filter((note) => note.archived === true);

    if (keyword) {
        activeNotes = activeNotes.filter((note) => note.title.toLowerCase().includes(keyword.toLowerCase()));
        archivedNotes = archivedNotes.filter((note) => note.title.toLowerCase().includes(keyword.toLowerCase()));
    }

    return (
        <div className="note-app__body">
            <NoteInput addNote={addNote} />
            <h2>Catatan Aktif</h2>
            {isDataEmpty(activeNotes) ? (
                <p className="notes-list__empty-message">Tidak ada catatan</p>
            ) : (
                <NoteList
                    notes={activeNotes}
                    deleteNote={deleteNote}
                    archiveNote={archiveNote}
                />
            )}
            <h2>Arsip</h2>
            {isDataEmpty(archivedNotes) ? (
                <p className="notes-list__empty-message">Tidak ada catatan</p>
            ) : (
                <NoteList
                    notes={archivedNotes}
                    deleteNote={deleteNote}
                    unarchiveNote={unarchiveNote}
                />
            )}
        </div>
    );
}

export default NoteAppBody;

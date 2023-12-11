import React from 'react';
import NoteItemContent from './NoteItemContent';
import NoteItemAction from './NoteItemAction';

function NoteItem({title, body, createdAt, id, deleteNote, archiveNote, unarchiveNote, archived}) {
    return (
        <div className="note-item">
            <NoteItemContent
                title={title}
                body={body}
                createdAt={createdAt}
            />
            <NoteItemAction
                id={id}
                deleteNote={deleteNote}
                archiveNote={archiveNote}
                unarchiveNote={unarchiveNote}
                archived={archived}
            />
        </div>
    );
}

export default NoteItem;

import React from 'react';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';

function NoteItemAction({id, deleteNote, archiveNote, unarchiveNote, archived}) {
    return (
        <div className="note-item__action">
            <DeleteButton id={id} deleteNote={deleteNote} />
            <ArchiveButton
                id={id}
                archiveNote={archiveNote}
                unarchiveNote={unarchiveNote}
                archived={archived}
            />
        </div>
    );
}

export default NoteItemAction;

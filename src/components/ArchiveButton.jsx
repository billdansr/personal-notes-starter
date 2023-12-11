import React from 'react';

function ArchiveButton({id, archiveNote, unarchiveNote, archived}) {
    return (
        !archived
            ? <button className="note-item__archive-button" onClick={() => {archiveNote(id)}}>Arsipkan</button>
            : <button className="note-item__archive-button" onClick={() => {unarchiveNote(id)}}>Pindahkan</button>
    );
}

export default ArchiveButton;

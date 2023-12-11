import React from 'react';

// function NoteSearch() {
//     return (
//         <div className="note-search">
//             <input
//                 type="text"
//                 placeholder="Cari catatan..."
//             />
//         </div>
//     );
// }

class NoteSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: '',
        };

        this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
    }

    onSearchChangeEventHandler(event) {
        this.setState({
            keyword: event.target.value,
        }, () => {
            this.props.searchNote(this.state);
        });
    }

    render() {
        return (
            <div className="note-search">
                <input
                    type="text"
                    placeholder="Cari catatan..."
                    onChange={this.onSearchChangeEventHandler}
                />
            </div>
        );
    }
}

export default NoteSearch;

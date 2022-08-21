function Card(props) {

    const { id } = props;
    const { text } = props;
    const { updateNotes } = props;

    const handleDelete = evt => {
        evt.preventDefault();
        deleteNote(id).then(updateNotes);
    };

    async function deleteNote(id) {
        let response = await fetch('http://localhost:7777/notes/' + id, {
            method: 'DELETE'
        });
        return response;
    }

    return (
        <div className="card-body">
            <button className="delete-button" onClick={handleDelete}>х</button>
            <p className="card-text">{text}</p>
        </div>
    )
}

export default Card;
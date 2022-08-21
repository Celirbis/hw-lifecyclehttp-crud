import React, { useState } from 'react';

function Form(props) {

    const { updateNotes } = props;
    const [form, setForm] = useState({
        text: ""
    });

    async function createNewNote(data) {
        let response = await fetch('http://localhost:7777/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        });
        return response;
    }

    const handleChange = ({ target }) => {
        const name = target.name;
        const value = target.value;
        setForm(prevForm => ({ ...prevForm, [name]: value }));
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        createNewNote({ text: form.text }).then(updateNotes);
    };

    return (
        <form className="Form" onSubmit={handleSubmit}>
            <label htmlFor="text">
                <p className="form-label">New entry</p>
            </label>
            <div className="form-entry-wrapper">
                <textarea id="text" className="form-entry" name="text" type="text" value={form.text} onChange={handleChange} />
                <input type="submit" className="submit-button" value="Добавить" />
            </div>
        </form>
    )
}

export default Form;
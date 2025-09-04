import notesStore from "../stores/notesStore";

export default function UpdateForm() {
    const store = notesStore();

    if (!store.updateForm._id) return <></>

    return (
        <div>
            <h2>Update Note</h2>
            <form onSubmit={store.updateNote}>
                <input onChange={store.handleUpdateFieldChange} name="title" value={store.updateForm.title} />
                <textarea onChange={store.handleUpdateFieldChange} name="body" value={store.updateForm.body} />
                <button type="submit">Update Note</button>
            </form>

        </div>
    )
}
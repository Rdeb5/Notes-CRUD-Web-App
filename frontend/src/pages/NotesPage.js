import { useEffect } from "react";
import notesStore from "../stores/notesStore";
import Notes from "../Components/Notes";
import UpdateForm from "../Components/updateForm";
import CreateForm from "../Components/CreateForm";



export default function NotesPage() {

    const store = notesStore();

    useEffect(() => {
        store.fetchNotes();
    }, []);

    return (
        <div>
            <Notes />
            <UpdateForm />
            <CreateForm />
        </div>);
}
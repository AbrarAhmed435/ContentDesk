import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Notes";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    getNote();
  }, []);

  const getNote = () => {
    api
      .get("/api/notes/")
      .then((res) => res.data)
      .then((data) => {
        setNotes(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  const deleteNote = (id) => {
    api
      .delete(`/api/notes/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) alert("Note deleted!");
        else alert("Failed to delete Note");
         getNote();
      })
      .catch((err) => alert(err));
   
  };

  const createNote = (e) => {
    e.preventDefault();
    if(!content.trim()||!title.trim()) return ;
    api
      .post("/api/notes/", { content, title })
      .then((res) => {
        if (res.status === 201) alert("Note created!");
        else alert("Failed to created note");
          getNote();
      })
      .catch((err) => {
        alert(err);
      });
  
  };

  return (
    <div>
        <div>
            <h2>Notes</h2>
            {notes.map((note)=><Note note={note} onDelete={deleteNote} key={note.id}/>)}
        </div>
      <div>
        <h2>Create Note</h2>
        <form onSubmit={createNote}>
          <label htmlFor="title">Title:</label>
          <br />
          <input
            type="text"
            id="title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label htmlFor="content">content:</label>
          <br />
          <textarea
            name="content"
            id="content"
            required
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

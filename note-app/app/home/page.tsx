"use client";

import { useEffect, useState } from "react";
import ProtectedRoute from "../utils/ProtectedRoute";
import TextArea from "../../components/textArea";
import Button from "@/components/button";
import Input from "@/components/input";
import NoteCard from "@/components/NoteCard";
import { useSelector, useDispatch } from 'react-redux';
import { setNotes, addNotes, deleteNotes, editNotes } from "@/redux/notesSlice";
interface Note {
  id: string;
  title: string;
  note: string;
}

export default function HomePage() {
  
  const notes = useSelector((state: { notes: { NotesList: Note[] } }) => state.notes.NotesList);
  const dispatch = useDispatch();
  const [editNotespopup, setEditNotespopup] = useState(false);
  const [addNotepopUp, setAddNotepopUp] = useState(false);
  const [values, setValues] = useState({
    title: "",
    note: ""
  });
  const [id, setId] = useState("");

  useEffect(() => {
    handleAddNoteCard();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues(prevState => ({ ...prevState, [e?.target?.name]: e?.target?.value }));
    console.log(e?.target?.value);
  };

  const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValues(prevState => ({ ...prevState, note: e.target.value }));
  };

  const handlePopup = () => {
    setValues({ title: "", note: "" });
    setId("");
    setAddNotepopUp(!addNotepopUp);
  };

  const handleAddNote = () => {
    if (values.title.trim() && values.note.trim()) {
      dispatch(addNotes({id:"23", title: values.title, note: values.note }));
      setValues({ title: "", note: "" });
      setAddNotepopUp(false);
    }
  };

  const handleSaveNote = () => {
    if (values.title.trim() && values.note.trim()) {
      dispatch(editNotes({id:"23", updatedNote: values.note }));
      setId("");
      setValues({ title: "", note: "" });
      setEditNotespopup(false);
    }
  };

  const handleAddNoteCard = () => {
    dispatch(setNotes([{id:"24",title: "Sample Note", note: "This is a sample note." }]));
  };

  const handleEditPopup = (id:string,title?:string,note?:string) => {
    if(id && title && note)
    {
    setId(id);
    setValues({ title, note });
    }
    setEditNotespopup(!editNotespopup);
  };

  const handleDeleteNote = () => {
    dispatch(deleteNotes(id));
    setEditNotespopup(false);
  };

  return (
    <ProtectedRoute>
      <div className="h-screen">
        <h1 className="text-4xl ml-2"> Good Morning Deva! </h1>
        <div className="flex flex-wrap mt-4 px-2">
          {notes.map((note, index) => (
            <NoteCard key={index} id={note.id} title={note.title} note={note.note} onClickHandle={handleEditPopup}/>
          ))}
        </div>
      </div>
    
      <img
        className="rounded-full fixed bottom-2 right-2 m-4 w-15 h-15 z-50"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrDHgaMkxGFKcXa2qP8gkOVZrDIEpmr362ag&s"
        alt="note"
        width={200}
        height={200}
        onClick={handlePopup}
      />
      {editNotespopup && (
        <div
          className="fixed inset-0 flex items-center justify-center"
          style={{ backgroundColor: "#7d78789c" }}
        >
          <div className="bg-white rounded shadow-md rounded-lg relative">
          <div className="flex justify-between items-center border-b border-solid border-stone-600 px-1 bg-[#f3d1b6]">
          <h2 className="text-xs font-bold text-brown">{values.title}</h2>
            <button
              className="top-2 right-2 text-black rounded-full w-8 h-8 flex items-center justify-center"
              onClick={() => setEditNotespopup(false)}
            >
              ✕
            </button>
            </div>
            <div className="p-6 pt-0 bg-[#f5f1dd] flex flex-col ">
              <br />
            <TextArea name="note" newNote={values.note} setNewNote={handleChangeTextArea} />
            <div className="flex justify-end">
              <Button
                className="bg-blue-500 text-white px-2 py-1 rounded mr-2 bg-green-500"
                onClick={handleSaveNote}
              >
                Save
              </Button>
              <Button
                className="bg-gray-300 text-black px-2 py-1 rounded bg-red-500"
                onClick={handleDeleteNote}
              >
                Delete
              </Button>
            </div>
            </div>
          </div>
        </div>
      )
        
      }
      {addNotepopUp && (
        <div
          className="fixed inset-0 flex items-center justify-center"
          style={{ backgroundColor: "#7d78789c" }}
        >
          <div className="bg-white rounded shadow-md rounded-lg relative">
          <div className="flex justify-between items-center border-b border-solid border-stone-600 px-1 bg-[#f3d1b6]">
          <h2 className="text-xs font-bold text-brown">Add Note</h2>
            <button
              className="top-2 right-2 text-black rounded-full w-8 h-8 flex items-center justify-center"
              onClick={handlePopup}
            >
              ✕
            </button>
            </div>
            <div className="p-6 pt-0 bg-[#f5f1dd] flex flex-col ">
            <Input name="title" value={values.title} className="my-4 bg-white" placeholder="Text" onChange={handleChange}/>

            <TextArea name="note" newNote={values.note} setNewNote={handleChangeTextArea} />
            <div className="flex justify-end">
              <Button
                className="bg-blue-500 text-white px-2 py-1 rounded mr-2 bg-green-500"
                onClick={handleAddNote}
              >
                Add Note
              </Button>
              <Button
                className="bg-gray-300 text-black px-2 py-1 rounded bg-red-500"
                onClick={handlePopup}
              >
                Cancel
              </Button>
            </div>
            </div>
          </div>
        </div>
      )}
    </ProtectedRoute>
  );
}
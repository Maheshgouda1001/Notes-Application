import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Note {
    id: string;
    title: string;
    note: string;
}

interface NotesState {
    NotesList: Note[];
}

const initialState: NotesState = {
    NotesList: []
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setNotes: (state, action: PayloadAction<Note[]>) => {
            state.NotesList = action.payload;
        },
        addNotes: (state, action: PayloadAction<Note>) => {
            state.NotesList.push(action.payload);
        },
        editNotes: (state, action: PayloadAction<{ id: string; updatedNote: string }>) => {
            const { id, updatedNote } = action.payload;
            const noteIndex = state.NotesList.findIndex(note => note.id === id);
            // if (noteIndex !== -1) {
                state.NotesList[noteIndex] = { ...state.NotesList[noteIndex], note: updatedNote };
            // }
        },
        deleteNotes: (state, action: PayloadAction<string>) => {
            state.NotesList = state.NotesList.filter(note => note.id !== action.payload);
        }
    }
});

export const { setNotes, addNotes, editNotes, deleteNotes } = userSlice.actions;

export default userSlice.reducer;
import notesData from "../components/notes-table/notes-table.data";
import { archieveNote } from "./actions";
import { NOTES_LOAD, NOTE_DELETE, ADD_ARCHIEVED_NOTE } from "./types";

const initialState = {
  notes: notesData,
  archievedNotes: [],
};

export const notesReducer = (state = initialState, action) => {
  // console.log("notesTable Reducer > ", action);
  const { data } = action;
  const { notes } = state;
  const { archievedNotes } = state;
  // switch (action.type) {
  //   case COMMENT_CREATE:
  //     return {
  //       ...state,
  //       comments: [...state.comments, action.data],
  //     };
  switch (action.type) {
    case NOTES_LOAD:
      const notesNew = data.map((res) => {
        return {
          res,
        };
      });
      return {
        ...state,
        notes: notes,
      };
    case NOTE_DELETE:
      const deletedNotes = notes.filter((note) => note.id !== data.id);
      return {
        ...state,
        notes: deletedNotes,
      };

    case ADD_ARCHIEVED_NOTE:
      console.log(archievedNotes);
      const notArchievedNotes = notes.filter((note) => note.id !== data.id);
      return {
        ...state,
        notes: notArchievedNotes,
        archievedNotes: [...archievedNotes, data],
      };

    default:
      return state;
  }
};

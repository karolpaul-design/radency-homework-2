import { NOTES_LOAD, NOTE_DELETE, ADD_ARCHIEVED_NOTE } from "./types";

export function notesLoad(notes) {
  return {
    type: NOTES_LOAD,
    notes: notes,
  };
}

export function noteDelete(id) {
  console.log(id);
  return {
    type: NOTE_DELETE,
    data: { id },
  };
}
export function archieveNote(name, created, category, content, dates, id) {
  return {
    type: ADD_ARCHIEVED_NOTE,
    data: { name, created, category, content, dates, id },
  };
}

// import { useState, useEffect } from "react";
import { notesLoad } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { notesReducer } from "../../redux/notesTable-reducer";
import uniqid from "uniqid";
import SingleNote from "../single-note/single-note.component";

function NotesTable(props) {
  // const [notes, setNotes] = useState(null);
  const notes = useSelector((state) => {
    const { notesReducer } = state;
    return notesReducer.notes;
  });
  // console.log("notes > ", notes);

  // const handleInput = (e) => {
  //   e.preventDefault();
  //   setTextComment(e.target.value);
  // };

  // const dispatch = useDispatch();
  // dispatch(notesLoad());

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // console.log("submit text comment > ", textComment);
  //   const id = uniqid();
  //   dispatch(commentCreate(textComment, id));
  //   setTextComment("");
  // };

  // useEffect(() => {
  //   dispatch(notesLoad());
  // }, []);

  return (
    <div className="card-comments">
      <table id="fresh-table" className="table">
        <thead>
          <tr>
            <th data-field="name">Name</th>
            <th data-field="created">Created</th>
            <th data-field="category">Category</th>
            <th data-field="content">Content</th>
            <th data-field="dates">Dates</th>
            <th data-field="actions">Actions</th>
          </tr>
        </thead>
        <tbody id="table-notes">
          {notes.map(({ id, ...props }) => {
            return <SingleNote key={id} id={id} {...props} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
export default NotesTable;

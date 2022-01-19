import { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import uniqid from "uniqid";
import { noteDelete, archieveNote } from "../../redux/actions";

function SingleNote({ name, created, category, content, dates, id }) {
  // const [singleCommentText, setSingleCommentText] = useState("");

  // const { text, id } = data;
  // useEffect(() => {
  //   if (text) {
  //     setSingleCommentText(text);
  //   }
  // }, [text]);

  const dispatch = useDispatch();
  // const handleInput = (e) => {
  //   setSingleCommentText(e.target.value);
  // };
  // const handleUpdate = (e) => {
  //   e.preventDefault();
  //   console.log("submit single comment > ", singleCommentText);

  //   dispatch(commentUpdate(singleCommentText, id));
  // };
  const handleArchieve = (e) => {
    e.preventDefault();
    dispatch(archieveNote(name, created, category, content, dates, id));
  };
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(noteDelete(id));
  };
  const actionBtnsData = [
    {
      name: "Archieve",
      classData: "fas fa-archive",
      handler: handleArchieve,
    },
    {
      name: "Delete",
      classData: "fas fa-trash",
      handler: handleDelete,
    },
  ];
  return (
    <tr archieved="false">
      <td>{name}</td>
      <td>{created}</td>
      <td>{category}</td>
      <td>{content}</td>
      <td>{dates}</td>
      <td>
        {actionBtnsData.map(({ name, classData, handler }) => (
          <a
            key={uniqid()}
            title={name}
            onClick={handler}
            className="table-action"
          >
            <i className={classData}></i>
          </a>
        ))}
      </td>
    </tr>
  );
}
export default SingleNote;

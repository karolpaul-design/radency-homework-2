import React from "react";

import "./custom-button.styles.scss";

const categorySelector = ({ children, category, ...otherProps }) =>
  //   <button
  //     className={`${inverted ? "inverted" : ""} ${
  //       isGoogleSignIn ? "google-sign-in" : ""
  //     } custom-button`}
  //     {...otherProps}
  //   >
  //     {children}

  category === "Task"
    ? `<select name="select"> 
      <option value="Task" selected>Task</option>
      <option value="Random Thought" >Random Thought</option>
      <option value="Idea" >Idea</option>
    </select>`
    : category === "Random Thought"
    ? `<select name="select"> 
      <option value="Task">Task</option>
      <option value="Random Thought" selected >Random Thought</option>
      <option value="Idea" >Idea</option>
    </select>`
    : category === "Idea"
    ? `<select name="select"> 
      <option value="Task">Task</option>
      <option value="Random Thought" >Random Thought</option>
      <option value="Idea" selected>Idea</option>
    </select>`
    : null;

export default categorySelector;

export const Task = (props) => {
  return (
    <div className="task">
      <h1>
        {props.id + 1}. {props.task}
      </h1>
      <button
        className="complete_button"
        onClick={props.doneTask}
        id={props.id}
      >
        {"\u2714"}
      </button>
      <button
        className="cancel_button"
        onClick={props.cancelTask}
        id={props.id}
      >
        {"\u2716"}
      </button>
    </div>
  );
};

export const DoneTask = (props) => {
  return (
    <h1 style={{ color: "green" }}>
      {props.id + 1}. {props.task}
    </h1>
  );
};

export const Header = (props) => {
  return (
    <div className="headers">
      <h1 style={{ fontSize: 90 }}>
        ToDo <span className="bruh_span">Bruh!</span>
      </h1>
      <p style={{ fontSize: 30 }}>Remind yourselves with the tasks! 😌</p>
      <input
        id="task_input"
        onChange={props.handleChange}
        type="text"
        placeholder="Enter your task here"
      ></input>
      <button onClick={props.addTask} value={"Add"}>
        Add
      </button>
    </div>
  );
};

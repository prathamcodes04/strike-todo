import "./index.css";
import { useState, useMemo, useEffect } from "react";



//helper: format time in task row, converts new Date() into "10:30am"
function formatTime(date){
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).toLowerCase();
}

//helper: format date in header, new Data() into TUE JUN 16
function formatDate(date){
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

export default function App() {
  const [inputText, setInputText] = useState("");
  const [priority, setPriority] = useState("low");
  const [filter, setFilter] = useState("All");

  //load saved tasks
  const [tasks, setTasks ] = useState(() => {
    const saved = localStorage.getItem("strike-tasks");
    return saved ? JSON.parse(saved) : [];
  });

  //saved tasks in localStorage
  useEffect(() => {
    localStorage.setItem("strike-tasks", JSON.stringify(tasks));
  }, [tasks])

  // filtering feature
  const filteredTasks = useMemo(() => {
    if(filter == "active") return tasks.filter(t => !t.done);
    if(filter == "done") return tasks.filter(t => t.done);
    return tasks;
  }, [tasks, filter]);

  //progress bar
  const doneCount = tasks.filter(t => t.done).length; 
  const totalCount = tasks.length;
  const progress = totalCount === 0 ? 0 : Math.round((doneCount/totalCount) * 100);

  //add task 
  function addTask(){
    const text = inputText.trim();
    if(!text) return;

    const newTask = {
      id: Date.now(), //unique numeric ID
      text: text,
      priority: priority,
      done: false,
      time: formatTime(new Date()),
    };

    setTasks(prev => [newTask, ...prev]); //add to top of list
    setInputText(""); //clear input field
  }

  //checkbox
  function toggleDone(id){
    setTasks(prev => prev.map(t => t.id === id ? {...t, done: !t.done} : t));
  }

  //deleteTask functionality
  function deleteTask(id){
    setTasks(prev => prev.filter(t => t.id !== id));
  }

  //cleardone function - removes all tasks
  function clearDone(){
    setTasks(prev => prev.filter(t => !t.done));
  }

  //enter to add
  function handleKeyDown(e){
    if (e.key === "Enter") addTask();
  }

  return (
    <>
      {/* <!-- HEADER --> */}
      <header className="site-header">
        <div className="header-inner">
          <div className="logo">
            <span className="logo-mark">✕</span>
            <span className="logo-text">STRIKE</span>
          </div>
          <div className="header-meta">
            <span className="task-counter" id="taskCounter">
              {totalCount} {totalCount === 1 ? "task" : "tasks"}
            </span>
            <span className="date-chip" id="currentDate">{formatDate(new Date())}</span>
          </div>
        </div>
        <div className="header-rule"></div>
      </header>

      {/* <!-- MAIN --> */}
      <main className="main-layout">
        {/* <!-- INPUT ZONE --> */}
        <section className="input-zone">
          <div className="input-label">// new task</div>
          <div className="input-row">
            <input
              type="text"
              id="taskInput"
              className="task-input"
              placeholder="What needs to get done?"
              maxLength={120}
              autoComplete="off"
              value={inputText}
              onChange={e => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button className="add-btn" id="addBtn" aria-label="Add task"
              onClick={addTask}
            >
              <span className="add-btn-icon">+</span>
            </button>
          </div>

          {/* <!-- Priority picker --> */}
          <div className="priority-row">
            <span className="priority-label">priority:</span>
              {["low", "mid", "high"].map(p => (
                <button
                  key={p}
                  className={`priority-chip ${priority === p ? "active" : ""}`}
                  data-priority = {p}
                  onClick={() => setPriority(p)}
                >
                  {p === "high" ? "high 🔥" : p}
                </button>
              ))}
          </div>
        </section>

        {/* <!-- FILTER BAR --> */}
        <nav className="filter-bar" aria-label="Filter tasks">
          {["all", "active", "done"].map(f => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? "active" : ""}`}
              data-filter = {f}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}

          <button className="clear-btn" onClick={clearDone}>
            Clear done
          </button>
        </nav>

        {/* <!-- TASK LIST --> */}
        <section className="task-board" aria-label="Task list">
          <ul className="task-list" id="taskList">
            {filteredTasks.map(task => (
              <li
                key={task.id}
                className={`task-item ${task.done ? "done" : ""}`}
                data-priority = {task.priority}
              >
                {/* checkbox */}
                <div
                  className={`task-check ${task.done ? "checked" : ""}`}
                  onClick={() => toggleDone(task.id)}
                  role="checkbox"
                  aria-checked = {task.done}
                  tabIndex={0}
                  onKeyDown={e => e.key === "Enter" && toggleDone(task.id)}
                >
                  {task.done ? "✓" : ""}
                </div>

                {/* text + meta */}
                <div className="task-body">
                  <span className="task-text">{task.text}</span>
                  <div className="task-meta">
                    <span className={`task-priority-badge badge-${task.priority}`}>
                      {task.priority === "high" ? "high 🔥" : task.priority}
                    </span>
                    <span className="task-time">{task.time}</span>
                  </div>
                </div>

                {/* delete */}
                <button
                  className="task-delete"
                  onClick={() => deleteTask(task.id)}
                  aria-label="Delete task"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>

          {/* <!-- Empty state --> */}
          <div
            className={`empty-state ${filteredTasks.length === 0 ? "visible" : ""}`}
          >
            <div className="empty-icon">◎</div>
            <p className="empty-msg">
              Board is clear.
              <br />
              Add something above.
            </p>
          </div>
        </section>

        {/* <!-- PROGRESS STRIP --> */}
        <footer className="progress-strip">
          <div className="progress-text">
            {doneCount} / {totalCount} struck
          </div>
          <div className="progress-track">
            <div
              className="progress-fill"
              id="progressFill"
              style={{width: `${progress}%`}}
            ></div>
          </div>
        </footer>
      </main>
    </>
  );
}

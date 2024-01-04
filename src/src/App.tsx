// App.tsx
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1 className="display-4">ToDoリスト</h1>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="新しいタスクを入力"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-primary" type="button" onClick={addTask}>
            追加
          </button>
        </div>
      </div>

      <ul className="list-group">
        {tasks.map((task, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {task}
            <button className="btn btn-outline-danger" onClick={() => deleteTask(index)}>
              削除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

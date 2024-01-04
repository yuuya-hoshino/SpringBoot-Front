// App.tsx
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// タスクの型定義
type Task = string;

function App() {
  // tasks: ToDoリストのタスク一覧を管理するstate
  const [tasks, setTasks] = useState<Task[]>([]);
  
  // newTask: 新しいタスクを追加するためのstate
  const [newTask, setNewTask] = useState<string>('');

  // addTask: タスクを追加する関数
  const addTask = () => {
    if (newTask.trim() !== '') {
      // 新しいタスクをタスク一覧に追加し、newTaskをリセットする
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  // deleteTask: タスクを削除する関数
  const deleteTask = (index: number) => {
    // 指定されたindexのタスクを削除する
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1 className="display-4 text-center">ToDoリスト</h1>

      {/* 新しいタスクを追加するフォーム */}
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

      {/* ToDoリストの表示 */}
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

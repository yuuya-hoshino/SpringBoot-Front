import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState<string[]>([]); // タスクの配列をstateとして管理
  const [newTask, setNewTask] = useState<string>(''); // 新しいタスクの入力値をstateとして管理

  // 新しいタスクを追加する関数
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  // タスクを削除する関数
  const deleteTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>ToDoリスト</h1>

      {/* 新しいタスクのフォーム */}
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>追加</button>
      </div>

      {/* タスクのリスト */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

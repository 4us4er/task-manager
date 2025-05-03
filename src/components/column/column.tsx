import styles from './Column.module.css';
import { useState, KeyboardEvent, ChangeEvent, MouseEvent } from 'react';
import { Task } from '../../types/tasks';

const Column = () => {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    if (value === '') {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
      setTask(value);
    }
  };

  const handleAddTask = () => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title: task.trim(),
    };
    setTasks((prev) => [...prev, newTask]);
    setTask('');
    setIsButtonDisabled(true);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !isButtonDisabled) {
      handleAddTask();
    }
  };

  const handleDelete = (event: MouseEvent<HTMLButtonElement>) => {
    const clickedID = event.currentTarget.id;
    const filterTasks = tasks.filter((task) => task.id !== clickedID);
    setTasks(filterTasks);
  };
  return (
    <>
      <div className={styles.column}>
        <div className={styles.columnTitle}>Добавить задачу</div>
        <label>
          <input
            name="myInput"
            className={styles.task}
            onChange={handleInput}
            value={task}
            onKeyDown={handleKeyDown}
          />
        </label>
        <button
          id="add-button"
          className={styles.addTask}
          onClick={handleAddTask}
          disabled={isButtonDisabled}
        >
          + Add Task
        </button>
      </div>
      <div className={styles.taskList}>
        {tasks.map((task) => {
          return (
            <div className={styles.taskElement} id={task.id} key={task.id}>
              <span> {task.title} </span>
              <button
                id={task.id}
                className={styles.deleteButton}
                onClick={handleDelete}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
export { Column };

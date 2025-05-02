import styles from './Column.module.css';
import { useState } from 'react';
import { ChangeEvent } from 'react';

const Column = () => {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<string[]>([]);
  const handleInput = (evt: ChangeEvent<HTMLInputElement>) => {
    const target = evt.target as HTMLInputElement;
    setTask(target.value);
  };

  const handleClick = () => {
    setTasks([...tasks, task]);
    setTask('');
  };
  console.log(tasks);
  return (
    <>
      <div className={styles.column}>
        <div className={styles.columnTitle}>In Progress</div>
        <label>
          <input
            name="myInput"
            className={styles.task}
            defaultValue="Some initial value"
            onChange={handleInput}
            value={task}
          />
        </label>
        <button className={styles.addTask} onClick={handleClick}>
          + Add Task
        </button>
      </div>
      <div className={styles.taskList}>
        {tasks.map((task) => {
          return <div>{task}</div>;
        })}
      </div>
    </>
  );
};
export { Column };

import styles from './Column.module.css';
import { useState } from 'react';
import { ChangeEvent } from 'react';

const Column = () => {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<string[]>([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInput = (evt: ChangeEvent<HTMLInputElement>) => {
    const target = evt.target as HTMLInputElement;
    const value = target.value;
    if (value === '') {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
      setTask(value);
    }
  };
  const handleClick = () => {
    setTasks([...tasks, task]);
    setTask('');
    setIsButtonDisabled(true);
  };

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
        <button
          id="add-button"
          className={styles.addTask}
          onClick={handleClick}
          disabled={isButtonDisabled}
        >
          + Add Task
        </button>
      </div>
      <div className={styles.taskList}>
        {tasks.map((task) => {
          return <div className={styles.taskElement}>{task}</div>;
        })}
      </div>
    </>
  );
};
export { Column };

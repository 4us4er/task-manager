import { Task } from '../task/task';
import styles from './Column.module.css';

const Column = () => {
  return (
    <div className={styles.column}>
      <div className={styles.columnTitle}>In Progress</div>
      <Task />
      <button className={styles.addTask}>+ Add Task</button>
    </div>
  );
};
export { Column };

import { Column } from '../column/column';
import styles from './Board.module.css';

const Board = () => {
  return (
    <div className={styles.board}>
      <Column />
    </div>
  );
};
export { Board };

import styles from './Task.module.css';
import { useState } from 'react';
import { ChangeEvent } from 'react';
const Task = () => {
  const [task,setTask]=useState('')
  const handleInput = (evt:  ChangeEvent<HTMLInputElement>)=>{
    const target = evt.target as HTMLButtonElement;
    setTask(target.value);
  }

  return (
  <label >
    <input
        name="myInput"
        className={styles.task}
        defaultValue="Some initial value"
        onChange={handleInput}
        value={task}
    />
</label>)
};

export { Task };

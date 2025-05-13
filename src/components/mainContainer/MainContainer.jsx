import { useState } from 'react';
import { v4 } from 'uuid';
import Form from '../form/Form';
import TaskList from '../taskList/TaskList';
import styles from './mainContainer.module.css';

const MainContainer = () => {
  const [tasks, setTasks] = useState([
    {
      completed: false,
      id: v4(),
      taskText: 'Make a to do list'
    }
  ]);

  //filtro de tareas
  const [filter, setFilter] = useState('all');

  const filteredTasks = filerTasks(tasks, filter);
  //llamo a la funcion que filtra las tareas y le paso el array de tareas y el filtro

  return (
    <div className={styles.main}>
      <Form tasks={tasks} setTasks={setTasks} />
      {/* le doy las propiedades de tasks y setTasks al form que vienen del estado */}
      <TaskList tasks={filteredTasks} setTasks={setTasks} />
      {/* le doy las propiedades de tasks filtradas y setTasks al taskList que vienen del estado */}

      <div className={styles.listFooter}>
        <span>{tasks.length} items left</span>
        <span>Clear Completed</span>
      </div>

      <div className={styles.filters}>
        <button
          className={`${styles.filter} ${
            filter === 'all' ? `${styles.filterActive}` : ''
          }`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={`${styles.filter} ${
            filter === 'active' ? `${styles.filterActive}` : ''
          }`}
          onClick={() => setFilter('active')}
        >
          Active
        </button>
        <button
          className={`${styles.filter} ${
            filter === 'completed' ? `${styles.filterActive}` : ''
          }`}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

const filerTasks = (tasks, filter) => {
  //recibe todas las tareas y el filtro
  if (filter === 'all') {
    return tasks; //si el filtro es all, regresa todas las tareas
  }
  if (filter === 'active') {
    return tasks.filter(task => !task.completed); //si el filtro es active, regresa las tareas que no estan completas
  }
  if (filter === 'completed') {
    return tasks.filter(task => task.completed); //si el filtro es completed, regresa las tareas que estan completas
  }
};

export default MainContainer;

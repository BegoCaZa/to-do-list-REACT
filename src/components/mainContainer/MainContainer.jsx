import { useState } from 'react';
import { v4 } from 'uuid';
import Form from '../form/Form';
import TaskList from '../taskList/TaskList';
import styles from './mainContainer.module.css';
import Filters from '../filters/Filters';

const MainContainer = () => {
  const [tasks, setTasks] = useState([
    {
      completed: false,
      id: v4(),
      taskText: 'Make a to do list'
    }
  ]);

  //filtro de tareas
  const [filter, setFilter] = useState('All');
  //tiene que esta en el main porque es el padre

  const filteredTasks = filterTasks(tasks, filter);
  //llamo a la funcion que filtra las tareas y le paso el array de tareas y el filtro

  return (
    <div className={styles.main}>
      <Form tasks={tasks} setTasks={setTasks} />
      {/* le doy las PROPIEDAD de tasks y setTasks al form que vienen del estado*/}
      <TaskList filteredTasks={filteredTasks} setTasks={setTasks} />
      {/* le doy las PROPIEDAD de tasks filtradas y setTasks al taskList que vienen del estado-- recuerda que depende del nombre que le asignes a la propiedad */}

      <Filters
        filteredTasks={filteredTasks}
        filter={filter}
        setFilter={setFilter}
      />
      {/* recibe la funcion que cambia el estado del FILTRO, el FILTRO que edita el contenido del array y el array ya FILTRADO */}
    </div>
  );
};

const filterTasks = (tasks, filter) => {
  //recibe todas las tareas y el filtro
  if (filter === 'All') {
    return tasks; //si el filtro es all, regresa todas las tareas
  }
  if (filter === 'Active') {
    return tasks.filter(task => !task.completed); //si el filtro es active, regresa las tareas que no estan completas
  }
  if (filter === 'Completed') {
    return tasks.filter(task => task.completed); //si el filtro es completed, regresa las tareas que estan completas
  }
};

export default MainContainer;

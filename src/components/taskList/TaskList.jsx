import styles from './taskList.module.css';

const TaskList = ({ filteredTasks, setTasks }) => {
  return (
    //   recibe las tareas desde el main y las pinta
    <div className={styles.listContainer}>
      {filteredTasks.map(task => (
        <div key={task.id} className={styles.taskContainer}>
          <input
            className={styles.checkbox}
            type='checkbox'
            id={task.id}
            checked={task.completed}
            onChange={() => completeTask(task.id, filteredTasks, setTasks)}
          />
          <label htmlFor={task.id} className={styles.taskLabel}>
            {task.taskText}
          </label>
          <img
            id='delete-button'
            className={styles.deleteButton}
            src='/assets/icon-cross.svg'
            onClick={() => deleteTask(task.id, filteredTasks, setTasks)}
          />
        </div>
      ))}
    </div>
  );
};

const completeTask = (id, tasks, setTasks) => {
  //revisa las tareas y cambia el estado de la tarea
  const newTasks = tasks.map(task => {
    //si es la misma tarea que la que le di click
    if (task.id === id) {
      //cambia el estado de la tarea y la regresa
      return { ...task, completed: !task.completed };
    }

    //version corta
    //const foundedTask = tasks.find(task => task.id === id);
    //foundedTask.completed = !foundedTask.completed;
    //si no es la misma tarea, regresa la tarea sin cambios
    return task;
  });
  setTasks(newTasks); //regresa el nuevo array de tareas
};

const deleteTask = (id, tasks, setTasks) => {
  //filtra las tareas y elimina la tarea que le di click
  const newTasks = tasks.filter(task => task.id !== id);
  setTasks(newTasks); //regresa el nuevo array de tareas
};

export default TaskList;

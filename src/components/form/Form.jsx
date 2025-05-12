import { v4 } from 'uuid';

const Form = ({ tasks, setTasks }) => {
  return (
    <form
      className='form'
      onSubmit={event => createNewTask(event, tasks, setTasks)}
      //   tiene que ir aqui el PUTO EVENTO!
    >
      {/* // que el evento llame a la funcion que crea la nueva tarea de acuerdo al
      primer array */}
      <label htmlFor='input-to-do' className='label-circle'></label>
      <input
        type='text'
        name='taskText'
        //tengo que asignar esta propiedad para poder imprimir el valor del input
        id='input-to-do'
        className='input'
        placeholder='Create a new task...'
      />
    </form>
  );
};

const createNewTask = (event, tasks, setTasks) => {
  event.preventDefault();

  //creo una nueva tarea con las mismas propiedades que las anteriores
  const newTask = {
    completed: false, //la marca como incompleta
    id: v4(), //le da un id
    taskText: event.target.taskText.value //VINE DEL PUTO NAME
    // taskText: event.target.children[1].value //Lo mismo pero mala practica de REACT
  };

  //la meto a ese array del MAIN
  setTasks([...tasks, newTask]);

  event.target.taskText.value = ''; //limpio el input del PUTO NAME
};

export default Form;

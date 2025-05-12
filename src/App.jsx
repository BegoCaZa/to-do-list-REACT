import { useState } from 'react';
import { v4 } from 'uuid';

const tasksList = [
  {
    completed: false,
    id: v4(),
    task: 'Make a to do list',
    img: './assets/icon-cross.svg'
  }
];

const completeTask = complete => {
  if (complete) {
    tasksList.completed = true;
  }
};

const App = () => {
  const [complete, setComplete] = useState(false);
  console.log(complete);

  return (
    <div className='general-container'>
      <header className='header'>
        <div className='header-bar'>
          <h1 className='header-title'>TO DO LIST</h1>
        </div>
      </header>

      <main className='main'>
        <form className='form'>
          <label htmlFor='input-to-do' className='label-circle'></label>
          <input
            type='text'
            id='input-to-do'
            className='input'
            placeholder='Create a new task...'
          />
        </form>

        {/* dibujar cada tarea */}
        <div className='to-do-list'>
          {tasksList.map(task => (
            <div key={task.id} className='task-container'>
              <input
                className='checkbox'
                type='checkbox'
                id={task.id}
                checked={task.completed}
                onChange={() => setComplete(!complete)}
              />
              <label htmlFor={task.id} className='task-label'>
                {task.task}
              </label>
              <img
                id='delete-button'
                className='delete-button'
                src={task.img}
                alt='delete button'
              />
            </div>
          ))}
        </div>

        <div className='list-footer'>
          <span>0 items left</span>
          <span>Clear Completed</span>
        </div>

        <div className='filters'>
          <button className='filter filter-active'>All</button>
          <button className='filter'>Active</button>
          <button className='filter'>Completed</button>
        </div>
      </main>
    </div>
  );
};

export default App;

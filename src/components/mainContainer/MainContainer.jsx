import { useState } from 'react';
import { v4 } from 'uuid';
import Form from '../form/Form';
import TaskList from '../taskList/TaskList';

const MainContainer = () => {
  const [tasks, setTasks] = useState([
    {
      completed: false,
      id: v4(),
      taskText: 'Make a to do list'
    }
  ]);

  return (
    <div className='main'>
      <Form tasks={tasks} setTasks={setTasks} />
      {/* le doy las propiedades de tasks y setTasks al form que vienen del estado */}
      <TaskList tasks={tasks} setTasks={setTasks} />
      {/* le doy las propiedades de tasks y setTasks al taskList que vienen del estado */}

      <div className='list-footer'>
        <span>0 items left</span>
        <span>Clear Completed</span>
      </div>

      <div className='filters'>
        <button className='filter filter-active'>All</button>
        <button className='filter'>Active</button>
        <button className='filter'>Completed</button>
      </div>
    </div>
  );
};

export default MainContainer;

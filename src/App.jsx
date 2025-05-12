import { useState } from 'react';
import { v4 } from 'uuid';

const App = () => {
  const tasksList = [];

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

        <div className='to-do-list'>
          <div className='task-container'>
            <input className='checkbox' type='checkbox' id='checkbox' />
            <label for='checkbox' class='task-label'>
              Make a to do list
            </label>
            <img
              id='delete-button'
              class='delete-button'
              src='./assets/icon-cross.svg'
              alt='delete button'
            />
          </div>
        </div>

        <div class='list-footer'>
          <span>0 items left</span>
          <span>Clear Completed</span>
        </div>

        <div class='filters'>
          <button class='filter filter-active'>All</button>
          <button class='filter'>Active</button>
          <button class='filter'>Completed</button>
        </div>
      </main>
    </div>
  );
};

export default App;

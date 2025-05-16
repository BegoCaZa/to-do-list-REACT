import styles from './Filters.module.css';

const Filters = ({ filteredTasks, filter, setFilter }) => {
  const filterOptions = ['All', 'Active', 'Completed']; //para el bucle

  return (
    <>
      <div className={styles.listFooter}>
        <span>{filteredTasks.length} items left</span>
        <span>Clear Completed</span>
      </div>

      <div className={styles.filters}>
        {filterOptions.map(option => (
          <button
            key={option}
            className={`${styles.filter} ${
              filter === option && `${styles.filterActive}`
            }`}
            onClick={() => setFilter(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
};

export default Filters;

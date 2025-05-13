import styles from './Filters.module.css';

const Filters = ({ tasks, filter, setFilter }) => {
  return (
    <>
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
    </>
  );
};

export default Filters;

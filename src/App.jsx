import MainContainer from './components/mainContainer/MainContainer';
import Header from './components/header/Header';
// import Filters from './components/filters/Filters';

const App = () => {
  return (
    <div className='general-container'>
      <Header />
      <MainContainer />
      {/* <Filters /> */}
    </div>
  );
};

export default App;

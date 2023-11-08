import './styles.css';
import CarSearch from './components/CarSearch.tsx';
import CarList from './components/CarList.tsx';
import CarForm from './components/CarForm.tsx';
import CarValue from './components/CarValue.tsx';

function App() {

  return (
    <div className="container is-fluid">
      <CarForm/>
      <CarSearch/>
      <CarList/>
      <CarValue/>
    </div>
  )
}

export default App;

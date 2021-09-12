import './App.css';
import Navbar from './components/navbar';
import FoodTabs from './components/tabs';


function App() {
  return (
    <div className="App">
      <div className="page-container">

        <Navbar />
        <FoodTabs />
      </div>
    </div>
  );
}

export default App;

import './App.css';
import About from './components/AboutItems/About';
import Home from './components/Home';
import Footer from './components/HomeItems/Footer/Footer';
import Data from './store/Data';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;

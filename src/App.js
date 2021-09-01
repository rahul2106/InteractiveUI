import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import Discover from './components/Discover';
import Browse from './components/Browse';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Browse/>
      </div>
      <Menu/>
     
    </div>
  );
}

export default App;

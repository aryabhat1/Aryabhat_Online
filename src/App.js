import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <h3>Hello World!</h3>
      </header>
    </div>
  );
}

export default App;

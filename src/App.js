import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { Particles } from "tsparticles/Core/Particles";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>    
          <Navbar />
          <Header />
        </>
        <h3>Hello World!</h3>
      </header>
    </div>
  );
}

export default App;

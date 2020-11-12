import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import FloorPlan from './FloorPlan';

function App() {
  document.body
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <script>
        function testing
      </script>
  
      <FloorPlan src="./floorplan/" height="800px" width="800px"/>
      <Button color="primary" onClick={() => }>Test</Button>
    </div>
  );
}

export default App;

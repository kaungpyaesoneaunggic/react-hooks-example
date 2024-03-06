import logo from './logo.svg';
import './App.css';
import TestUseContext from './TestUseContext';
import ButtonUseContext from './components/ButtonUseContext';
import TestUseReducer from './TestUseReducer';
import TestUseTransition from './TestUseTransition';
import TestUseId from './TestUseId';

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <TestUseTransition/>
      </div>
    </div>
  );
}

export default App;

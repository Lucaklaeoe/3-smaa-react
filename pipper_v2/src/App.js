import logo from './logo.svg';
import './App.css';
import Feed from './components/Feed';
import LikeCounter from './components/LikeCounter';



function App() {
  // jsx
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pipper</h1>
        <Feed />
    
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Shop from './Component/Shop/Shop';
import Answers from './Component/Answers/Answers';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Answers></Answers>
    </div>
  );
}

export default App;

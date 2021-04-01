import logo from './logo.svg';
import Header from './components/Header'
import Routes from './config/Routes'
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo"/>
      <Header />
      <Routes />
    </div>
  );
}

export default App;

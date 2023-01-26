import logo from './logo.svg';
import './App.css';
import ContactoRecibirComponent from './components/container/contacto_recibir';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" width='100'/> */}
        <ContactoRecibirComponent />
      </header>
    </div>
  );
}

export default App;

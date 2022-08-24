// import logo from './logo.svg';
import './App.css';
import Weather from './Weather';


function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="San Francisco"/>
        <footer className="fixed-bottom credential mb-3 fw-light">
          <a href="https://github.com/paynah/shecodes-final-project">Open source code</a> by Nancy Yu <br/>
          <a href="https://www.flaticon.com/free-icons/sunset">All icons created by Dreamstale - Flaticon</a>
      </footer>
      </div>
    </div>
  );
}

export default App;

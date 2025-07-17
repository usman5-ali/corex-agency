import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Router from './components/Routes/Router';
import ScrollToTop from './components/ScrollTop'



function App() {
  return (
    <div className="App">
       <ScrollToTop />
 <Router />
    </div>
  );
}

export default App;

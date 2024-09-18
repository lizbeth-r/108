import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Catalog from './pages/Catalog';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Home></Home>
      <Catalog></Catalog>

      <Footer></Footer>
    </div>
  );
}

export default App;

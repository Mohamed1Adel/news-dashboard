import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import NavBar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import UpdateNews from './components/UpdateNews/UpdateNews';
function App() {
  return (
    <div className="App">
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/updateNews/:id" element={<UpdateNews />} />

        </Routes>
    </div>
  );
}

export default App;

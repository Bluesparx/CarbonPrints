import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Register } from './Components/Register/Register';
import { Login } from './Components/Login/Login';
import { Home } from './Components/Home/Home';
import Calculator from './Components/Calculator/Calculator';
import Insights from './Components/Insights/Insights';
import Landing from './Components/Landing/Landing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/insights" element ={<Insights/>}/>
      </Routes>
    </Router>
  );
}

export default App;

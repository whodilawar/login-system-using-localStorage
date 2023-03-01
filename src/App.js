import logo from './logo.svg';
import './App.css';
import RegisterPage from './Login/RegisterPage';
import LoginPage from './Login/LoginPage';
import { HomePage } from './Home/HomePage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


function App() {
  return (
    <Router>

    <Routes>
       <Route path="/" element={<LoginPage />} />
       <Route path="/login" element={<LoginPage />} />
       <Route path="/register" element={<RegisterPage />} />
       <Route path="/homepage" element={<HomePage />} />

       </Routes>
    </Router>
  );
}

export default App;

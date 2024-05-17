import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Userdashboard from './components/userdashboard';
import { Navigate } from 'react-router-dom';
import Admindashboard from './components/admindashboard';
import Login from './components/login';
import Register from './components/register';
import MainPage from './components/main';

function App() {
  const ProtectedRouteUser = ({ element }) => {
    const isAuthenticated = localStorage.getItem('userAuthToken2');
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route
            path="/userdashboard"
            element={<ProtectedRouteUser element={<Userdashboard />} />}
          />
          <Route path='/admindashboard' element={<Admindashboard />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;

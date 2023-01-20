
import './App.css';
import Login from './component/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from './component/Signup';
import Home from './component/Home';
import ProtectedRoute from './component/Protected';
import Forget from './component/Forgetpassword';
function App() {
  return (
    <div className="App">

      <Router>

        <Routes>
          <Route path='/home' element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>} />
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/forgetpassword' element={<Forget/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;

import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import User_Quotes from './components/User_Quotes';
import Random_Quotes from './components/Random_Quotes';
import User_Home from './components/User_Home';
import { EmailProvider } from './components/Quote_Context';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <EmailProvider>

      <Router>
        <div className="App">
          <div>
            <Random_Quotes />
          </div>
          <div>
            <Routes>
              <Route path="/" element={<User_Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/quotes" element={<User_Quotes />} />
            </Routes>
          </div>
        </div>
      </Router>
    </EmailProvider>
    );

}

export default App;

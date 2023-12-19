import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Auth } from "./pages/auth/index"
import { BdayTracker } from './pages/bday-tracker/index';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Auth />} />
          <Route path="/bday-tracker" element={< BdayTracker />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;

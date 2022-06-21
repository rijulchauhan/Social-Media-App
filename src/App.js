import { BrowserRouter as Router } from 'react-router-dom';
import Login from "./components/loginWindow/login.js";

function App() {
  return (
    <>
      <Router>
        <Login/>
      </Router>
    </>
  );
}

export default App;

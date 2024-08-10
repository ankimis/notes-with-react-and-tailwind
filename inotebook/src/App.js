import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from './components/Alert';

function App() {
  return (
    <div className="App">
      <NoteState>
        <Router>
          <div>
            <Navbar />
            <Alert  message="this is a amazing areact app??"/>
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </div>
          </div>
        </Router>
      </NoteState>
    </div>
  );
}
export default App;

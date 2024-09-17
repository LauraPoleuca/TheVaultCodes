import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import PuzzlePage from "./pages/PuzzlePage";
import "./App.css";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/puzzle" element={<PuzzlePage />}></Route>
            </Routes>
        </Router>
    );
}

export default App;

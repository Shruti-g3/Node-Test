import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Work from "./pages/Work";

function Home() {
  return (
    <div>
      <h1>ABES College</h1>
      <p>Welcome to Home Page</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/work">Work</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

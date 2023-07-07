import './App.css';
import { BrowserRouter as Router, Routes,
  Route } from "react-router-dom";
import Movies from "./components/Movies";
import Home from "./components/Home";


function App() {

  return <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path={"/movies"} element={<Movies/>}/>
    </Routes>
  </Router>

}

export default App;

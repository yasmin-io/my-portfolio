// CSS imports
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Component imports
import NavBar from "./components/navbar";
import Banner from "./components/banner";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <title>Yasmin Portfolio</title>
      <NavBar />
      <Banner />
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LiquidEther from "./LiquidEther";
import SideBar from "./SideBar";
import TodoPage from "./pages/TodoPage";

function App() {
  return (
    <div className="app">
      {/* Background */}
      <div className="background">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Foreground */}
    <div style={{ display: "flex", minHeight: "100vh", margin: 0}}>
      <Router>
        <SideBar />
        <main>
          <h1 className="content">TODO</h1>
          <Routes>
            <Route path="/" element={<TodoPage filter="all" />} />
            <Route path="/today" element={<TodoPage filter="today" />} />
            <Route path="/week" element={<TodoPage filter="week" />} /> 
          </Routes>
        </main>
        </Router>
      </div>
    </div>
  );
}

export default App;

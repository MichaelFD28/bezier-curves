import "./App.css";
import { GraphBase } from "./components/Bezier/GraphBase";

function App() {
  return (
    <>
      <div className="content">
        <h1>Bézier curves</h1>
        <GraphBase />
      </div>
    </>
  );
}

export default App;

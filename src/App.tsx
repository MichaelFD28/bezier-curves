import "./App.css";
import { GraphBase } from "./components/Bezier/GraphBase";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <div className="content">
        <h1>Bézier curves</h1>
        <GraphBase />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;

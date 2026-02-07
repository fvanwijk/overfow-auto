import { ReactSketchCanvas } from "react-sketch-canvas";
import content from "./content.txt?raw";

function App() {
  return (
    <div className="flex flex-col max-h-screen overflow-hidden">
      <h1>The scroll container should be below this heading</h1>
      <div className="relative overflow-auto flex-1 p-4 bg-amber-300">
        <pre className="whitespace-pre bg-amber-100">{content}</pre>
        <div className="absolute inset-0">
          <ReactSketchCanvas canvasColor="#ff000066" strokeColor="#a855f7" />
        </div>
      </div>
    </div>
  );
}

export default App;

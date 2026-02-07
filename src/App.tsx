import { ReactSketchCanvas } from "react-sketch-canvas";
import { useScrollableDimensions } from "./useScrollableDimensions";
import content from "./content.txt?raw";

function App() {
  const { containerRef, overlayRef, dimensions } = useScrollableDimensions();

  return (
    <div className="flex flex-col max-h-screen overflow-hidden">
      <h1>The scroll container should be below this heading</h1>
      <div
        ref={containerRef}
        className="relative overflow-auto flex-1 p-4 bg-amber-300"
      >
        <pre className="whitespace-pre">{content}</pre>
        <div
          ref={overlayRef}
          className="absolute inset-0"
          style={{
            width: `${dimensions.width}px`,
            height: `${dimensions.height}px`,
          }}
        >
          <div className="w-full h-full">
            <ReactSketchCanvas
              canvasColor="transparent"
              strokeColor="#a855f7"
              style={{ border: "none" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

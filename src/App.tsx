import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Arcade from "./pages/Arcade";
import Vision from "./pages/Vision";
import Utility from "./pages/Utility";
import Staking from "./pages/Staking";
import AlphaGroup from "./pages/AlphaGroup";
import Roadmap from "./pages/Roadmap";
import Passengers from "./pages/Passengers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/test"
          element={
            <iframe
              id="dextools-widget"
              title="DEXTools Trading Chart"
              width="500"
              height="400"
              src="https://www.dextools.io/widget-chart/en/ether/pe-light/0x2f679f848622da6f39f9ad807c7786618d283c79?theme=dark&chartType=2&chartResolution=30&drawingToolbars=false"
            ></iframe>
          }
        />
        <Route path="/vision" element={<Vision />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/passengers" element={<Passengers />} />
        <Route path="/utility" element={<Utility />} />
        <Route path="/utility/arcade" element={<Arcade />} />
        <Route path="/utility/staking" element={<Staking />} />
        <Route path="/utility/alphagroup" element={<AlphaGroup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

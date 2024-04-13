import { BrowserRouter, Routes, Route} from "react-router-dom";
import Landing from "./pages/Landing";
import Arcade from "./pages/Arcade";
import Vision from "./pages/Vision";
import Utility from "./pages/Utility";
import Staking from "./pages/Staking";
import AlphaGroup from "./pages/AlphaGroup";

function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/vision" element={<Vision/>}/>
      <Route path="/utility" element={<Utility/>}/>
      <Route path="/utility/arcade" element={<Arcade/>}/>
      <Route path="/utility/staking" element={<Staking/>}/>
      <Route path="/utility/alphagroup" element={<AlphaGroup/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Routes, Route} from "react-router-dom";
import Landing from "./pages/Landing";
import Arcade from "./pages/Arcade";
import Vision from "./pages/Vision";
import Utility from "./pages/Utility";

function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/vision" element={<Vision/>}/>
      <Route path="/utility" element={<Utility/>}/>
      <Route path="/arcade" element={<Arcade/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App

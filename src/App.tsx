import {createBrowserRouter, RouterProvider , BrowserRouter, Routes, Route} from "react-router-dom";
import Landing from "./pages/Landing";
import Utility from "./pages/Utility";
import Staking from "./pages/Staking";
import Arcade from "./pages/Arcade";

function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/utility" element={<Utility/>}/>
      <Route path="/staking" element={<Staking/>}/>
      <Route path="/arcade" element={<Arcade/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App

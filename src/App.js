import { BrowserRouter, Routes, Route } from "react-router-dom"
import  Header  from "./components/Header.js"
import {
  Homepage,
  Error,
  History,
  Launches,
  SingleLaunch,
  Rockets,
  SingleRocket,
} from "./pages"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/history" element={<History />}></Route>
        <Route path="/launches" element={<Launches />}></Route>
        <Route path="/launches/:id" element={<SingleLaunch />}></Route>
        <Route path="/rockets" element={<Rockets />}></Route>
        <Route path="/rockets/:id" element={<SingleRocket />}></Route>
        <Route path="*" element={<Error />}></Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App

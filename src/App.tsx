import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./components/pages/mainPage";

function App() {

  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyAppBar from "./components/AppBar";
import { Tour } from "./pages/Tour";

function App() {
  return (
    <>
      <MyAppBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Tour />} />
          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

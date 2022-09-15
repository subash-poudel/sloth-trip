import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyAppBar from "./components/AppBar";

function App() {
  return (
    <>
      <MyAppBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

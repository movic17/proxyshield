import { Route, BrowserRouter as router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProxyPage from "./pages/ProxyPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="#/:id" element={<ProxyPage />} />
        <Route path="#/*" element={<NotFound />} />
      </Routes>
    </router>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewsPage from "./pages/news";
import Detail from "./pages/detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/news" element={<NewsPage />} />
        <Route path="/blogs/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;

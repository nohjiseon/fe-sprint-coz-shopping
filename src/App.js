import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="content_guide">
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

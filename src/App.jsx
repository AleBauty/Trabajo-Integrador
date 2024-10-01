import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ContextProvider } from "./Components/utils/global.context";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/professional/:id" element={<Detail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/favs" element={<Favs />} />
          </Routes>
          <Footer />
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.js";
import NFTAdd from "./pages/NFT/NFTAdd.js";
import NFTList from "./pages/NFT/NFTList.js";
import NFTPurchases from "./pages/NFT/NFTPurchases.js";
import { Web3Provider } from "./contexts/Web3Context";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Web3Provider>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nft-add" element={<NFTAdd />} />
            <Route path="/nft-list" element={<NFTList />} />
            <Route path="/nft-purchases" element={<NFTPurchases />} />
          </Routes>
        </Web3Provider>
      </Router>
    </div>
  );
}

export default App;

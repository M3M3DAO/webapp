import logo from './logo.svg';
import './App.css';
import Navibar from './component/navibar';
import Proposal from './component/Proposal';
import Funding from './component/Funding';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navibar />}>
            <Route index element={<Proposal />} />
            <Route path="funding" element={<Funding />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

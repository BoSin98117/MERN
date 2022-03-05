import './App.css';
import Home from './components/Home';
import WordOrNumber from './components/WordOrNumber';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>

    <div className="App">

      <Routes>

        <Route path="/home" element={<Home />} />
        <Route path="/:param" element={<WordOrNumber />} />
        <Route path="/:param/:colorText" element={<WordOrNumber />} />
        <Route path="/:param/:colorText/:colorBackground" element={<WordOrNumber />} />
        
      </Routes>
    </div>

    </BrowserRouter>
  );
}

export default App;

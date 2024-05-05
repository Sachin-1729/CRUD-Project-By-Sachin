import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import ContactUs from './components/ContactUs1'; 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route exact path="/" element={<Create />}></Route>
          <Route exact path="/all" element={<Read />}></Route>
          <Route exact path="/:id" element={<Update />}></Route>
          <Route exact path="/ContactUs" element={<ContactUs/>}></Route>
          
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

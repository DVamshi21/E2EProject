
import './App.css';

import Register from './components/Register';
import Login from './components/Login';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import SideBar from './components/SideBar';

import About from './pages/About';
import Analytics from './pages/Analytics';
import Product from './pages/Product';
import Productlist from './pages/Productlist';
import Comments from './pages/Comments';

function App() {
  return (
    <Router>
      <SideBar>
        <Routes>

          
         
          <Route path="/about" element={<About />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productlist" element={<Productlist />} />
        </Routes>
      </SideBar>
      <Routes>  
        <Route path="/" element={<Login />} />  
        <Route path='Login' element={<Login />} />
        <Route path='Register' element={<Register />} />
        
      </Routes>

    </Router>
  );
}

export default App;

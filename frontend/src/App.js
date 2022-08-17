import {BrowserRouter, Routes ,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Listings from './pages/Listings';
// import 'semantic-ui-css/semantic.min.css';
// import 'semantic-ui-react';

function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <Navbar/>
      <div className="pages">
        <Routes>
          <Route path='/' element={<Home/>}>       
          </Route>

          <Route path='/listings' element={<Listings/>}>       
          </Route>
          
        </Routes>
      </div>
    </BrowserRouter>

    </div>
  );
}

export default App;

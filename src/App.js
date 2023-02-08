import logo from './logo.svg';
import './App.css';
import Cfrom from './Components/Cfrom';
import { Routes,Route } from 'react-router-dom';
import Cdata from './Components/Cdata';
import Details from './Components/Details';
function App() {
  return (
  
  <>
  <Routes>
    <Route path="/" element={<Cfrom/>}></Route>
    <Route path="/data" element={<Cdata/>}></Route>
    <Route path="/customer/:Dataid" element={<Details/>}></Route>
  </Routes>
  
  
  
  </>
   
  );
}

export default App;

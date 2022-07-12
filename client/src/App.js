
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import AddSongs from './components/AddSongs';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    
<Router>

<Header/>    

    <Routes>   
    
   <Route path="/AddSongs" element={< AddSongs/>} />
    <Route path="/" element={< Home/>} /> 
  
 
   </Routes>
   
   
    </Router>    
  );
}


export default App;

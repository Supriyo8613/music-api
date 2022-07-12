import React from 'react';
import AddSongs from './AddSongs';
import {useNavigate} from "react-router-dom";
const Header = () => {
  let navigate = useNavigate();
  return (
      <div>    
    <nav class="navbar ">
      <a class="navbar-brand" href="/ ">Home</a>
    </nav>
    
   
  

    <button 
          onClick={() => {
    
            navigate("/AddSongs");
          }}
    > Add songs</button>
    </div> 
  )
}

export default Header
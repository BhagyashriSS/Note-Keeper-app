
import { FiSun} from "react-icons/fi";
import { BsFillMoonFill } from "react-icons/bs";
import { FaPenNib } from "react-icons/fa";
import React, { Component }  from 'react';
const Header= ({handleToggleDarkMode,mode})=>{

function renderCoditionally(){
  if(mode)
  {
    return < FiSun size="2em"/>;
  }
  else
  {
    return <BsFillMoonFill size="2em"/>;
  }
}

    function handleOnClick(){
     handleToggleDarkMode( 
        (previousMode) => !previousMode
     )
    }
    return(
        <div className="header">
            <h1><FaPenNib size="1.1em"/>  Notes</h1>
            <button 
              onClick={ handleOnClick}
             className="save mode">
             {renderCoditionally()}
            
             </button>
        </div>
    )
}
export default Header;
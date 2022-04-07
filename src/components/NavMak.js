import React from 'react'
import image from "../images/maknews.png"
import Navigation from "./Navigation.css"
import DrawerIcon from "./DrawerIcon"


     
const NavMak = ({setCategory}) => {
  return (
    <div className="nav">
    <div className="icon">
     <DrawerIcon setCategory = {setCategory}/>
    </div>
    <img 
    style={{ cursor: "pointer"}}
    src={image}
        height='80%'
        alt='logo'
    />
    
    
    </div>
  )
}

export default NavMak
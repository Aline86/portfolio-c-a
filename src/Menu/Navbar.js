import React, {useState, useContext, useEffect, useRef} from 'react'
import './Navbar.css'
import {Link, NavLink} from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import BtnToggleFr from './../BtnToggle/Fr/BtnToggleFr'
import BtnToggleEn from './../BtnToggle/En/BtnToggleEn'
import {ThemeContext} from './../Context/ThemeContext'

    
export default function Navbar() {
    const [fadeout, setFadeOut] = useState(false)
    const {toggleFr, fr} = useContext(ThemeContext)
    const {toggleEn, en} = useContext(ThemeContext)
   
    const toggleFadeOut = () => {
       // inputEl.current.focus()
      
        setFadeOut(!fadeout)
    }
    useEffect(() =>{

    }, [fadeout])
    console.log(fadeout)
    return (
        <div className="flex">
            <div className="hamburger-menu">
                <input id={fadeout ? "menu__toggle_checked" : "menu__toggle"} type="checkbox" onClick={() => toggleFadeOut(!fadeout) } />
                <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
                </label>

                <ul className="menu__box">
                    <NavLink exact activeClassName="current" to="/">
                        <li className="a" onClick={toggleFadeOut}>{fr ? "Accueil" : "Home"}</li>
                    </NavLink>
                    <NavLink exact activeClassName="current" to="/Formation">
                        <li className="a" onClick={toggleFadeOut}>{fr ? "Formation" : "Training"}</li>
                    </NavLink>
                    <NavLink exact activeClassName="current" to="/Experience">
                        <li className="a" onClick={toggleFadeOut}>{fr ? "Expérience" : "Experience"}</li>
                    </NavLink>
                    <NavLink exact activeClassName="current" to="/Realisations">
                        <li className="a" onClick={toggleFadeOut}>{fr ? "Réalisations" : "Production"}</li>
                    </NavLink>
                    <NavLink exact activeClassName="current" to="/Langues">
                        <li className="a" onClick={toggleFadeOut}>{fr ? "Langues parlées" : "Foreign languages"}</li>
                    </NavLink>
                    <NavLink exact activeClassName="current" to="/Contact">
                        <li className="a" onClick={toggleFadeOut}>Contact</li>
                    </NavLink>
                    <div className="absolute_languages">
                        <div className="flex_row">
                            <BtnToggleFr />
                            <BtnToggleEn />
                        </div>
                    </div>
                      
                        
                </ul>
                
                        
                 
            </div>
         
            
           
        </div>
    )
}

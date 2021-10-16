import React, {useContext} from 'react'
import './BtnToggleEn.css'
import {ThemeContext} from '../../Context/ThemeContext'
import enImg from '../../img/enImg.png'
export default function BtnToggleEn() {
    const {toggleEn, en} = useContext(ThemeContext)
   
    return (
        <button onClick={toggleEn} className="btn-toggle2">
            <img alt="anglais" src={enImg} />
        </button>
    )
}
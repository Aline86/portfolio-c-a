import React, {useContext} from 'react'
import './BtnToggleFr.css'
import {ThemeContext} from '../../Context/ThemeContext'
import frImg from '../../img/frImg.png'

export default function BtnToggleFr() {
    const {toggleFr, fr} = useContext(ThemeContext)
   
    return (
        <button onClick={toggleFr} className="btn-toggle1">
            <img alt="france" src={frImg} />
        </button>
    )
}
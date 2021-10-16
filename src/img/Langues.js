import React from 'react'
import './Langues.css'
import bubble1 from '../../img/bubble1.png'
import bubble2 from '../../img/bubble2.png'
import bubble3 from '../../img/bubble3.png'
export default function Langues() {
    return (
        <div>
           <div className="languages">          
                <div className="de"><div>allemand</div></div><div className="german"></div><div className="rest"></div><a data-fancybox="energie" href="img/bubble1meaning.png"><img className="img_lan_w" src={bubble1} /></a>
                <br />
                <div className="en"><div>anglais</div></div><div className="english"></div><div className="rest1"></div><a data-fancybox="energie" href="img/bubble1meaning.png"><img className="img_lan_w" src={bubble1} /></a>
                <br />
                <div className="es"><div>espagnol</div></div><div className="spanish"></div><div className="rest2"></div><a data-fancybox="energie" href="img/bubble2meaning.png"><img className="img_lan_w" src={bubble2} /></a>
                <br />
                <div className="ru" id="russian"><div>russe</div></div><div className="russian"></div><div className="rest3"></div><a data-fancybox="energie" href="img/bubble3meaning.png"><img className="img_lan_w" src={bubble3} /></a>
            </div> 
        </div>
    )
}

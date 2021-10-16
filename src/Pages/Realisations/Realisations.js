import React, {useEffect, useState, useContext} from 'react'
import resa from '../../img/resa.png'
import psychologue from '../../img/psychologue.png'
import welcome from '../../img/welcome.png'
import './Realisation.css'
import {ThemeContext} from '../../Context/ThemeContext'
export default function Realisations(props) {
    const loader = document.querySelector('.loader');
    const [count, setCount] = useState(0)
    const [isLoaded, setIsLoaded] = useState(false);
    const {fr, en} = useContext(ThemeContext)
    const setLoading = () => {
        setIsLoaded(true)
        props.hideLoader()
    }
  
    useEffect(() => {
        setLoading()
    }, []);
    return (
        <>
        { isLoaded ?
        (<div className="bg mt">
           <h2>{ fr ? "Réalisations" : "Production"}</h2>
           <div className="container bt">
                <div>
                { fr ? (<><div><h3>Création d'une alternative à Doctolib pour une sage-femme libérale</h3></div><div><h3> - site de réservation de rendez-vous - </h3></div><div><h4 className="small">Laravel / JS - Ajax - PHP - CSS / Tous les calendriers (FO et BO) ont été codés à la main en Javascript - il ne s'agit pas de plugins -</h4></div></>) : 
                        (<><div><h3>Creation of an alternative to Doctolib for a liberal midwife</h3></div><div><h3> - appointment reservation website - </h3></div><div><h4 className="small">Laravel / JS - Ajax - PHP - CSS / All the calendars (FO et BO) are homemade Javascript calendars - they are not plugins -</h4></div></>) 
                        }
                </div>
                <br />
                <div data-aos="fade-down" data-aos-id="super-duper">
                    <a href="https://paule-bernard-sagefemme-poitiers.fr/" target="_blank"><img className="full_width" alt="réservation rendez-vous" src={resa} /></a>
                </div>
                <br />
                <br />
                <h3>{ fr ? "Création d'un site vitrine pour une psychologue libérale - HTML / CSS / JS" : "Creation of a showcase website for a liberal psychologist - HTML / CSS / JS"} </h3>
                <br />
                <div data-aos="fade-right" data-aos-id="super-duper">
                    <a href="https://psychologue-durand.fr/" target="_blank"><img className="full_width" alt="site de psychologue libéral" src={psychologue} /></a>
                </div>
                <br />
                <br />
                <h3>{ fr ? "Création d'un site amené à évoluer pour l'association Welcome Poitiers - React" : "Creation of a website that is meant to evolve for the association Welcome Poitiers - React"} </h3>
                <h4 className="small">{ fr ? "Utilistation de React Router Dom et de l'API de Context" : "use of React Router Dom and React Context API"}</h4>
                <h4 className="small">{ fr ? "Le visuel correspond strictement au cahier des charges qui m'a été imposé" : "The website's design corresponds strictly to the requirements specification I was given"}</h4>
                <br />
                <div data-aos="fade-left" data-aos-id="super-duper">
                    <a href="https://welcomepoitiers.fr/" target="_blank"><img className="full_width" alt="site de psychologue libéral" src={welcome} /></a>
                </div>
                <br />
                <br />
                <h3>{ fr ? "Lien vers quelques projets Github" : "Link towards a few Github's project"}</h3>
                <br />
                <div className="align-center">
                    <a className="link" href="https://github.com/Aline86">https://github.com/Aline86</a>
                </div>
               
            </div> 
        </div>)
        :
            props.showLoader()
        
    }
    </>)
}

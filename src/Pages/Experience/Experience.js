import React, {useEffect, useState, useContext} from 'react'
import './Experience.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {ThemeContext} from '../../Context/ThemeContext'
export default function Experience(props) {
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
        <div>
            <div className="full_h">
                <div className="container_all">
                    <div className="margins">
                        <div className="header_page_exp">
                            <Carousel autoPlay = {true} dynamicHeight={false} interval={10000} showIndicators={false} infiniteLoop={true} showThumbs={false} transitionTime={1000} showStatus={false} showArrows={true} >
                                <div className="col">
                                    <div className="first_exp">
                                        <div className="cadre">
                                            <h4>ALTERNETIS</h4>
                                            <br />
                                            <h3 className="title_exp">{fr ? "Septembre 2020 - Septembre 2021 : " : "September 2020 - September 2021 : "}</h3>
                                            <br />
                                            <div className="bigger"><strong>{fr ? "Année d'alternance sur le Framework Prestashop" : "Prestashop Work scheme"}</strong><br />
                                                {
                                                    fr ? 
                                                        (<><div>Création / Migration de modules - Migrations de sites - Intéraction avec l'API de Prestashop et utilisation de la librairie PrestashopWebService du packagist de composer à partir d'un site externe codé en MVC </div><div>Alternetis Poitiers, France</div></>)
                                                        : 
                                                        (<><div>Module creation / migration - Website Migration - Interacting with Prestashop API and use of the PrestashopWebService library (composer packagist) from an external website coded in a home made Model/View/Controller way.</div><div>Alternetis Poitiers, France </div></>)
                                                    }
                                            </div>
                                        </div>
                                        <h4 >TOP LOGISTIK</h4>
                                        <br />
                                        <h3 className="title_exp">{ fr ? "Juin 2016 – Novembre 2016 : " : "June 2016 - November 2016" }</h3>
                                        <br />
                                        <div className="bigger">{fr ? "Manager des Transports  France / Allemagne Top Logistik Kufstein, Autriche" : "Transport Manager France / Germany, Top Logistik, Kufstein Austria"}</div>
                                        <br />
                                        <h4>LKW WALTER</h4>
                                        <br />
                                        <h3 className="title_exp">{ fr ? "Mars 2015 – Mai 2016 : " : "March 2015 - May 2016 : "}</h3>
                                        <br />
                                        <div className="bigger">{ fr ? "Manager des Transports France / Benelux LKW Walter Kufstein, Autriche" : "Transport Manager France - Benelux, LKW Walter, Kuftein Austria"}</div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="ex_pro">
                                        <h3 className="title_exp">{ fr ? "Décembre 2018 - Juin 2019 :" : "December 2018 - June 2019 : "}</h3>
                                        <br />
                                        <div className="bigger">{ fr ? "Chargée de clientèle germanophone, SMCP Armatis LC, Chasseneuil du Poitou, France " : "German Customer Service Representative, SMCP Armatis LC, Chasseneuil du Poitou, France "}</div>
                                        <br />
                                        <br />
                                        <h3 className="title_exp">{ fr ? "Juin 2018 – Novembre 2018 :" : "June 2018 - November 2018 :"}</h3><div className="bigger">{ fr ? "Commerciale, Connexcars, Barcelone, Espagne ": "Commercial, Connexcars, Barcelone, Espagne"}</div>
                                        <br />
                                        <br />
                                        <h3 className="title_exp">{ fr ? "Juin 2017 - Décembre 2017 : " : "June 2017 - December 2017 : "}</h3><div className="bigger">{ fr ? "Chargée de clientèle germanophone, Vestiaire Collective, Armatis LC, Chasseneuil du Poitou, France " 
                                        : "German Customer Service Representative, Vestiaire Collective, Armatis LC, Chasseneuil du Poitou, France"}</div>
                                    </div>
                                </div>     
                                <div className="col">
                                    <div className="internship">
                                        <h4>{ fr ? "STAGES EN ENTREPRISE" : "Internships"} </h4>
                                        <br />
                                        <h3 className="title_exp">{ fr ? "Mai 2020 - Juin 2020 : " : "May 2020 - June 2020"}</h3>
                                        <br />
                                        <div className="bigger">{ fr ? (<><div>Stage de développement web sur Prestashop et Symfony - création de modules Prestashop - Ajout de fonctionnalités à une application web de gestion de licences sur Symfony </div><div> Alternetis - Poitiers, France</div></>) :
                                            (<><div>Symfony / Prestashop internship - Prestashop modules creation - Adding functionnalities to a license management application (Symfony) </div><div> Alternetis - Poitiers, France</div></>)}</div>
                                        <br />
                                        <br />
                                        <h3 className="title_exp">{ fr ? "2014 - Septembre 2014 :" : "2014 - September 2014 : "} </h3>
                                        <br />
                                        <div className="bigger">{ fr ? "Assistante en gestion immobilière, Nexity Studéa Nantes, France" : "Property management assistant, Nexity Studéa, Nantes, France"}</div>
                                        <br />
                                        <br />
                                        <h3 className="title_exp">{ fr ? " 2013 - Septembre 2013 : " : " 2013 - September 2013"}</h3><div className="bigger">{ fr ? "Assistante en gestion immobilière, Nexity Studéa, Tours, France " : "Property management assistant, Nexity Studéa, Tours, France"}</div> 
                                    </div>
                                </div>  
                                
                            </Carousel> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        :          
        props.showLoader()
    }
    </>
    )
}

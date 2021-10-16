import React, {useEffect, useState, useContext} from 'react'
import './Formations.css'
import {ThemeContext} from '../../Context/ThemeContext'
export default function Formation(props) {
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
            {
            isLoaded ?  
            <div className="full_h">
                <div className="container_all">
                    <div className="margins">
                        <div className="header_page">
                            <div className="in_header_page" data-aos="fade-in">
                                <h2 className="forma">{ fr ? "Formation" : "Background"}</h2>
                                <div className="cadre">
                                    <h3>{ fr ? "Septembre 2020 - Septembre 2021" : "September 2020 - September 2021"}</h3><p className="p_forma enhance">{ fr ? 'Licence Professionnelle "Technologies Logicielles pour le Web et les Terminaux Mobiles"' : "Professionnal licence 'Software technologies for the web and mobile devices'" } 
                                    <br />
                                    { fr ? "- Université de Poitiers -" : "- University of Poitiers -"}
                                    <br />
                                    France</p>
                                </div>
                                <br />
                                <h3>{ fr ? "Octobre 2019 - Juin 2020 :" : "October 2019 - June 2020"}</h3><p className="p_forma">{ fr ? "Titre Professionnel Développeur d'Applications web et web mobile " : "Job title 'Web and mobile device applications Developper'"}
                                <br />
                                { fr ? "- ISFAC de Poitiers -" : "- ISFAC Poitiers -"}
                                <br />
                                France</p>
                                <br />
                                <h3>{ fr ? "Septembre 2012 - Octobre 2014 :" : "September 2012 - October 2014"}</h3><p className="p_forma">{ fr ? "Master de Management des PME et Entrepreneuriat, Institut d’Administration des Entreprises" : "Master in Small and Medium size firms and entrepreneurship, 'Business administration Institute'" } 
                                <br />
                                { fr ? "- Université de Tours -" : "- University of Tours -"}
                                <br />
                                France</p>
                                <br />
                                <h3>{fr ? "Septembre 2008 - Septembre 2011 : ": "September 2008 - September 2011"}</h3><p className="p_forma">{fr ? "Licence de Langues Étrangères Appliquées, Université de Poitiers + Licence 3 Erasmus" : "Licence in applied languages, University of Poitiers + Erasmus third year of Licence"}
                                <br />
                                {fr ? "- Université Otto Von Guericke de Magdeburg -" : "Otto Von Guericke Magdeburg University "}
                                <br />
                                {fr ? "Allemagne" : "Germany"}</p>
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

import React, {useEffect, useState, useRef, useContext} from 'react'
import Accueil from './Pages/Accueil/Accueil'
import Formation from './Pages/Formation/Formation'
import Experience from './Pages/Experience/Experience'
import Realisations from './Pages/Realisations/Realisations'
import Langues from './Pages/Langues/Langues'
import Contact from './Pages/Contact/Contact'
import Navbar from './Menu/Navbar'
import ThemeContextProvider from './Context/ThemeContext'
import {BrowserRouter, HashRouter, Route, Switch} from "react-router-dom";

export default function Routes(props) {
 
  //const {targetRef, setTargetRef} = useContext(ThemeContext)
      //{() => <Accueil toggleHeight={scroll} />} 
  return (
    <>
       
      <HashRouter basename={process.env.PUBLIC_URL}>
        <ThemeContextProvider>
          <Navbar />
            <Switch>
              <Route path="/"   exact component={() => <Accueil hideLoader={props.hideLoader} showLoader={props.showLoader} />} />
              <Route path="/Formation" exact component={() => <Formation hideLoader={props.hideLoader}  showLoader={props.showLoader}  />} />
              <Route path="/Experience" exact component={() => <Experience hideLoader={props.hideLoader} showLoader={props.showLoader} />} />
              <Route path="/Realisations" exact component={() => <Realisations hideLoader={props.hideLoader} showLoader={props.showLoader} />} />
              <Route path="/Langues" exact component={() => <Langues hideLoader={props.hideLoader} showLoader={props.showLoader} />} />
              <Route path="/Contact" exact component={() => <Contact hideLoader={props.hideLoader}  showLoader={props.showLoader}/>} />
              <Route path="/" component={() => <div>ERREUR 404</div>} /> 
            </Switch>
        </ThemeContextProvider>
      </HashRouter> 
    </>
  );
}
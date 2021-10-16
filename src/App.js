import './App.css';
import Routes from './Routes'
import React, {useEffect} from 'react'

function App(props) {
  
  return (
    <div>
      <Routes hideLoader={props.hideLoader} showLoader={props.showLoader} />
    </div>
  );
}

export default App;

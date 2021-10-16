import React, {useEffect, useState, useLoadingActions} from 'react'
import './Contact.css'
export default function Contact(props) {
    const loader = document.querySelector('.loader');
    const [count, setCount] = useState(0)
    const [isLoaded, setIsLoaded] = useState(false);
   
    const setLoading = () => {
        setIsLoaded(true)
        props.hideLoader()
    }
  
    useEffect(() => {
        setTimeout(() => {
        
            setLoading()
        }, 500);
    }, []);
    return (
        <div>
                {
                isLoaded ? 
                  
                <div className="display_center full_h">
                    <div className="bg-white-languages">
                        <h2>Contact :</h2>
                        <div className="mail_contact">ca.haestie@gmail.com</div>
                    </div>
                </div> :
                      
                props.showLoader()
            
            }
            
                
            </div>
    )
}

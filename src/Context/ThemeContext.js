import React, {createContext, useState} from 'react';

export const ThemeContext = createContext();
const ThemeContextProvider = props => {
    const [fr, setFr] = useState(true)
    const toggleFr = () => {
        setFr(true)
        setEn(false)
    }
    const [en, setEn] = useState(false)
    const toggleEn = () => {
        setEn(false)
        setFr(false)
    }
    return (
        <ThemeContext.Provider value={{toggleFr, fr, toggleEn, en}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;
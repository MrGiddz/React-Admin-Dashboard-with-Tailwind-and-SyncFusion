import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const intialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notificatin: false
}

export const ContextProvider = ({ children }) => {

    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(intialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState("#03C9D7");
    const [currentMode, setCurrentMode] = useState("Light");
    const [themeSettings, setThemeSettings] = useState(false);

    const handleClick = (clicked) => {
        setIsClicked({...intialState, [clicked]: true})
    }

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value)
        setThemeSettings(false)
    }

    const setColor = (e) => {
        setCurrentColor(e);
        localStorage.setItem('colorMode', e)
        setThemeSettings(false)
    }



    return <StateContext.Provider
        value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize,
            setScreenSize,
            currentColor,
            currentMode,
            setColor,
            setCurrentColor,
            setMode,
            setCurrentMode,
            themeSettings, 
            setThemeSettings
        }}
    >
        {children}
    </StateContext.Provider>
}

export const useStateContext = () => useContext(StateContext);
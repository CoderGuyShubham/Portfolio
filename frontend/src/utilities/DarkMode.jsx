import React from 'react'

const DarkMode = () => {
    const setDarkMode = () =>{
        document.querySelector("body").setAttribute('data-theme', 'dark')
    }
    const setLightMode = () =>{
        document.querySelector("body").setAttribute('data-theme', 'light')
    }
    setDarkMode()

    const toggleTheme = (e) =>{
        if(e.target.checked) setDarkMode();
        else setLightMode();
    }
  return (
    <div>
      <button onClick={toggleTheme}>sun</button>
    </div>
  )
}

export default DarkMode

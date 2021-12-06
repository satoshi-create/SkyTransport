import React, { useState } from 'react'

const GatsbyContext = React.createContext();

const GatsbyProvider = ({ children }) => {
  const [isSidebar, setisSidebar] = useState(false)
  const [value, setValue] = useState(0)

  const openSidebar = () => {
    setisSidebar(true);
    document.querySelector("html").classList.add("open");
  }
  const closeSidebar = () => {
    setisSidebar(false);
    document.querySelector("html").classList.remove("open");
  }


  return (
    <GatsbyContext.Provider
      value={{ isSidebar,openSidebar,closeSidebar,value,setValue }}
    >
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvider };
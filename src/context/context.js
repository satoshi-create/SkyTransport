import React, { useState } from 'react'

const GatsbyContext = React.createContext();

const GatsbyProvider = ({ children }) => {
  const [isSidebar, setisSidebar] = useState(false)

  const openSidebar = () => {
    setisSidebar(true)
  }
  const closeSidebar = () => {
    setisSidebar(false)
  }


  return (
    <GatsbyContext.Provider
      value={{ isSidebar,openSidebar,closeSidebar }}
    >
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvider };
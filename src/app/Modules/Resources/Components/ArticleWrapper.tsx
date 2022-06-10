import React, { createContext, FC, useEffect, useState } from 'react'
import Navbar from '../Navbar'
import { Iarticle } from '../ResourcesData'

export const NavBarContext = createContext<INavBarContext | null>(null)

interface INavBarContext {
  addNavBarItem: (text: string, onScroll: () => void) => void
}

export const ArticleWrapper: FC<{ item:Iarticle }> = ({ item }) => {
  const [navbarList, setNavBarList] = useState<{ text: string, onScroll:() => void }[] | []>([])
  useEffect(() => {
    setNavBarList([])
  }, [])

  const addNavBarItem = (text: string, onScroll: () => void) => {
    setNavBarList((prev) => [...prev, { text, onScroll }])
  }

  return (
    <NavBarContext.Provider value={ { addNavBarItem } }>
      { navbarList && <Navbar items={ navbarList }/> }
      { item.component(item) }
    </NavBarContext.Provider>
  )
}

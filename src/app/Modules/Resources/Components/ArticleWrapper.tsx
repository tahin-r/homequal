import React, { createContext, FC, useEffect, useState } from 'react';
import Navbar                                            from '../Navbar';
import { useLocation }                                   from 'react-router-dom';


export const NavBarContext = createContext<INavBarContext | null>(null)

interface INavBarContext {
  addNavBarItem: (text: string, onScroll: () => void) => void
}

export const ArticleWrapper: FC<any> = ({ item }) => {
  const [navbarList, setNavBarList] = useState<{ text: string, onScroll: () => void }[] | []>([])
  const { pathname } = useLocation()
  useEffect(() => {
    setNavBarList([])
  }, [pathname])

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
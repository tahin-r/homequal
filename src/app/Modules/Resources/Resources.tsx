import React                  from 'react'
import { Route, Routes }      from 'react-router-dom'
import { ResourcesDashboard } from './ResourcesDashboard'
import { articles }           from './ResourcesData'
import { HeaderDivider }      from '../../../shared/styles'
import { Copyrights }         from '../../../shared/strings/strings'
import { ArticleWrapper }     from './Components/ArticleWrapper'


export const Resources = () => {

  const ResourcesRoutes = articles.map((item, index) => <Route path={ item.link }
                                                               element={ <ArticleWrapper item={ item }/> }
                                                               key={ index }/>,
  )

  return (
    <>
      <HeaderDivider width={ 'auto' }/>
      <Routes>
        <Route index element={ <ResourcesDashboard/> }/>
        { ResourcesRoutes }
      </Routes>
      <Copyrights/>
    </>
  )
}
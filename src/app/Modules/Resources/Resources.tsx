import React                  from 'react'
import { Route, Routes }      from 'react-router-dom'
import { ResourcesDashboard } from './ResourcesDashboard'
import { articles }           from './ResourcesData'
import { HeaderDivider }      from '../../../shared/styles'
import { Copyrights }         from '../../../shared/strings/strings'


const ResourcesRoutes = articles.map((item, index) => <Route path={ item.link }
                                                             element={ item.component(item) }
                                                             key={ index }/>,
)


export const Resources = () => {

  return (
    <>
      <HeaderDivider/>
      <Routes>
        <Route index element={ <ResourcesDashboard/> }/>
        { ResourcesRoutes }
      </Routes>
      <Copyrights/>
    </>
  )
}
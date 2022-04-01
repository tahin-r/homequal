import React             from 'react';
import { Route, Routes } from 'react-router-dom';
import { Dashboard }     from '../app/Modules/Dashboard/Dashboard';
import { Journey }       from '../app/Modules/Journey/Journey';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={ <Dashboard/> }
      />
      <Route
        path="Journey/*"
        element={ <Journey/> }
      />
    </Routes>
  )
}





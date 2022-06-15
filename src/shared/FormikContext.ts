import React from 'react'

interface IFormikContext {
    currentFormikValues?: any,
    saveCurrentFormikValues?: any
}

export const FormikContext = React.createContext<IFormikContext>({})

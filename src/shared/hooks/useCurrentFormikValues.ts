import { useContext } from 'react'
import { FormikContext } from '../FormikContext'

export default () => {
  return useContext(FormikContext)
}

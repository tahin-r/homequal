import styled   from 'styled-components'
import { Grid } from '@mui/material'
import React    from 'react'

export const ContentWrapper = styled(({ ...props }) => <Grid { ...props }/>)`
    background-color:  ${ props => props.theme.colors.lightGrey };
`
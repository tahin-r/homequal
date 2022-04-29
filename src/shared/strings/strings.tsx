import { FC }         from 'react'
import { Typography } from '@mui/material'
import { Variant }    from '@mui/material/styles/createTypography'

interface IHomeQualText {
  variant: Variant,
  fontWeight?: string,
}

export const HomeQualTextTemplate: FC<IHomeQualText> = ({ variant, fontWeight }) => {
  return (
    <>
      <Typography variant={ variant } fontWeight={ fontWeight ?? 'initial' } component="span">
        Home
      </Typography>
      <Typography variant={ variant } fontWeight={ fontWeight ?? 'initial' } color={ 'primary' } component="span">
        Qual
      </Typography>
    </>


  )
}
export const Copyrights: FC = () => {
  return <Typography variant="h6" sx={ {
    fontStyle: 'italic', padding: '5px 20px', textAlign: 'center',
    fontSize : { xs: '1rem', md: '1.1rem', lg: '1.2rem' },
  } }>
    Copyright 2022 HomeQual. All Rights Reserved
  </Typography>
}
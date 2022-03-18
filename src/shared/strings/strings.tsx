import { FC }         from 'react';
import { Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import styled from 'styled-components';

const ColoredText = styled(({...props}) => <Typography {...props} />)`
  color: #de1469;
`
interface IHomeQualText {
  variant: Variant
}

export const HomeQualTextTemplate: FC<IHomeQualText> = ({ variant }) => {
  return (
    <>
      <Typography
        variant={ variant as Variant }
        component='span'
      >Home
      </Typography>
      <ColoredText
        variant={ variant as Variant }
        component='span'
      >Qual
      </ColoredText>
    </>


  )
}
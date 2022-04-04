import { Grid, Typography }     from '@mui/material';
import { FC }                   from 'react';
import styled                   from 'styled-components';
import { HomeQualTextTemplate } from '../../../../shared/strings/strings';


export const TextContainer = styled(Grid)`
  color      : ${ (props: any) => props.color ? props.color : 'black' };
  padding    : 40px;
  text-align : center;
  width      : 100%
`
export const GreyTextContainer = styled(TextContainer)`
  padding          : 30px;
  color            : ${ (props: any) => props.color ? props.color : 'white' };
  background-color : ${ props => props.theme.colors.darkGrey };
  text-align       : initial;
`
export const DetermineYouHome: FC = () => {

  return (
    <>
      <TextContainer>
        <Typography variant="h6">
          Determine your home buying readiness and find out what you can afford in less than two minutes.
        </Typography>
      </TextContainer>
      <GreyTextContainer>
        <Typography variant="h6">
          <HomeQualTextTemplate variant={ 'h6' }/> homeowners realize an average savings of $2,200 per year
                                                   in lower payments!
        </Typography>
      </GreyTextContainer>
    </>
  )
}


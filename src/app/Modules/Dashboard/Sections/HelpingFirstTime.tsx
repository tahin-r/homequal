import { Button, Typography } from '@mui/material';
import { FC }                 from 'react';
import styled                 from 'styled-components';
import contentImage           from '../../../../images/dashboard/homePageMainImage.jpeg';


export const Content = styled.div`
  position        : relative;
  display         : flex;
  justify-content : space-between;
  flex-direction  : column;
  align-items     : center;
  height          : 100vh;
  box-sizing      : border-box;
  background      : url(${ contentImage }) center 100%;
  background-size : cover;
  padding         : 4vh 0 14vh 0;
`;
const TextContainer = styled.div`
  margin-top       : 10vh;
  position         : relative;
  width            : 100%;
  background-color : rgba(141, 135, 135, 0.68);
  color            : white;
  padding          : 7% 20% 7% 7%;
  box-sizing       : border-box;
  text-align       : center;
  font-weight      : 400;

  p {
    font-size   : 30px;
    line-height : 1.2em;
    font-weight : 400;

  }
`;
const StartButton = styled(({ ...props }) => <Button { ...props } variant="contained"/>)`
  display          : block;
  width            : 80%;
  background-color : #e10c9d;
  max-width        : 500px;

  &:focus,
  &:hover,
  &:active {
    background-color : #e10c9d;
  }

  p {
    font-size      : 20px;
    text-transform : capitalize;
  }
`;

export const HelpingFirstTime: FC = () => {

  return (
    <Content>
      <TextContainer>
        <Typography sx={ { textAlign: 'left' } }>
          Helping first-time homebuyers obtain the dream of ownership
        </Typography>
      </TextContainer>

      <StartButton sx={ { borderRadius: '30px' } }>
        <Typography>
          Start Your Journey Now
        </Typography>
      </StartButton>
    </Content>
  )
}


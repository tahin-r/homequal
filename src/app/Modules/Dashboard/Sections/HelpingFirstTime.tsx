import { Typography }  from '@mui/material';
import { FC }          from 'react';
import styled          from 'styled-components';
import contentImage    from '../../../../assets/images/dashboard/homePageMainImage.jpeg';
import { useNavigate } from 'react-router-dom';
import { QualButton }  from '../../../../shared/styles/strings';


export const Content = styled.div`
  position        : relative;
  display         : flex;
  justify-content : space-between;
  flex-direction  : column;
  align-items     : center;
  height          : 100vh;
  box-sizing      : border-box;
  background      : url(${ contentImage })center no-repeat border-box;
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
`

export const HelpingFirstTime: FC = () => {
  const navigate = useNavigate();

  return (
    <Content>
      <TextContainer>
        <Typography sx={ { textAlign: 'left' } }>
          Helping first-time homebuyers obtain the dream of ownership
        </Typography>
      </TextContainer>

      <QualButton
        sx={ { borderRadius: '30px' } }
        onClick={ () => navigate('Journey') }
      >
        <Typography>
          Start Your Journey Now
        </Typography>
      </QualButton>
    </Content>
  )
}


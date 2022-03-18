import React                  from 'react';
import styled                 from 'styled-components';
import { CenteredTypography } from '../../../../shared/styles/strings';
import { ContentWrapper }     from '../../../../shared/styles/wrappers';

const Bubble = styled(({ ...props }) => <div { ...props } />)`
  border-radius    : 30px;
  font-size        : 16px;
  border           : ${ props => props.side === 'left' ? null : '2px solid #c70e72' };
  background-color : ${ props => props.side === 'left' ? '#dcdbdb' : 'white' };
  align-self       : ${ props => props.side === 'left' ? 'flex-start' : 'flex-end' };;
  padding          : 20px;
  margin-bottom    : 15px;
  max-width        : 80vw;
  width            : auto;
  box-sizing       : border-box;
`;

export const HaveAQuestions = () => {

  return (
    <ContentWrapper
      container
      direction="column"
      justifyContent="center"
    >
      <CenteredTypography variant={ 'h4' }>
        Have a questions, need a little assistence?
      </CenteredTypography>
      <CenteredTypography variant={ 'h5' }>
        Our interactive bots is always at your fingertips!
      </CenteredTypography>
      <Bubble side={ 'right' }>
        Hi, how can I Help.
      </Bubble>
      <Bubble side={ 'left' }>
        Do I need a 20% down payment?
      </Bubble>
      <Bubble side={ 'right' }>
        No, you can put as little as 3% down and in some cases no money down. We can also show you ways to save
        on closing costs.
      </Bubble>
    </ContentWrapper>
  )
}


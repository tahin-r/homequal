import { Grid, }                        from '@mui/material';
import styled                           from 'styled-components';
import { HomeQualTextTemplate }         from '../../../../shared/strings/strings';
import { CenteredTypography }           from '../../../../shared/styles/strings';
import brant                            from '../../../../images/faces/Brant.png'
import valeria                          from '../../../../images/faces/Valeria.png'
import stew                             from '../../../../images/faces/Stew.png'
import { NewHomeItem }                  from './NewHomeComponents/NewHomeItem';
import { RefObject, useEffect, useRef } from 'react';


const ContentTypography = styled(CenteredTypography)`
  padding : 10vw;
`
const FeedbacksHolder = styled(({ ...props }) => <Grid { ...props }
                                                       ref={ props.container }
                                                       container
                                                       wrap="nowrap"
                                                       direction="row"
                                                       spacing={ 4 }
                                                       justifyContent="space-between"
                                                       alignSelf="center"
/>)`
  position   : relative;
  overflow-x : scroll;
  padding    : 40px 4vw 40px 0;
  width      : 100vw;


  & > div {
    transition : ease-in 0.2s;
  }

  & > div:hover {
    transform  : scale(1.1);
    transition : ease-in 0.5s;
  }

  &::-webkit-scrollbar {
    display : initial;
  }
`

interface IUsersFeedback {
  name: string,
  nickName: string
  text: string
  imageUrl: string
}

const usersFeedback: Array<IUsersFeedback> = [
  {
    name    : 'Brant',
    nickName: 'goforbrent',
    text    : 'Was the simplest and easiest insurance I`ve ever purchased, "old" insurance companies need to step into the current century. ',
    imageUrl: stew
  }, {
    name    : 'Brant',
    nickName: 'goforbrent',
    text    : 'Was the simplest and easiest insurance I`ve ever purchased, "old" insurance companies need to step into the current century!!!👏👏👏 ',
    imageUrl: brant
  }, {
    name    : 'Valeria Deiago',
    nickName: 'ValeriaD90',
    text    : 'Why does`t everyone use insurance? I just switched by $110 #Winning',
    imageUrl: valeria
  }
]

export const NewHomeOwnersLove = () => {
  const container = useRef() as RefObject<any>
  useEffect(() => {
    if (container?.current) {
      container?.current.scrollTo((container?.current.scrollWidth - container.current.clientWidth) / 2, 0)
    }
  }, []);

  return (
    <Grid
      container
      justifyContent="center"
      direction="column"
      overflow="hidden"
      alignItems="center"
    >
      <Grid
        item
        xs={ 12 }
        sx={ { marginBottom: '10vh' } }
      >
        <ContentTypography variant="h4">
          New Homeowners Love What <HomeQualTextTemplate variant="h4"/> Has Done for Them
        </ContentTypography>
      </Grid>

      <FeedbacksHolder
        container={ container }
      >
        { usersFeedback.map((item, i) => (
          <NewHomeItem
            key={ i }
            imageUrl={ item.imageUrl }
            name={ item.name }
            nickName={ item.nickName }
            text={ item.text }
          />
        )) }
      </FeedbacksHolder>
    </Grid>
  )
}



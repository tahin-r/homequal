import { Grid }                                    from '@mui/material'
import styled                                      from 'styled-components'
import { HomeQualTextTemplate }                    from '../../../../shared/strings/strings'
import { CenteredTypography }                      from '../../../../shared/styles'
import { NewHomeItem }                             from './NewHomeComponents/NewHomeItem'
import { useEffect, useRef }                       from 'react'
import { Bradley, Earl, Eric, Jay, Jerry, Joshua } from '../../../../assets/images/faces'
import 'react-alice-carousel/lib/alice-carousel.css'
import Marquee from 'react-marquee-slider'

const ContentTypography = styled(CenteredTypography)`
  padding : 4vw 10vw;
`

interface IUsersFeedback {
  name: string;
  nickName: string;
  text: string;
  imageUrl: string;
}

const usersFeedback: Array<IUsersFeedback> = [
  {
    name    : 'Eric & Yen',
    nickName: '',
    text    : 'Great company! Highly recommended for first time home buyers. Extremely helpful in navigating through the complex process of purchasing a home.',
    imageUrl: Eric,
  },
  {
    name    : 'Bradley & Lee',
    nickName: '',
    text    : 'Great place to start if this is your first home. They have walked us through every step and were there whenever we had questions no matter what time it was.',
    imageUrl: Bradley,
  },
  {
    name    : 'Jerry',
    nickName: '',
    text    : 'These guys made home buying very easy! thanks!',
    imageUrl: Jerry,
  },
  {
    name    : 'Earl',
    nickName: '',
    text    : 'Awesome people with awesome attitude! Awesome experience! The best work to use is ineffable!!',
    imageUrl: Earl,
  },
  {
    name    : 'Jay',
    nickName: '',
    text    : 'As a first time home buyer, I was amazed by how easy and quick the home buying process was. I would recommend it to anyone who is interested in buying their first home and don’t know where to start.',
    imageUrl: Jay,
  },
  {
    name    : 'Joshua',
    nickName: '',
    text    : 'First time home buying made easy. Great people all the way through the process. I would consider them friend and this point. Really took the uncertainty our of my home buying experience.',
    imageUrl: Joshua,
  },
]

export const NewHomeOwnersLove = () => {
  const scrollref = useRef<HTMLElement>(null)
  useEffect(() => {
    if (scrollref?.current) {
      scrollref?.current.scrollTo(
        (scrollref?.current.scrollWidth / 12 * 5 - window.innerWidth / 2),
        0,
      )
    }
  }, [])

  return (
    <Grid container justifyContent="center" direction="column" overflow="hidden" alignItems="center">
      <Grid item xs={ 12 }>
        <ContentTypography variant="h4">
          New Homeowners Love What <HomeQualTextTemplate variant="h4"/> Has
          Done for Them
        </ContentTypography>
      </Grid>
      <Grid container justifyContent="center">
        <Marquee
            key={0}
            velocity={17}
            direction='rtl'
            scatterRandomly={false}
            resetAfterTries={100}
            onInit={() => {}}
            onFinish={() => {}}
        >
          {
            usersFeedback.map((item, i) => (
              <NewHomeItem key={ i }
                           imageUrl={ item.imageUrl }
                           name={ item.name }
                           nickName={ item.nickName }
                           text={ item.text }/>
            ))
          }
        </Marquee>
      </Grid>
    </Grid>
  )
}

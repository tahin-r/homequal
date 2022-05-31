import { Grid }                                    from '@mui/material'
import styled                                      from 'styled-components'
import { HomeQualTextTemplate }                    from '../../../../shared/strings/strings'
import { CenteredTypography }                      from '../../../../shared/styles'
import { NewHomeItem }                             from './NewHomeComponents/NewHomeItem'
import { useEffect, useRef }                       from 'react'
import { Bradley, Earl, Eric, Jay, Jerry, Joshua } from '../../../../assets/images/faces'
import 'react-alice-carousel/lib/alice-carousel.css'
import AliceCarousel from 'react-alice-carousel'

const ContentTypography = styled(CenteredTypography)`
  padding : 4vw 10vw;
`
const FeedbacksHolder = styled(({ ...props }) => (
  <Grid{ ...props } ref={ props.scrollref } container wrap="nowrap"/>))`
  overflow-x : scroll;
  padding    : 20px 0 40px 0;

  & > div {
    transition : ease-in 0.2s;
  }

  & > div:hover {
    transform  : scale(1.1);
    transition : ease-in 0.5s;
  }

  @media screen and (max-width : 1000px) {
    &::-webkit-scrollbar {
      display : initial;
    }

  }
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const items: any = []
  usersFeedback.map((item, i) => (
      items.push(
        <NewHomeItem key={ i }
                     imageUrl={ item.imageUrl }
                     name={ item.name }
                     nickName={ item.nickName }
                     text={ item.text }/>
      )
  ))

  const responsive = {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1024: {
      items: 3
    },
  }

  return (
    <Grid container justifyContent="center" direction="column" overflow="hidden" alignItems="center">
      <Grid item xs={ 12 }>
        <ContentTypography variant="h4">
          New Homeowners Love What <HomeQualTextTemplate variant="h4"/> Has
          Done for Them
        </ContentTypography>
      </Grid>
      <Grid container justifyContent="center">
          <AliceCarousel
              mouseTracking
              items={items}
              controlsStrategy="alternate"
              autoPlay={true}
              autoPlayInterval={3000}
              responsive={responsive}
              infinite={true}
              disableButtonsControls={true}
          />
      </Grid>
    </Grid>
  )
}

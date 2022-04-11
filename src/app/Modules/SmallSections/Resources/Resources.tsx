import React                       from 'react'
import {
  buyFirstHomeTips, buyingProcess, closingDay, costOfWaiting, disclosure, divorce, earnestMoney, finalWalkThrough,
  findingTheRightMortgage, findYourPerfectHome, gettingCredit, gettingLoan, homeMaintenance, howMuchBorrow, makeOffer,
  movingDay, onlineEstimators,
}                                  from '../../../../assets/images/articles'
import { Grid, Paper, Typography } from '@mui/material'
import styled                      from 'styled-components'

const ItemPaper = styled(({ ...props }) => <Paper { ...props }  />)`
  position   : relative;
  box-sizing : border-box;
  border     : ${ (props) => `2px solid ${ props.theme.colors.primary }` };
  transition : 0.5s;

  &:active, &:hover {
    transition : 0.5s;
    transform  : scale(1.1);
  }

  @media screen and (min-width : 0px) {
    min-width  : 250px;
    min-height : 200px;
    margin     : 10px;
  }
  @media screen and (min-width : 900px)  {
    min-width  : 350px;
    min-height : 300px;
    width      : 35vw;
    margin     : 20px;
  }
  @media screen and (min-width : 1280px) {
    min-width : 550px;
  }
`
export const ImageHolder = styled(({ ...props }) => <div { ...props }/>)`
  position        : relative;
  box-sizing      : border-box;
  min-height      : 150px;
  width           : 100%;
  background      : ${ (props) => `url(${ props.image }) center center no-repeat` };
  background-size : cover;
`
const TextContainer = styled(Grid)`
  overflow           : hidden;
  display            : -webkit-box;
  -webkit-line-clamp : 3;
  -webkit-box-orient : vertical;
  word-wrap          : break-word;

`

export const Resources = () => {

  const articles = [
    {
      title: 'Buying Your First Home Tips',
      text : '',
      image: buyFirstHomeTips,
    }, {
      title: 'Closing Day',
      text : '',
      image: closingDay,
    }, {
      title: 'Cost of Waiting',
      text : '',
      image: costOfWaiting,
    }, {
      title: 'Divorce and Your Credit',
      text : '',
      image: divorce,
    }, {
      title: 'Final Walk Through',
      text : '',
      image: finalWalkThrough,
    }, {
      title: 'Find Your Perfect Home',
      text : '',
      image: findYourPerfectHome,
    }, {
      title: 'Finding the Right Mortgage',
      text : '',
      image: findingTheRightMortgage,
    }, {
      title: 'Getting a Loan with Student Loan Debt',
      text : '',
      image: gettingLoan,
    }, {
      title: 'Getting Your Credit Score in Shape',
      text : '',
      image: gettingCredit,
    }, {
      title: 'Home Maintenance for the First Timer',
      text : '',
      image: homeMaintenance,
    }, {
      title: 'How Much Can I Borrow',
      text : '',
      image: howMuchBorrow,
    }, {
      title: 'I’m Ready to Make an Offer',
      text : '',
      image: makeOffer,
    }, {
      title: 'Online Estimators',
      text : '',
      image: onlineEstimators,
    }, {
      title: 'Option Fee and Earnest Money',
      text : '',
      image: earnestMoney,
    }, {
      title: 'Preparing for Moving Day',
      text : '',
      image: movingDay,
    }, {
      title: 'Sellers Disclosure',
      text : '',
      image: disclosure,
    }, {
      title: 'The Home Buying Process',
      text : '',
      image: buyingProcess,
    },
  ]

  return (
    <Grid container justifyContent="center">
      <Grid container justifyContent="center" sx={ {
        width: {
          xs: '70vw',
          md: '90vw',
          lg: '1800px',
        },
      } }>
        { articles.map((item, index) => (
          <ItemPaper key={ index } elevation={ 12 }>
            <ImageHolder image={ item.image }/>
            <Grid p={ 3 } container position="relative">

              <Typography variant="h5" sx={ { fontSize: '18px', textAlign: 'center' } }>
                { item.title }
              </Typography>
              <TextContainer>
                <Typography variant="h6" lineHeight={ 1.1 } mt={ 1 }>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi error id magnam modi qui
                  quisquam, quos rem vel voluptate! Aliquam asperiores at commodi doloremque ex ipsa ipsam ipsum iusto
                  molestiae mollitia nobis, omnis quibusdam quis quod sequi soluta sunt suscipit temporibus tenetur
                  velit! Ab aperiam maiores natus odio voluptatem?

                </Typography>
              </TextContainer>


            </Grid>
          </ItemPaper>
        )) }
      </Grid>
    </Grid>
  )
}
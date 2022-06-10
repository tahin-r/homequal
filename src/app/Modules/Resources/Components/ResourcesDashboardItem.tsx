import React, { FC } from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const ItemPaper = styled(({ ...props }) => <Paper { ...props } />)`
  border     : ${(props) => `2px solid ${props.theme.colors.primary}`};
  transition : 0.5s;

  &:active, &:hover {
    transition : 0.5s;
    transform  : scale(1.1);
  }

  @media screen and (min-width : 0px) {
    width  : 100%;
    margin : 10px 30px;
  }
  @media screen and (min-width : 600px) {
    width  : 45%;
    margin : 20px 10px;
    @media screen and (min-width : 960px) {
      width  : 45%;
      margin : 20px 15px;
`
const TextContainer = styled(Grid)`
  overflow           : hidden;
  display            : -webkit-box;
  -webkit-line-clamp : 4;
  -webkit-box-orient : vertical;
  word-wrap          : break-word;
`
const ImageHolder = styled(({ ...props }) => <div { ...props }/>)`
  position        : relative;
  box-sizing      : border-box;
  min-height      : 150px;
  width           : 100%;
  background      : ${(props) => `url(${props.image}) center center no-repeat`};
  background-size : cover;
`

interface IResourcesDashboardItem {
  image: string
  link: string
  title: string
  text: string
}

export const ResourcesDashboardItem: FC<IResourcesDashboardItem> = ({ image, link, title, text }) => {
  const navigate = useNavigate()

  return (
    <>
      <ItemPaper elevation={ 12 } onClick={ () => navigate(link) } position={ 'relative' }>
        <ImageHolder image={ image }/>
        <Grid p={ 3 } height={ 'max-content' }>
          <TextContainer>
            <Typography variant="h5" sx={ { textAlign: 'center' } }>
              { title }
            </Typography>
            <Typography variant="h6" lineHeight={ 1.3 } mt={ 2 }>
              { text.length !== 0
                ? text
                : `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi 
                error id magnam modi quiquisquam, quos rem vel voluptate! Aliquam asperiores at commodi doloremque ex 
                ipsa ipsam ipsum iustomolestiae mollitia nobis, omnis quibusdam quis quod sequi soluta sunt suscipit 
                temporibus teneturvelit! Ab aperiam maiores natus odio voluptatem? ` }
            </Typography>
          </TextContainer>
        </Grid>
      </ItemPaper>
    </>
  )
}

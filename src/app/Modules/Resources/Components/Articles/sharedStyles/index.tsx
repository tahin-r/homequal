import { Grid, Typography }                                                                   from '@mui/material'
import styled                                                                                 from 'styled-components'
import React, { FC, MutableRefObject, ReactElement, useContext, useEffect, useRef, useState } from 'react'
import {
  NavBarContext
}                                                                                             from '../../ArticleWrapper'
import doneArrow
                                                                                              from '../../../../../../assets/images/doneArrow.svg'


export const SimpleTypography = styled(({ ...props }) => <Typography variant="h6" { ...props } />)`
  margin      : 1rem 0;
  white-space : pre-wrap;
  text-indent : 1rem;
  text-align  : justify;
`
export const TitleText = styled(({ ...props }) => <Typography ref={ props.reflink } variant="h6"
                                                              fontWeight='bold' { ...props }/>)`
  scroll-margin-block-start : 80px;
  margin                    : 1em 0;
  text-align                : center;
`
export const TitleTypography: FC<any> = (props) => {
  const { addNavBarItem } = useContext<any>(NavBarContext)
  const currentRef = useRef<HTMLElement>()
  const currentElement = useGetElement(currentRef)
  const text = (currentElement && currentElement.innerText) || ''
  const onScroll = () => currentElement && currentElement.scrollIntoView({ block: "start", behavior: "smooth" })
  useEffect(() => {
    if (currentElement) {
      addNavBarItem(text, onScroll)
    }
  }, [currentElement])

  return (
    <TitleText reflink={ currentRef } { ...props }>
      { props.children }
    </TitleText>
  )
}

function useGetElement(ref: MutableRefObject<HTMLElement | undefined>) {
  const [element, setElement] = useState<HTMLElement>()

  useEffect(() => {
    ref.current && setElement(ref.current)
  }, [element])
  return element
}

export const CreateDefinition: (DefinitionName: string, SDefinition: string) => ReactElement = (DefinitionName, Definition) => {
  return (
    <SimpleTypography>
      <Typography variant={ 'h6' } component={ 'span' } fontWeight={ 'bold' } mr={ 1 }>
        { DefinitionName }
      </Typography>
      { Definition }
    </SimpleTypography>
  )
}
export const ListItem: FC = (props) => {

  return (
    <SimpleTypography>
      <Grid alignItems="flex-start" container wrap="nowrap">
        <img src={ doneArrow } alt="arrow" width="50px" height="50px"/>
        <Typography variant="h6">{ props.children }</Typography>
      </Grid>
    </SimpleTypography>
  )
}



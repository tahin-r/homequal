import React, { FC, memo } from 'react'
import { basicData } from '../shared'
import { Wrapper } from '../../Wrapper'
import {
  CenteredTypography
} from '../../../../../../shared/styles'
import { Button } from '@mui/material'
import { basicTypes } from '../../../questions'
import makeStyles from '@material-ui/core/styles/makeStyles'
import styled from 'styled-components'
import { Joshua } from '../../../../../../assets/images/faces'

interface IProps extends basicTypes, basicData {
}

const useStyles = makeStyles({
  textOrEmailButton: {
    marginBottom: '15px',
    borderColor: 'rgb(237, 31, 138)',
    border: '1px solid',
    minWidth: '300px',
    width: '50vw',
    maxWidth: '600px',
    padding: '15px 10px',
    borderRadius: '30px'
  },
  imageWrapper: {
    display: 'flex',
    justifyContent: 'center'
  }
})

const ImageHolder = styled(({ ...props }) => <div { ...props } />)`
  border-radius   : 50%;
  min-width       : 100px;
  min-height      : 100px;
  max-width       : 150px;
  max-height      : 150px;
  width           : 10vw;
  height          : 10vw;
  background      : url(${props => props.userimage}) 100% 100% no-repeat;
  background-size : contain;
`

export const CreateEndRefinanceQuestion: FC<IProps> = memo(({
  wrapperProps
}) => {
  const status = -1
  const classes = useStyles()

  return (
        <Wrapper { ...wrapperProps } status={ status }>

            <CenteredTypography
                variant="h6"
                className={classes.imageWrapper}
            >
                <ImageHolder userimage={ Joshua }/>
            </CenteredTypography>

            <CenteredTypography variant="h6">
                Hi { wrapperProps.formik.values.first_name }, I'm Joshua Anderson
                and I'd be glad to help.
            </CenteredTypography>

            <CenteredTypography variant="h6">
                How would you like me to contact you?
            </CenteredTypography>

            <CenteredTypography variant="h5">
                <Button
                    type="submit"
                    className={classes.textOrEmailButton}
                    size="large"
                >
                    Call Me
                </Button>
            </CenteredTypography>

            <CenteredTypography variant="h5">
                <Button
                    type="submit"
                    className={classes.textOrEmailButton}
                    size="large"
                >
                    Email Me
                </Button>
            </CenteredTypography>

            <CenteredTypography variant="h5">
                <Button
                    type="submit"
                    className={classes.textOrEmailButton}
                    size="large"
                >
                    Text Me
                </Button>
            </CenteredTypography>

        </Wrapper>
  )
})

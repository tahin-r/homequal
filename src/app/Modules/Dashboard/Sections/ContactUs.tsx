import { Grid, styled, Typography }                             from '@mui/material'
import { CenteredTypography, ContentWrapper, ItalicTypography } from '../../../../shared/styles'
import HQlogo
                                                                from './../../../../assets/images/HomeQualIcon/hqlogolight.png'
import { EmailInfo }                                            from './ContactUsComponents/EmailInfo'
import { Links }                                                from './ContactUsComponents/Links'
import { SocialMedia }                                          from './ContactUsComponents/SocialMedia'
import { Copyrights }                                           from '../../../../shared/strings/strings'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
    contactUsFontSize: {
        fontSize: '1.3rem'
    },
    contactUsTitleFontSize: {
        fontSize: '1.6rem'
    }
})

export const ContactUs = () => {
  const Img = styled('img')({})
  const classes = useStyles()

  return (
    <ContentWrapper>
      <Grid py={ 3 } container justifyContent="center">
        <Img src={ HQlogo } width={ '200px' }/>
      </Grid>

      <ItalicTypography className={classes.contactUsFontSize}>
        Educating and empowering first-time home buyers
      </ItalicTypography>

      <Typography className={classes.contactUsTitleFontSize} variant="h5" textAlign="center" mb={ 1 } sx={ { fontWeight: 'bold' } }>
        Contact Us
      </Typography>

      <CenteredTypography className={classes.contactUsFontSize}>214-692-5300</CenteredTypography>

      <EmailInfo/>

      <Grid container justifyContent="center" sx={ { padding: '0 20px' } }>
        <Links/>
        <Grid container justifyContent="center" my={ 4 }>
          <SocialMedia/>
        </Grid>
      </Grid>

      <Copyrights/>

    </ContentWrapper>
  )
}

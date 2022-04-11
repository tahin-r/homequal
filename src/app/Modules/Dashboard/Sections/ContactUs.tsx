import { Grid, styled, Typography }             from "@mui/material"
import { CenteredTypography, ItalicTypography } from "../../../../shared/styles/strings"
import HQlogo                                   from './../../../../assets/images/HomeQualIcon/hqlogolight.png'
import { EmailInfo }                            from "./ContactUsComponents/EmailInfo"
import { Links }                                from "./ContactUsComponents/Links"
import { SocialMedia }                          from "./ContactUsComponents/SocialMedia"
import { ContentWrapper }                       from "../../../../shared/styles/wrappers"

export const ContactUs = () => {
  const Img = styled('img')({})
  return (
    <ContentWrapper>
      <Grid py={3} container justifyContent='center'>
        <Img src={ HQlogo } width={'300px'}/>
      </Grid>

      <ItalicTypography>
        Educating and empowering first-time home buyers
      </ItalicTypography>

      <Typography variant="h5" textAlign="center" mb={ 1 } sx={ { fontWeight: "bold" } }>
        Contact Us
      </Typography>

      <CenteredTypography>214-692-5300</CenteredTypography>

      <EmailInfo/>

      <Grid container justifyContent="center" sx={ { padding: "0 20px" } }>
        <Links/>

        <Grid container justifyContent="center">
          <SocialMedia/>
        </Grid>
      </Grid>

      <Typography variant="h6" sx={ { fontStyle: "italic", padding: "5px 20px", textAlign: "center" } }>
        Copyright 2022 HomeQual. All Rights Reserved
      </Typography>
    </ContentWrapper>
)
}

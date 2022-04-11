import { Grid, Typography }                     from "@mui/material"
import { CenteredTypography, ItalicTypography } from "../../../../shared/styles/strings"
import { HomeQualTextTemplate }                 from "../../../../shared/strings/strings"
import { EmailInfo }                            from "./ContactUsComponents/EmailInfo"
import { Links }                                from "./ContactUsComponents/Links"
import { SocialMedia }                          from "./ContactUsComponents/SocialMedia"
import { ContentWrapper }                       from "../../../../shared/styles/wrappers"

export const ContactUs = () => {
  return (
    <ContentWrapper>
      <CenteredTypography>
        <HomeQualTextTemplate variant={ "h4" }/>
      </CenteredTypography>

      <ItalicTypography>
        Educating and empowering first-time home buyers
      </ItalicTypography>

      <Typography variant='h5' textAlign='center' mb={1}  sx={ { fontWeight: "bold" } }>
        Contact Us
      </Typography>

      <CenteredTypography>214-692-5300</CenteredTypography>

      <EmailInfo/>

      <Grid container spacing={ 2 } justifyContent="center" sx={ { padding: "20px 20px" } }>
        <Links/>

        <Grid container  justifyContent="center">
          <SocialMedia/>
        </Grid>
      </Grid>

      <Typography variant='h6' sx={ { fontStyle: "italic", padding: "5px 20px", textAlign: "center" } }>
        Copyright 2022 HomeQual. All Rights Reserved
      </Typography>
    </ContentWrapper>
  )
}

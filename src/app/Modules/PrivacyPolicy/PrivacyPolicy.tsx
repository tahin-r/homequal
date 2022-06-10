import React, { FC } from 'react'
import { Typography } from '@mui/material'
import { SimpleTypography, TitleTypography } from './sharedStyles'
import {
  Container,
  List,
  ListItem,
  ListItemIcon
} from '@material-ui/core'
import CircleIcon from '@mui/icons-material/Circle'
import { HeaderDivider } from '../../../shared/styles'
import styled from 'styled-components'
import { privacyPolicy } from './images'
import { ContactUs } from '../Dashboard/Sections/ContactUs'

interface IPrivacyPolicy {
    image?: string
}

const ImageHolder = styled(({ ...props }) => <div { ...props }/>)`
  position        : relative;
  box-sizing      : border-box;
  min-height      : 350px;
  width           : 100%;
  background      : ${(props) => `url(${props.image}) center center no-repeat`};
  background-size : cover;
  @media screen and (max-width : 500px) {
    min-height: 130px;
    background-size: contain;
  }
`

export const PrivacyPolicy: FC<IPrivacyPolicy> = () => {
  return (
        <>
            <HeaderDivider/>
            <ImageHolder image={ privacyPolicy }/>
            <Container fixed>
                <Typography variant="h4" color={ 'primary' } textAlign={ 'center' } my={ 2 }>
                    Privacy Policy
                </Typography>
                <SimpleTypography>
                    This Privacy Policy describes how HomeQual collects and uses information
                    from users of the HomeQual
                    website at https://www.homequal.com (along with all subdomains),
                    collectively, the “Site”.
                </SimpleTypography>
                <SimpleTypography>
                    HomeQual never knowingly collects or maintains information on
                    the Site from anyone
                    under 18 years old,
                    and no part of our site is directed at or structured to attract
                    anyone under 18 years old.
                    Visitors younger than 18 years of age may NOT use the Site and
                    must LEAVE immediately.
                </SimpleTypography>

                <TitleTypography >
                    How we Collect and Use Non-Personally Identifying Information
                </TitleTypography>
                <SimpleTypography>
                    As is true of most Web sites, we gather Web server log file information
                    automatically, including IP address,
                    browser type, referring/exit pages, and operating system. We use this
                    information to administer our Site,
                    understand how visitors navigate through our Site and to enhance the
                    customer experience while using our Site.
                </SimpleTypography>

                <TitleTypography >
                    Information We Share
                </TitleTypography>
                <SimpleTypography>
                    We may share information submitted through our website forms to affiliates
                    and to 3rd party partners when giving permission.
                </SimpleTypography>

                <TitleTypography >
                    Cookies and Web Beacons
                </TitleTypography>
                <SimpleTypography>
                    Cookies and web beacons are very small text files that are stored on your
                    computer when you visit certain web pages.
                    HomeQual.com collects information through cookies and web beacons about your
                    web browsings activities such as the address
                    of the page you are visiting, the address of the referrer page you previously
                    visited, the time you are viewing the page, your
                    browsing environment and your display settings.
                    We use cookies and web beacons on our Site to:
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <CircleIcon color="primary" />
                            </ListItemIcon>
                            Understand traffic patterns and the number of visitors to the Site;
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CircleIcon color="primary" />
                            </ListItemIcon>
                            Understand how you use and interact with the Site;
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CircleIcon color="primary" />
                            </ListItemIcon>
                            Improve the homequal.com products and services;
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CircleIcon color="primary" />
                            </ListItemIcon>
                            Optimize your experience on our Site;
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CircleIcon color="primary" />
                            </ListItemIcon>
                            Provide you relevant advertising and content and properly manage our Site.
                        </ListItem>
                    </List>
                </SimpleTypography>
                <SimpleTypography>
                    Please note that some cookies may be placed by a third party service provider
                    who performs some of these functions for us.
                    Other companies’ use of their cookies is subject to their own privacy policies,
                    not this one.
                    If you are concerned about cookies, most browsers permit individuals to decline
                    cookies.
                    A user refusing cookies can still fully navigate our Site.
                </SimpleTypography>

                <TitleTypography >
                    How We Use Information
                </TitleTypography>
                <SimpleTypography>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <CircleIcon color="primary" />
                            </ListItemIcon>
                            Deliver the products and services you requested;
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CircleIcon color="primary" />
                            </ListItemIcon>
                            Manage your customer relationship and provide you with customer support;
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CircleIcon color="primary" />
                            </ListItemIcon>
                            Research and analyze your use of, or interest in, our products,
                            services and content and the products,
                            services and content offered by others;
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CircleIcon color="primary" />
                            </ListItemIcon>
                            Communicate with you via e-mail, telephone, postal mail and/or
                            mobile devices about products
                            or services that may be of interest to you;
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CircleIcon color="primary" />
                            </ListItemIcon>
                            Develop and display content and services tailored to your
                            interests on our website and other websites;
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CircleIcon color="primary" />
                            </ListItemIcon>
                            Develop and deliver targeted advertisements;
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CircleIcon color="primary" />
                            </ListItemIcon>
                            Measure the overall effectiveness of our online advertising,
                            content, programming and other activities;
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CircleIcon color="primary" />
                            </ListItemIcon>
                            Manage our business, and Perform functions as described
                            to you at the time of collection.
                        </ListItem>
                    </List>
                </SimpleTypography>

                <TitleTypography >
                    Financial Information
                </TitleTypography>
                <SimpleTypography>
                    Depending on the service requested, we may use financial information to:
                    match you with real estate agents, real estate brokers,
                    or lenders, provide you with lenders’ conditional loan offers, as well as
                    to verify your identity, protect against or identify
                    possible fraudulent transactions, or otherwise as needed to manage our business.
                </SimpleTypography>

                <TitleTypography >
                    Links to Other Web Sites
                </TitleTypography>
                <SimpleTypography>
                    This Site may contain links to other sites owned by third parties. Your use
                    of each of those sites is at your own risk and is
                    subject to the terms of those sites. HomeQual assumes no responsibility
                    for the content of or services offered by linked third-party
                    sites, and makes no representations regarding the accuracy of materials
                    on third-party Web sites. Statements made on third-party web
                    sites linked to or from this Site reflect only the views of their authors
                    and not of HomeQual. HomeQual’s inclusion on the Site of
                    any third-party content or a link to a third-party site is not an
                    endorsement of that content or third-party site.
                </SimpleTypography>

                <TitleTypography >
                    With Whom Do We Share Your Information
                </TitleTypography>
                <SimpleTypography>
                    Our affiliated businesses within the Position One Group of companies may use
                    your personal information consistent with this Privacy Notice.
                    Those businesses may also use your personal information for each of their
                    own purposes, including marketing purposes.
                </SimpleTypography>
                <SimpleTypography>
                    In working with HomeQual, if you choose to work with an affiliate company
                    or a 3rd Party, when you click on any button indicating an acceptance or
                    agreement to terms, a continuance of processing or submission, you signify
                    your agreement to proceed you are consenting, acknowledging and agreeing
                    to the disclosure of your Information, as described herein, with 3rd Party
                    Lenders and/or Real Estate Companies in our network
                    (“Lenders” “Realty Firms”) with whom you are or may be matched.
                </SimpleTypography>
                <SimpleTypography>
                    If you consent to be matched with a real estate agent, broker or lender,
                    we may share your contact information with real estate agents,
                    brokers or lenders. Be aware that the real estate agents, brokers or real
                    estate companies with whom we share your contact information
                    may retain or use your contact information whether or not you use their services.
                </SimpleTypography>

                <TitleTypography >
                    With Your Consent
                </TitleTypography>
                <SimpleTypography>
                    We may share your information with select third-party partners with your
                    consent or at your direction so they can send you promotions,
                    ads or offers about their services or products that you may be interested
                    in. If you choose to opt in to receiving communications from that
                    third-party advertiser by providing your explicit consent, the third-party
                    advertiser will manage your personal information pursuant to their
                    own privacy policy.
                </SimpleTypography>

                <TitleTypography >
                    Non-personal Information.
                </TitleTypography>
                <SimpleTypography>
                    When the information collected from or about you is not defined as personal
                    information under applicable law, we may share such non-personal,
                    de-identified information or aggregated information with third parties at
                    our discretion.
                </SimpleTypography>

                <TitleTypography >
                    Services Providers.
                </TitleTypography>
                <SimpleTypography>
                    With third parties who perform services on our behalf.
                </SimpleTypography>

                <TitleTypography >
                    Your rights
                </TitleTypography>
                <SimpleTypography>
                    You can choose to use Site without providing any information about yourself
                    to us directly, butsome information may be collected automatically or
                    be requested by us so that you can take advantage of certain features on
                    our Services.
                </SimpleTypography>
                <SimpleTypography>
                    To ask us to remove your information from our marketing mailing lists,
                    please contact us. You also can unsubscribe from our marketing mailing lists
                    by following the “Unsubscribe” link in our emails. Even if you unsubscribe
                    from our marketing communications, we may still need to send you
                    communications relating to your use of the Services, such as service
                    announcements where you are using our Service.
                </SimpleTypography>

                <TitleTypography >
                    Changes to this Privacy Policy
                </TitleTypography>
                <SimpleTypography>
                    HomeQual.com reserves the right to update and change, from time to time,
                    this Privacy Policy and all documents incorporated by
                    reference. You can find the most recent version of this Privacy Policy at
                    http://www.homequal.com/privacypolicy.
                    If homequal.com changes this Privacy Policy in ways that affect whether
                    and how it uses your personally identifying information,
                    homequal.com will advise you of choices you may have as a result of those
                    changes. Use of the Site after such changes constitutes
                    acceptance of such changes. If you have questions about this Privacy
                    Policy or want to contact us, please use our contact
                    form to get in touch with us. HomeQual may change, remove or add a Business
                    in our discretion without notice to you.
                </SimpleTypography>

            </Container>
            <ContactUs/>
        </>
  )
}

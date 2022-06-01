import React, { FC }        from 'react'
import { Typography }                        from '@mui/material'
import { SimpleTypography, TitleTypography } from '../PrivacyPolicy/sharedStyles'
import {
    Container,
    List,
    ListItem,
    ListItemIcon
} from '@material-ui/core'
import CircleIcon from '@mui/icons-material/Circle'
import { HeaderDivider } from '../../../shared/styles'
import styled from "styled-components";
import { termsOfUse } from './images'
import { ContactUs } from '../Dashboard/Sections/ContactUs'

interface ITermsOfUse {
    image?: string
}

const ImageHolder = styled(({ ...props }) => <div { ...props }/>)`
  position        : relative;
  box-sizing      : border-box;
  min-height      : 350px;
  width           : 100%;
  background      : ${ (props) => `url(${ props.image }) center center no-repeat` };
  background-size : cover;
  @media screen and (max-width : 500px) {
    min-height: 130px;
    background-size: contain;
  }
`

export const TermsOfUse: FC<ITermsOfUse> = () => {

    return (
        <>
            <HeaderDivider/>
            <ImageHolder image={ termsOfUse }/>
            <Container fixed>
                <Typography variant="h4" color={ 'primary' } textAlign={ 'center' } my={ 2 }>
                    TERMS AND CONDITIONS
                </Typography>
                <SimpleTypography>
                    BY USING THIS SERVICE, YOU UNDERSTAND AND AGREE THAT THE COMPANY IS NOT ENGAGING IN THE BUSINESS OF A REAL
                    ESTATE BROKERAGE OR A MORTGAGE LENDER AND IS NOT REPRESENTING YOU AS A REAL ESTATE AGENT OR BROKER OR LENDER OR LOAN OFFICER.
                    THE COMPANY IS AN INDEPENDENT WEB-BASED PROVIDER OF HOME BUYING EDUCATION AND ADVISORY SERVICES AND CONTENT AND DOES NOT CONTROL
                    OR SUPERVISE ANY SUCH AFFILIATES, AGENTS, BROKERS, LENDERS, LOAN OFFICERS, ADVERTISERS OR OTHER THIRD PARTIES,
                    AND THE COMPANY IS NOT RESPONSIBLE FOR THEIR ACTIONS.
                </SimpleTypography>
                <SimpleTypography>
                    HomeQual is an Online Home Buying Service that enables consumers to be educated about the home buying process.
                    HomeQual DOES NOT make loans or credit decisions in connection with loans, nor does HomeQual issue commitments or lock-in agreements.
                    HomeQual DOES NOT provide real estate agent or broker services. HomeQual’s services are only administrative.
                    Any information you submit is NOT an application for credit. Rather, it is an inquiry to be advised on the home buying process and
                    to be matched with Lenders and Agents. HomeQual may endorse or recommend the services of Lenders and Agents,
                    however YOU ARE FREE TO CHOOSE ANY LENDER OR AGENT OF YOUR CHOICE, WITHIN OR OUTSIDE OF OUR NETWORK.
                    You should rely on your own judgment in deciding which available service best suits your needs and financial situation.
                    The Lender and Agent is solely responsible for its services to you, and you agree that HomeQual shall not be liable for
                    any damages or costs arising out of or in any way connected with your use of its Services. You understand that Lenders and
                    Agents may keep your provided information and any other information provided by HomeQual, or received by them in the processing
                    of your request, whether or not you purchase a home with them or if you make a loan with them. You agree to notify any particular
                    Lender and Agent directly if you no longer want to receive communications from them. In addition, the information you provide
                    HomeQual is required to be housed and securely maintained for State Licensing Record Retention requirements and cannot be removed,
                    purged, or destroyed until the expiration of the individual state prescribed period. Lenders and Agents may also from time-totime
                    be required to share your completed Loan information with HomeQual in order to adhere to
                    State Licensing Record Retention requirement, and for internal marketing and analytics, you are providing express written consent
                    for the retention of the same upon completion of an inquiry form for HomeQual and the selected Lender to share this information
                    for this purpose.
                </SimpleTypography>

                <TitleTypography >
                    INTRODUCTION
                </TitleTypography>
                <SimpleTypography>
                    These terms and conditions (“Terms”) govern your access to and use of our home buying advisory services, including the content,
                    products, information, software, services, features, links and functionality (collectively, the “Service”) provided on or
                    available through the website, www.homequal.com (the “Site”). The operator of the Site, HomeQual (the “Company”),
                    is located at 12222 Merit Drive, #880, Dallas, TX, United States. Other definitions that may apply to these Terms include:

                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <CircleIcon color="primary" />
                            </ListItemIcon>
                            “Client”, “You” and “Your”, refers to you, the person accessing this Site and using the Service;
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CircleIcon color="primary" />
                            </ListItemIcon>
                            “Company”, “Ourselves”, “We” and “Us”, refers to the website www.getmortgageready.com and the operator of the site;
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CircleIcon color="primary" />
                            </ListItemIcon>
                            “Party”, “Parties”, or “Us”, refers to the Client and the Company, or either the Client or the Company, depending on how the term is appropriately used.
                        </ListItem>
                    </List>
                </SimpleTypography>

                <TitleTypography >
                    By using our Service, you are agreeing to these Terms. Please read them carefully:
                </TitleTypography>
                <SimpleTypography>
                    1. Your Acceptance
                    <List>
                        <ListItem>
                            You may use our Service only if you can form a binding agreement with us and only if you are in compliance with these Terms and all applicable laws.
                            You must accept the Terms before you are allowed to use the Service. You may accept these Terms by taking any action which demonstrates your acceptance, including by:
                        </ListItem>
                        <ListItem>
                            (a) Affirmatively clicking the hyperlink, button or other linking device containing the word “SUBMIT” “START NOW” or similar language which references or incorporates these Terms;

                        </ListItem>
                        <ListItem>
                            (b) Repeatedly accessing the Site or using the Service with the continued ability to view the Terms through a conspicuous hyperlink or other linking device.
                        </ListItem>
                        <ListItem>
                            You may not unilaterally disregard any portion of these Terms. However, if there is a particular provision in these Terms that you wish to amend, you may contact us
                            before your use of the Service to negotiate a separate clause or agreement. We do not guarantee that such negotiations will be successful. Nevertheless, if you wish
                            to discuss your own personalized agreement, please contact us or have your attorney do so.
                        </ListItem>
                    </List>
                </SimpleTypography>
                <SimpleTypography>
                    2. Registration and Content
                    <List>
                        <ListItem>
                            When you create your account with us, you must:
                        </ListItem>
                        <ListItem>
                            (a) provide us with accurate and complete information
                        </ListItem>
                        <ListItem>
                            (b) maintain and promptly update the Data to keep it accurate and complete as reasonably possible.
                        </ListItem>
                        <ListItem>
                            If you provide any information that the Company reasonably suspects is untrue or incomplete, the
                            Company may suspend or terminate your account and refuse any and all current or future use of the Service.
                            By using the Service and submitting any data, files, software, text (including but not limited to names of files,
                            databases and directories), software, music, sound, photographs, video or any other material (collectively, the “Content”)
                            to the Company or a third party in connection with this Service, you represent and warrant that: (a) you are the owner
                            of such Content, and (b) such use will not violate these Terms or any applicable laws.
                        </ListItem>
                    </List>
                </SimpleTypography>
                <SimpleTypography>
                    3. Your Account, Password and Access Rights You agree to take all necessary precautions to keep your username and password secure.
                    You further agree that if your security is breached, you are solely responsible for any damage or liability occurring by this breach.
                    You are responsible for safeguarding your account information. Even if you can prove hacking by clear and convincing evidence,
                    you are still liable for any third party use of your username and password. You agree to be held responsible for all electronic
                    communications from your account, including account registration and other account holder information, course information and other
                    data. The Company will assume that any Electronic Communications it receives under your account will have been sent and/or
                    authorized by you. You agree to immediately notify the Company if you become aware of any loss or theft or unauthorized use of
                    any of your accounts.
                </SimpleTypography>
                <SimpleTypography>
                    4. License and Use Restrictions Subject to these Terms and the Privacy Policy, the Company will provide you with the Service.
                    You are granted a limited, non-exclusive, non-transferable, and revocable license to use the Service for your personal or internal
                    business operations use. The Company supports only those users who are accessing the Site or using the Service within the
                    United States of America or its territories. All other users are not welcome to access the Site or use the Service.
                </SimpleTypography>
                <SimpleTypography>
                    5. Responsibility for Content. You understand that all Content, whether publicly posted or privately transmitted, is the sole
                    responsibility of the person from which such Content originated. This means that you and other third parties, and not the Company,
                    are entirely responsible for Content that you upload or otherwise view or transmit via the Service. The Company does not control the
                    Content uploaded or otherwise transmitted by you or other third parties via the Service and, as such, does not guarantee the accuracy,
                    integrity or quality of such Content.
                </SimpleTypography>
                <SimpleTypography>
                    6. Cancellation & Refund Policy If you are an agent or broker and you subscribe to our service, this contract may be terminated
                    by either party upon 5 or more days prior to the renewal date of the agreement. Any cancellations must be in writing
                    to info@homequal.com. Agent may terminate this contract early by paying 50% of the remaining contract amount, and all actively
                    prospected leads will still be subject to a the agreed upon referral fee at the time it closes.
                </SimpleTypography>
                <SimpleTypography>
                    7. Other Restrictions. You agree to not use the Service to:
                    <List>
                        <ListItem>
                            (a) Upload or otherwise transmit any Content or domain name that is unlawful, threatening, abusive, harassing, tortuous,
                            defamatory, vulgar, obscene, libelous, invasive of another’s privacy, hateful, or racially, ethnically or otherwise objectionable;
                        </ListItem>
                        <ListItem>
                            (b) Harm or exploit minors in any way;
                        </ListItem>
                        <ListItem>
                            (c) Impersonate any person or entity, including, but not limited to, any the Company representative, or misrepresent your
                            affiliation with any person or entity;
                        </ListItem>
                        <ListItem>
                            (d) Forge headers or otherwise manipulate identifiers in order to disguise the origin of any Content transmitted through the Service;
                        </ListItem>
                        <ListItem>
                            (e) Upload or otherwise transmit any Content that you do not have a right to transmit under any law or under
                            contractual relationships (including but not limited to inside information, proprietary and confidential information
                            learned or disclosed as part of employment relationships or under nondisclosure agreements);
                        </ListItem>
                        <ListItem>
                            (f) Upload or otherwise transmit any Content or domain name that infringes any patent, trademark, trade secret,
                            copyright or other proprietary rights of any person;
                        </ListItem>
                        <ListItem>
                            (g) Remove any copyright, trademark or other proprietary notice;
                        </ListItem>
                        <ListItem>
                            (h) Upload or otherwise transmit any unsolicited or unauthorized advertising, promotional materials, “junk mail”,
                            “spam”, “chain letters”, “pyramid schemes”, or any other form of solicitation, except in those areas of the
                            Service that may be expressly designated for such purpose;
                        </ListItem>
                        <ListItem>
                            (i) Upload or otherwise transmit any material that contains software viruses or any other computer code,
                            files or programs designed to interrupt, destroy or limit the functionality of any computer software or hardware or
                            telecommunications equipment;
                        </ListItem>
                        <ListItem>
                            (j) Interfere with or disrupt the Service or servers or networks connected to the Service;
                        </ListItem>
                        <ListItem>
                            (k) Violate any applicable law or regulation, including, but not limited to, regulations promulgated by the
                            U.S. Securities and Exchange Commission and any rules of any securities exchange, and laws regarding the export of
                            technical data; incite or provide instructional information about illegal activities;
                        </ListItem>
                        <ListItem>
                            (l) Conduct raffles, contests, lotteries or sweepstakes, except in those areas of the Service that may be expressly designated for such purpose.
                        </ListItem>
                    </List>
                </SimpleTypography>
                <SimpleTypography>
                    8. Access Restrictions You may not reverse-engineer, decompile, disassemble or create derivative works regarding the Service or
                    the Site. You will not access the Site or use any automatic device or manual process to monitor or reproduce the Service.
                    You will not access the Site or use any device, software, computer code, or virus to interfere or attempt to interfere, disrupt
                    or damage the Site or any communications on it. Additionally you agree not to circumvent any encryption or other security tools
                    used anywhere on the Site (including theft of user names and passwords or using another person’s user name and password in order
                    to gain access to a restricted area of the Site). All forms of hacking are strictly prohibited.
                </SimpleTypography>

                <SimpleTypography>
                    9. Modifications to the Service and Terms
                    <List>
                        <ListItem>
                            9.1 Modifications to the Service. The Company reserves the right at any time and from time to time to modify or discontinue,
                            temporarily or permanently, the Service or any part of the Site. You agree that the Company shall not be liable to you or to
                            any third party for any modification, suspension or discontinuance of the Service or loss of access to the Content.
                            The Company may specify from time to time the version(s) of related products required in order to use the Service
                            (e.g. supported browser versions).
                        </ListItem>
                        <ListItem>
                            9.2 Modifications to these Terms. You agree that the Company may modify these Terms if necessary to comply with any other
                            agreements that the Company is currently bound by or will be bound by in the future, and/or with applicable law, as well as
                            to adjust to changing business circumstances. Your acceptance of any new modifications must be consistent with these Terms.
                            If you do not agree to any such changes, you should immediately cease all access and use of the Service. You agree that such
                            termination of your use of the Service will be your sole and exclusive remedy if you do not wish to abide by any changes
                            to these Terms.
                        </ListItem>
                    </List>
                </SimpleTypography>
                <SimpleTypography>
                    10. Charges/Credits/Termination Agent or broker agrees to pay the then-current fees associated with the Service you choose.
                    When you subscribe and provide payment information your credit card or bank account will be debited accordingly.
                    The Company reserves the right to modify its fees with or without notice.
                </SimpleTypography>
                <SimpleTypography>
                    11. Termination and Indemnity You acknowledge and agree that the Company may suspend or terminate your account and/or
                    deny you access to, use of, or submission of Content for, all or part of the Service, without prior notice,
                    if you engage in any conduct that the Company believes, in its sole discretion:
                    <List>
                        <ListItem>
                            (a) violates any term or provision of these Terms,
                        </ListItem>
                        <ListItem>
                            (b) violates the rights of the Company or third parties,
                        </ListItem>
                        <ListItem>
                            (c) or is otherwise inappropriate for continued access and use of the Service.
                        </ListItem>
                        <ListItem>
                            (d) In addition, the Company reserves the right to terminate inactive membership accounts. You agree that upon termination
                            of the Service, either by you or the Company, the Company may delete all Content and information related to your account
                            and may bar your access to your account and the Service including, but not limited to, access to any of your Content
                            entered into or used in connection with the Service. Further, you agree that the Company shall not be liable to you or any
                            third-party for any termination of your access to the Service. You agree to defend, indemnify and hold the Company harmless
                            from and against any and all claims, losses, liability costs and expenses (including but not limited to attorneys’ fees
                            and expenses) arising from:
                        </ListItem>
                        <ListItem>
                            (d) any inaccuracy or falsity related to the Content or the Personal Information (as defined in the Privacy Policy) and,
                        </ListItem>
                        <ListItem>
                            (f) your violation of these Terms, state or federal laws or regulations, or any third party’s rights, including but not
                            limited to infringement of any intellectual property rights, violation of any proprietary right and invasion of any privacy
                            rights. This obligation shall survive the termination of Service.
                        </ListItem>
                    </List>
                </SimpleTypography>
                <SimpleTypography>
                    12. Links The Service may provide links or references to other Internet sites or resources. You acknowledge and agree that the
                    Company is not responsible for the availability of such external sites or resources, and does not endorse and is not responsible
                    or liable for any content, advertising, products, or other materials on or available from such sites or resources.
                    You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any
                    damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services
                    available on or through any such site or resource.
                </SimpleTypography>
                <SimpleTypography>
                    13. The Company and Third Party Proprietary Rights You acknowledge and agree that the Service contains proprietary and confidential
                    information that is protected by applicable intellectual property and other laws. You further acknowledge and agree that content
                    contained in sponsor advertisements or information that may have been presented to you through the Service or advertisers
                    is protected by copyrights, trademarks, service marks, patents or other proprietary rights and laws.
                </SimpleTypography>
                <SimpleTypography>
                    14. No Resale, Etc. of the Service You agree not to copy, sell, resell, rent or sublicense
                    (including offering the Service to third parties on an applications service provider or time-sharing basis),
                    lease, loan, give, redistribute, or create a derivative work of any portion of the Service, use of the Service,
                    or access to the Service. You agree not to access the Service by any means other than through the interface that is provided by the
                    Company for use in accessing the Service. You may not use, copy, modify or transfer the Service, in whole or in part, except as
                    expressly provided in these Terms and Conditions. You agree to not make any attempt to decompile, disassemble or reverse engineer
                    the Service or otherwise discover or derive the source code or underlying processes, ideas, structure, organization or algorithms
                    of the Service.
                </SimpleTypography>
                <SimpleTypography>
                    15. Disclaimer of Representations and Warranties YOU EXPRESSLY UNDERSTAND AND AGREE THAT:
                    <List>
                        <ListItem>
                            (a) YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK. THE SERVICE AND ANY CONTENT OR ADD-ON FEATURES THROUGH THE SERVICE ARE
                            PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS. TO THE FULLEST EXTENT PERMITTED BY LAW, THE COMPANY, ITS OFFICERS,
                            DIRECTORS, EMPLOYEES, AND AGENTS DISCLAIM ALL REPRESENTATIONS AND WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED,
                            INCLUDING, BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
                            NON-INFRINGEMENT.
                        </ListItem>
                        <ListItem>
                            (b) THE COMPANY MAKES NO REPRESENTATION OR WARRANTY THAT THE SERVICE AND ANY CONTENT OR ADD-ON FEATURES THROUGH THE SERVICE:
                        </ListItem>
                        <ListItem>
                            (I) WILL MEET YOUR PERSONAL OR PROFESSIONAL REQUIREMENTS OR RESULT IN REVENUES OR PROFITS,
                        </ListItem>
                        <ListItem>
                            (II) WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR FREE,
                        </ListItem>
                        <ListItem>
                            (III) WILL PROVIDE RESULTS THAT ARE ACCURATE OR RELIABLE, AND
                        </ListItem>
                        <ListItem>
                            (IV) WILL MEET YOUR QUALITY OF ANY PRODUCTS, SERVICE, INFORMATION, OR OTHER MATERIAL PURCHASED OR OBTAINED
                            BY YOU THROUGH THE SERVICE. THE COMPANY EXPRESSLY DISCLAIMS ANY REPRESENTATIONS OR WARRANTIES THAT ANY LAWS
                            OR REGULATIONS DESCRIBED IN THE SERVICE HAVE BEEN DESCRIBED ACCURATELY OR COMPLETELY AND THAT YOUR USE
                            OF THE SERVICE WILL SATISFY ANY STATUTORY OR REGULATORY OBLIGATIONS, OR WILL ASSIST WITH, GUARANTEE
                            OR OTHERWISE ENSURE COMPLIANCE WITH ANY APPLICABLE LAWS OR REGULATIONS. YOU ARE SOLELY RESPONSIBLE FOR ENSURING
                            THAT YOUR USE OF THIS SERVICE OR CONTENT IS IN ACCORDANCE WITH APPLICABLE LAW.
                        </ListItem>
                        <ListItem>
                            (c) ANY CONTENT OR MATERIAL TRANSFERRED FROM, DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE USE OF THE SERVICE
                            OR ADD-ON FEATURES THROUGH THE SERVICE ARE DONE AT YOUR OWN DISCRETION AND RISK AND YOU WILL BE SOLELY RESPONSIBLE
                            FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS OF DATA AND/OR CONTENT THAT RESULTS FROM THE TRANSFER OR DOWNLOAD
                            OF ANY SUCH MATERIAL. NO ADVICE OR
                        </ListItem>
                    </List>
                    INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM THE COMPANY OR THROUGH OR FROM THE SERVICE OR ADD ON FEATURES
                    THROUGH THE SERVICE SHALL CREATE ANY REPRESENTATION OR WARRANTY NOT EXPRESSLY STATED IN THE TERMS OF USE.
                </SimpleTypography>
                <SimpleTypography>
                    16. Limitation of Liability
                    <List>
                        <ListItem>
                            (a) YOU EXPRESSLY UNDERSTAND AND AGREE THAT THE COMPANY SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
                            CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, CONTENT OR
                            OTHER INTANGIBLE LOSSES (EVEN IF THE COMPANY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), RESULTING FROM:
                        </ListItem>
                        <ListItem>
                            (I) THE USE OR THE INABILITY TO USE THE SERVICE, CONTENT AND/OR ANY INFORMATION;
                        </ListItem>
                        <ListItem>
                            (II) THE COST OF PROCUREMENT OF SUBSTITUTE GOODS AND SERVICES RESULTING FROM ANY GOODS, CONTENT, INFORMATION
                            OR SERVICE PURCHASED OR OBTAINED OR MESSAGES RECEIVED OR TRANSACTIONS ENTERED INTO THROUGH OR FROM THE SERVICE;
                        </ListItem>
                        <ListItem>
                            (III) UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT;
                        </ListItem>
                        <ListItem>
                            (IV) STATEMENTS OR CONDUCT OF ANY THIRD PARTY ON THE SERVICE; OR (v) ANY OTHER MATTER RELATING TO THE SERVICE;
                        </ListItem>
                        <ListItem>
                            (b) YOU ALSO AGREE THAT THE COMPANY WILL NOT BE LIABLE FOR ANY
                        </ListItem>
                        <ListItem>
                            (I) INTERRUPTION OF BUSINESS;
                        </ListItem>
                        <ListItem>
                            (II) ACCESS DELAYS OR ACCESS INTERRUPTIONS TO THIS SITE OR THE WEB SITE(S) YOU ACCESS THROUGH THIS SERVICE;
                        </ListItem>
                        <ListItem>
                            (III) CONTENT NON-DELIVERY, MIS-DELIVERY, ERRORS, OMISSIONS, CORRUPTION, DESTRUCTION OR OTHER MODIFICATION; OR
                        </ListItem>
                        <ListItem>
                            (IV) EVENTS BEYOND THE COMPANY’S REASONABLE CONTROL; AND
                        </ListItem>
                        <ListItem>
                            (c) IN NO EVENT SHALL THE COMPANY’S MAXIMUM AGGREGATE LIABILITY EXCEED THE TOTAL AMOUNT PAID BY YOU TO THE COMPANY
                            FOR THE SERVICE. SOME STATES MAY NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN WARRANTYS OR LIABILITY FOR CONSEQUENTIAL
                            OR INCIDENTAL DAMAGES, IN SUCH STATES, THE COMPANY’S LIABILITY IS LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW.
                        </ListItem>
                    </List>
                </SimpleTypography>
                <SimpleTypography>
                    17. General Information. The Terms of Use and Privacy Policy constitute the entire agreement between you and the Company
                    and govern your use of the Service, superseding any prior agreements between you and the Company (including, but not limited to,
                    any prior versions of these Terms and Privacy Policy) with respect to its subject matter. You also may be subject to additional
                    terms and conditions that may apply when you use affiliate, advertising or other company services, third-party content or
                    third-party software. Except as otherwise provided herein, these Terms and Privacy Policy shall be governed by the laws of the
                    State of Texas without regard to any conflict of law provisions. You and the Company agree to submit to the personal and exclusive
                    jurisdiction of the state courts located within the County of Dallas, Texas and the federal courts in Texas. The Terms of
                    Use and Privacy Policy do not limit any rights that the Company may have under trade secret, copyright, patent, trademark or other
                    laws. The failure of the Company to exercise or enforce any right or provision of these Terms and Privacy Policy shall
                    not constitute a waiver of such right or provision. If any provision of these Terms and Privacy Policy is found by a court of
                    competent jurisdiction to be invalid, the parties nevertheless agree that the court should endeavor to give effect
                    to the parties’ intentions as reflected in the provision, and the other provisions of these Terms and Privacy Policy remain
                    in full force and effect. You agree that any claim or cause of action arising out of or related to use of the Service or these
                    Terms and Privacy Policy must be filed within one (1) year after such claim or cause of action arose but no later than
                    one (1) year after your use of the Service has terminated for any reason or be forever barred. The section titles in these
                    Terms and Privacy Policy are for convenience only and have no legal or contractual effect. The Terms of Use and Privacy Policy
                    shall inure to the benefit of the Company and its successors and assigns.
                </SimpleTypography>
                <SimpleTypography>
                    18. Survival. All representations and warranties contained herein, and all of the Provisions of the Privacy Policy, shall survive
                    after your use of the Service or after these Terms have terminated for any reason.
                </SimpleTypography>
                <SimpleTypography>
                    19. Affiliated Business Relationships. Our purpose is to give you notice that Position One Mortgage Inc., HomeQual,
                    Position One Realty Inc and The Score Firm are corporate affiliates, each one being 100% wholly owned by, and subsidiaries of,
                    the same parent corporation. Because of this relationship, if you utilize the services of Position One Mortgage Inc., a financial
                    or other benefit may be provided to the parent corporation and/or other corporate affiliates. You are NOT required to use any of
                    the Settlement Services Providers above as a condition for the purchase of a property or your application for, or settlement of,
                    a mortgage loan on the property in conjunction with your purchase or refinance. There are frequently other settlement providers
                    available with similar services. You are free to shop around to determine that you are receiving the best services an d the best
                    rate for those services.
                    <List>
                        <ListItem>
                            19.1 Estimated Range of Charges:
                        </ListItem>
                        <ListItem>
                            (a) Position One Realty: Buyer/Seller Representation (0-3%)
                        </ListItem>
                        <ListItem>
                            (b) HomeQual: Advisory Services ($0 – $359)
                        </ListItem>
                        <ListItem>
                            (c) The Score Firm: Credit Assistance ($0 – $1,295)
                        </ListItem>
                        <ListItem>
                            (d) Position One Mortgage: Loan Origination Charge (0-2% of loan obtained).
                        </ListItem>
                    </List>
                </SimpleTypography>
                <SimpleTypography>
                    20. E-SIGN ACT. These Terms are governed by the Electronic Signatures in Global and National Commerce Act (E-Sign Act).
                    You understand that these Terms will not be denied legal effect, validity or enforceability if electronic signatures were used
                    in its formation. You also understand that electronic signatures and records are just as good as their paper equivalent,
                    and therefore subject to the same legal scrutiny of authenticity that applies to paper documents.
                </SimpleTypography>
                <SimpleTypography>
                    21. RESPA Disclosure. We connect home buyers with our partner real estate agents and lenders across the country.
                    When one of our agents closes a transaction with our home buyers or home seller customers, we collect a standard referral
                    fee from the real estate agent. In some cases we receive a lead fee form a mortgage lender when you consent to allowing us
                    to provide your contact information to the lender.
                </SimpleTypography>
                <SimpleTypography>
                    22. Digital Millennium Copyright Act. In accordance with the Digital Millennium Copyright Act (“DMCA”) and other applicable law, HomeQual,
                    has adopted a policy of terminating, in appropriate circumstances and at HomeQual’s sole discretion, users or account holders
                    who are deemed to be repeat infringers. HomeQual may also at its sole discretion limit access to the Site and/or terminate the accounts
                    of any users who infringe any intellectual property rights of others, whether or not there is any repeat infringement.
                </SimpleTypography>

            </Container>
            <ContactUs/>
        </>
    )
}
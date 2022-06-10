import React, { FC } from 'react'
import { Iarticle } from '../../../ResourcesData'
import { Container } from '@material-ui/core'
import { Box, Typography } from '@mui/material'
import { ListItem, SimpleTypography, TitleTypography } from './index'

export const Disclosure: FC<Iarticle> = () => {
  return (
    <>
      <Container fixed>
        <Typography variant="h4" color={ 'primary' } textAlign={ 'center' } my={ 2 }>
          Understanding the Sellers Disclosure
        </Typography>
        <SimpleTypography fontStyle='italic'>
          A seller's disclosure brings transparency to a real estate transaction and can protect both buyers and
          sellers. In the disclosure, a seller provides written information about known issues that could hurt the
          property's value, such as termite damage, improper drainage or a leaky roof, as well as details like
          homeowner’s association fees and restrictions.
        </SimpleTypography>
        <SimpleTypography fontStyle='italic'>
          Here are a few things to think about.
        </SimpleTypography>
        <TitleTypography variant={ 'h6' }>
          When you purchase offer is executed
        </TitleTypography>
        <SimpleTypography>
          A lot can happen between now and your closing date so the more “things” we can get out of the way now, the
          better.
        </SimpleTypography>
        <Box pl={ 4 }>
          <ListItem>
            This is a good time to search for your new TV and internet provider. These companies can take
            several weeks to get you scheduled so knock this out right away. You won’t have access to your home
            until after you receive the keys so a day or two after closing might be best time to get them
            connected.
          </ListItem>
          <ListItem>
            Do you have a preference on your electrical or gas provider? There are a lot of options for electrical so
            search around and save some money. If needed, you can ask the seller or a new neighbor who they use.
          </ListItem>
          <ListItem>
            Contact a few moving companies and get quotes. If you don't have a lot of furniture to take, you can simply
            hire a van for larger items and move by yourself.
          </ListItem>
          <ListItem>
            Start de-cluttering. What don't you need? What can you sell, give away or simply discard. Try not to fill
            your new garage with unnecessary items.
          </ListItem>
        </Box>
        <TitleTypography variant={ 'h6' }>
          A few weeks before closing day
        </TitleTypography>
        <SimpleTypography>
          The reality is setting in that in a few short weeks you will be a homeowner! It’s time to kick things into
          second gear.
        </SimpleTypography>
        <Box pl={ 4 }>
          <ListItem>
            It’s time to start packing. Start room by room, packing the things you won’t need for a few weeks. Make sure
            to have a good method to label the boxes. The last thing you want to happen is spending hours looking for
            your favorite outfit that is somewhere in the mass of boxes.
          </ListItem>
          <ListItem>
            If you haven’t done so already, confirm the movers and any other service you scheduled.
          </ListItem>
          <ListItem>
            Make a list of any company that you do business with that has your address on file. Now is not the time to
            officially change your address, but have a list prepared. Your banking institution, credit card statements,
            any subscription plans that get sent to your home, etc. Also, you will want to start thinking about doing a
            change of address on the US Postal Service website.
          </ListItem>
        </Box>
        <TitleTypography variant={ 'h6' }>
          When you purchase offer is executed
        </TitleTypography>
        <SimpleTypography>
          A lot can happen between now and your closing date so the more “things” we can get out of the way now, the
          better.
        </SimpleTypography>
        <Box pl={ 4 }>
          <ListItem>
            This is a good time to search for your new TV and internet provider. These companies can take
            several weeks to get you scheduled so knock this out right away. You won’t have access to your home
            until after you receive the keys so a day or two after closing might be best time to get them
            connected.
          </ListItem>
          <ListItem>
            Do you have a preference on your electrical or gas provider? There are a lot of options for electrical so
            search around and save some money. If needed, you can ask the seller or a new neighbor who they use.
          </ListItem>
          <ListItem>
            Contact a few moving companies and get quotes. If you don't have a lot of furniture to take, you can simply
            hire a van for larger items and move by yourself.
          </ListItem>
          <ListItem>
            Start de-cluttering. What don't you need? What can you sell, give away or simply discard. Try not to fill
            your new garage with unnecessary items.
          </ListItem>
        </Box>
        <TitleTypography variant={ 'h6' }>
          Day before
        </TitleTypography>
        <SimpleTypography>
          You’ve confirmed with the lender that you are closing tomorrow! If you haven’t already had your final
          walkthrough with your agent, now is the time. If any negotiated repairs haven’t been done, contact the seller
          immediately.
        </SimpleTypography>
        <Box pl={ 4 }>
          <ListItem>
            All of your belongings are boxed up, utilities and moving company set and you have received your final
            closing documents outlining how much money you need to take to closing.
          </ListItem>
          <ListItem>
            Round up all the keys to your current place. Make sure you get them back from family and friends too.
          </ListItem>
          <ListItem>
            Pack a duffle bag of essentials such as clothes and toiletries. After moving all day, this is an easy
            solution to having items you need right away.
          </ListItem>
          <ListItem>
            Do a change of address with USPS so your mail is forwarded to you.
          </ListItem>
        </Box>

        <TitleTypography variant={ 'h6' }>
          Closing day
        </TitleTypography>
        <SimpleTypography>
          Don’t be nervous. Since you’ve received the Closing Disclosure at least 3 days ago, you already know what you
          are signing. Carve out an hour to sign and 2-3 hours more to receive the keys. Once you sign, the title
          company will send all the paperwork to the lender for funding approval.
        </SimpleTypography>
        <Box pl={ 4 }>
          <ListItem>
            Arrive at the title company on-time. They schedule appointments back to back and you don’t want to be
            rescheduled.
          </ListItem>
          <ListItem>
            If your closing time is late in the day, there is a good chance you won’t receive the keys until the
            following morning. So set your expectations correctly.
          </ListItem>
          <ListItem>
            Have your cashier’s check in hand to cover the funds needed for closing.
          </ListItem>
          <ListItem>
            Do a change of address with USPS so your mail is forwarded to you.
          </ListItem>
        </Box>
        <Typography variant={ 'h6' } fontWeight='bold'>
          You're in!
        </Typography>
        <TitleTypography variant={ 'h6' }>
          Congratulations! What a feeling!!!
        </TitleTypography>
        <SimpleTypography>
          The listing agent should have removed the sign from your yard and the lockbox (if applicable) from your door.
          If not, reach out to your agent for this to happen.
        </SimpleTypography>
        <SimpleTypography>
          You might want to replace the locks or have them rekeyed. You’ll never know if there are keys to your house
          floating around. Maybe the seller’s dog sitter had keys or a family friend or neighbor.
        </SimpleTypography>
        <SimpleTypography>
          The house is now your home! Enjoy and make lasting memories. You deserve it!
        </SimpleTypography>
      </Container>
    </>
  )
}

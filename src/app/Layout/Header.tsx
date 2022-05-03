import MenuIcon                                                                               from '@mui/icons-material/Menu'
import { AppBar, IconButton, List, ListItem, Popover, Toolbar, Typography, useScrollTrigger } from '@mui/material'
import { SyntheticEvent, useState }                                                           from 'react'
import { useLocation, useNavigate }                                                           from 'react-router-dom'
import styled                                                                                 from 'styled-components'
import hqlighticon
                                                                                              from '../../assets/images/HomeQualIcon/hqlogolight.png'

const MenuItems = styled(Typography)`
  font-size   : 15px;
  font-weight : 500;
`
const HqLogo = styled.div`
  background      : url(${ hqlighticon }) left center no-repeat;
  width           : 260px;
  height          : 60px;
  background-size : contain;
  cursor          : pointer;

  @media screen and (min-width : 600px) {
    height : 64px;
  }
`
const menuItems = [
  {
    text: 'Buy a Home',
    link: 'buy_a_home',
  },
  {
    text: 'Find a Lender',
    link: 'find_a_lender',
  },
  {
    text: 'Find a Real Estate Agent',
    link: 'find_agent',
  },
  {
    text: 'Refinance',
    link: 'refinance',
  },
  {
    text: 'Speak with an Advisor',
    link: 'speak_advisor',
  },
  {
    text: 'FAQs',
    link: 'FAQs',
  },
  {
    text: 'Resources',
    link: 'resources',
  },
  {
    text: 'My Account',
    link: 'my_account',
  },
]

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const location = useLocation()
  const navigate = useNavigate()
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold        : window.innerHeight,
    target           : window,
  })

  const handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)

  return (
    <AppBar position={ location.pathname.includes('Q&A') ? 'relative' : 'fixed' } sx={ {
      zIndex:2,
      transition: 'background-color 1s linear',
      bgcolor   : location.pathname === '/' ? trigger ? 'white' : 'transparent' : 'white',
    } } elevation={ 0 }>
      <Toolbar sx={ { transition: 'linear 0.5s' } }>
        <IconButton edge="start" color="primary" onClick={ handleClick }>
          <MenuIcon sx={ { transform: 'scale(1.4)' } }/>
        </IconButton>

        <Popover id={ 'menuButton' } open={ open } anchorEl={ anchorEl } onClose={ handleClose } anchorOrigin={ {
          vertical  : 'bottom',
          horizontal: 'left',
        } }>
          <List>
            { menuItems.map((item, index) => (
              <ListItem key={ index } sx={ { margin: '0 10px' } }>
                <MenuItems sx={ { cursor: 'pointer' } } onClick={ () => {
                  navigate(item.link)
                  handleClose()
                } }>{ item.text }
                </MenuItems>
              </ListItem>
            )) }
          </List>
        </Popover>

        <HqLogo onClick={ () => navigate('/') }/>
      </Toolbar>
    </AppBar>
  )
}

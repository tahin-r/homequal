import MenuIcon                                                                               from '@mui/icons-material/Menu'
import { AppBar, IconButton, List, ListItem, Popover, Toolbar, Typography, useScrollTrigger } from '@mui/material'
import { SyntheticEvent, useState }                                                           from 'react'
import { useNavigate, useLocation }                                                           from 'react-router-dom'
import styled                                                                                 from 'styled-components'
import hqlighticon
                                                                                              from '../../assets/images/HomeQualIcon/hqlogolight.png'

const MenuItems = styled(Typography)`
  font-size   : 15px;
  font-weight : 500;
`
const HqLogo = styled(({ ...props }) => <div { ...props } />)`
  background      : url(${ props => props.trigger === 'true' ? hqlighticon : hqlighticon }) left 100% no-repeat;
  width           : 250px;
  height          : 40px;
  background-size : contain;
`
const menuItems = [
  'Buy a Home',
  'Find a Lender',
  'Find a Real Estate Agent',
  'Refinance',
  'Speak with an Advisor',
  'FAQs',
  'Resources',
  'My Account',
]


export const Header = () => {
  const [ anchorEl, setAnchorEl ] = useState<HTMLButtonElement | null>(null)
  const location = useLocation()
  const navigate = useNavigate()
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold        : window.innerHeight,
    target           : window,
  })

  const handleClick = (event: SyntheticEvent<any>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)

  return (
    <AppBar
      position={location.pathname === '/'? 'fixed' :'relative'}
      sx={ {
        color     : 'black', bgcolor: trigger ? 'white' : 'transparent',
        transition: 'linear 0.5s',
        maxHeight : '60px',
        width:'100vw'
      } }
      elevation={ 0 }
    >
      <Toolbar>
        <IconButton
          edge="start"
          sx={ { mr: 2, color: '#eb3492', position: 'relative' } }
          aria-describedby={ 'menuButton' }
          onClick={ handleClick }

        >
          <MenuIcon/>
        </IconButton>

        <Popover
          id={ 'menuButton' }
          open={ open }
          anchorEl={ anchorEl }
          onClose={ handleClose }
          anchorOrigin={ {
            vertical  : 'bottom',
            horizontal: 'left',
          } }
          transformOrigin={ {
            vertical  : 'top',
            horizontal: 'left',
          } }
        >
          <List sx={ { width: '100%', maxWidth: 360 } }>
            { menuItems.map((item, index) =>
              <ListItem
                key={ index }
                sx={ { margin: '0 10px' } }
              >
                <MenuItems>{ item }</MenuItems>
              </ListItem>,
            ) }
          </List>

        </Popover>

        <HqLogo
          trigger={ String(trigger) }
          onClick={ () => navigate('/') }
        />


      </Toolbar>
    </AppBar>
  )
}

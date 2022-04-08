import MenuIcon                                                                               from "@mui/icons-material/Menu"
import { AppBar, IconButton, List, ListItem, Popover, Toolbar, Typography, useScrollTrigger } from "@mui/material"
import { SyntheticEvent, useState }                                                           from "react"
import { useLocation, useNavigate }                                                           from "react-router-dom"
import styled                                                                                 from "styled-components"
import hqlighticon
                                                                                              from "../../assets/images/HomeQualIcon/hqlogolight.png"

const MenuItems = styled(Typography)`
  font-size   : 15px;
  font-weight : 500;
`
const HqLogo = styled(({ ...props }) => <div { ...props } />)`
  background      : url(${ (props) =>
          props.trigger === "true" ? hqlighticon : hqlighticon }) left 100% no-repeat;
  width           : 250px;
  height          : 40px;
  background-size : contain;
`
const menuItems = [
  {
    text: "Buy a Home",
    link: 'buy_a_home',
  },
  {
    text: "Find a Lender",
    link: 'find_a_lender',
  },
  {
    text: "Find a Real Estate Agent",
    link: 'find_agent',
  },
  {
    text: "Refinance",
    link: 'refinance',
  },
  {
    text: "Speak with an Advisor",
    link: 'speak_advisor',
  },
  {
    text: "FAQs",
    link: 'FAQs',
  },
  {
    text: "Resources",
    link: 'resources',
  },
  {
    text: "My Account",
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

  const handleClick = (event: SyntheticEvent<any>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)

  return (
    <AppBar position={ location.pathname === "/" ? "fixed" : "relative" } sx={ {
      color     : "black",
      bgcolor   : trigger ? "white" : "transparent",
      transition: "linear 0.5s",
      maxHeight : "60px",
      maxWidth  : "100vw",
    } } elevation={ 0 }>
      <Toolbar>
        <IconButton edge="start" color="primary" aria-label="menu" onClick={ handleClick }>
          <MenuIcon/>
        </IconButton>

        <Popover id={ "menuButton" } open={ open } anchorEl={ anchorEl } onClose={ handleClose } anchorOrigin={ {
          vertical  : "bottom",
          horizontal: "right",
        } } transformOrigin={ {
          vertical  : "top",
          horizontal: "left",
        } }>
          <List sx={ { width: "100%", maxWidth: 360 } }>
            { menuItems.map((item, index) => (
              <ListItem key={ index } sx={ { margin: "0 10px" } }>
                <MenuItems onClick={ () => {
                  navigate(item.link)
                  handleClose()
                } }>{ item.text }</MenuItems>
              </ListItem>
            )) }
          </List>
        </Popover>

        <HqLogo trigger={ String(trigger) } onClick={ () => navigate("/") }/>
      </Toolbar>
    </AppBar>
  )
}

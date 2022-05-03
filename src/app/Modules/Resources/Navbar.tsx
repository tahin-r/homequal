import React, { FC, useState }                           from 'react';
import { IconButton, List, ListItem, Paper, Typography } from '@mui/material';
import styled                                            from 'styled-components';
import SearchIcon                                        from '@mui/icons-material/Search';

const NavButton = styled(({ ...props }) => <IconButton edge="start" color="primary" { ...props }/>)`
  top      : 10px;
  right    : 20px;
  position : fixed;
  width    : 50px;
  height   : 50px;
  z-index  : 3;
`

const NavbarMenu = styled(({ ...props }) => <Paper elevation={ 12 }{ ...props }/>)`
  z-index       : 3;
  top           : 30px;
  right         : 30px;
  position      : fixed;
  border-width  : 1px;
  border-style  : solid;
  border-color  : ${ props => props.theme.colors.primary };
  border-radius : 10px;
  transition    : 2s;

  @media screen and (min-width : 0px) {
    width : 80vw;
  }
  @media screen and (min-width : 900px) {
    width : 45%;
  }
  @media screen and (min-width : 1280px) {
    max-width : 35%;
  }
`
const MenuItem = styled(({ ...props }) => <Typography variant='h6' { ...props }/>)`
  margin      : 5px 10px;
  padding:0 5px;
  font-size   : 15px;
  font-weight : 400;

  &:hover {
    font-weight : 500;
  }
`

interface INavbar {
  items: [] | { text: string, onScroll: () => void }[]
}

export const Navbar: FC<INavbar> = ({ items }) => {
  const [isMenuOpen, SetMenuOpen] = useState<boolean>(false)

  return (
    <>
      { isMenuOpen ?
        <NavbarMenu onMouseLeave={ () => SetMenuOpen(false) }>
          <List>
            { items.map((item, index) => {

              return (
                <ListItem key={ index } sx={ { margin: '0 10px', padding: 0 } }>
                  <MenuItem sx={ { cursor: 'pointer' } } onClick={ () => {
                    item.onScroll();
                  } }>
                    { item.text }
                  </MenuItem>
                </ListItem>
              )
            }) }
          </List>
        </NavbarMenu>
                   :
        <NavButton onClick={ () => SetMenuOpen(true) } onMouseEnter={ () => SetMenuOpen(true) }>
          <SearchIcon sx={ { transform: 'scale(2)' } }/>
        </NavButton>
      }
    </>
  );
};

export default Navbar;
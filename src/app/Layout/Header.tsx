import { AppBar, IconButton, List, ListItem, Popover, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import MenuIcon
                                                                                              from '@mui/icons-material/Menu';
import {
    HomeQualTextTemplate,
}                                                                                             from '../../shared/strings/strings';
import { SyntheticEvent, useState }                                                           from 'react';
import styled                                                                                 from 'styled-components';

const MenuItems = styled(Typography)`
  font-size   : 15px;
  font-weight : 500;
`;

const menuItems = [
    'Buy a Home',
    'Find a Lender',
    'Find a Real Estate Agent',
    'Refinance',
    'Speak with an Advisor',
    'FAQs',
    'Resources',
    'My Account',
];


export const Header = () => {
    const [ anchorEl, setAnchorEl ] = useState<HTMLButtonElement | null>(null);

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold        : window.innerHeight,
        target           : window,
    });

    const handleClick = (event: SyntheticEvent<any>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);

    return (
        <AppBar
            position='fixed'
            sx={ {
                color     : 'black', bgcolor: trigger ? 'white' : 'transparent',
                transition: 'linear 0.5s', width: '100vw',
            } }
            elevation={ 0 }
        >
            <Toolbar variant='dense'>
                <IconButton
                    edge='start'
                    sx={ { mr: 2, color: '#eb3492' } }
                    aria-describedby={ 'menuButton' }
                    onClick={ handleClick }
                >
                    <MenuIcon />
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
                <HomeQualTextTemplate variant='h5' />
            </Toolbar>
        </AppBar>
    );
};

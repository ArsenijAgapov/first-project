import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import s from './NavBarItem.module.css';

const NavBarItem = () => {
    return (
        <List>
            <ListItem component={Link} to='/profile'>
                <ListItemButton>
                    <ListItemIcon>
                        <PeopleOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText className={s.text} primary="Profile" />
                </ListItemButton>
            </ListItem>
            <ListItem component={Link} to='/news'>
                <ListItemButton>
                    <ListItemIcon>
                        <NewspaperOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText className={s.text}  primary="News" />
                </ListItemButton>
            </ListItem>
            <ListItem component={Link} to='/dialogs'>
                <ListItemButton>
                    <ListItemIcon>
                        <EmailOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText className={s.text}  primary="Messages" />
                </ListItemButton>
            </ListItem>
            <ListItem component={Link} to='/users'>
                <ListItemButton>
                    <ListItemIcon>
                        <GroupAddOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText className={s.text}  primary="Users" />
                </ListItemButton>
            </ListItem>
            <ListItem component={Link} to='/music'>
                <ListItemButton>
                    <ListItemIcon>
                        <MusicNoteOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText className={s.text}  primary="Music" />
                </ListItemButton>
            </ListItem>
            <ListItem component={Link} to='/settings'>
                <ListItemButton>
                    <ListItemIcon>
                        <SettingsOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText className={s.text}  primary="Settings" />
                </ListItemButton>
            </ListItem>
        </List>
    );
};

export default NavBarItem
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import VideocamRoundedIcon from '@material-ui/icons/VideocamRounded';
import TurnedInRoundedIcon from '@material-ui/icons/TurnedInRounded';
import ViewModuleRoundedIcon from '@material-ui/icons/ViewModuleRounded';

const Menu = () => {
    const useStyles = {
        'background-color':'#252836'
    }

    const [value, setValue] = React.useState(0);
    return (
        <div>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className='nav'
                style={useStyles}
            >
                <BottomNavigationAction className='nav-item' label="Discover" icon={<HomeRoundedIcon />} />
                <BottomNavigationAction className='nav-item' label="Browse" icon={<VideocamRoundedIcon />} />
                <BottomNavigationAction className='nav-item' label="Bookmarks" icon={<TurnedInRoundedIcon />} />
                <BottomNavigationAction className='nav-item' label="More" icon={<ViewModuleRoundedIcon />} />
            </BottomNavigation>
        </div>
    )
}

export default Menu

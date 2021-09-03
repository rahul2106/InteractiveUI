import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import VideocamRoundedIcon from '@material-ui/icons/VideocamRounded';
import TurnedInRoundedIcon from '@material-ui/icons/TurnedInRounded';
import ViewModuleRoundedIcon from '@material-ui/icons/ViewModuleRounded';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Discover from './Discover';
import Browse from './Browse';
const Menu = () => {
    const useStyles = {
        'background-color': '#252836'
    }

    const [value, setValue] = React.useState(0);
    return (
        <Router>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className='nav'
                style={useStyles}
            >
                <BottomNavigationAction component={Link} to="/" className='nav-item' label="Discover" icon={<HomeRoundedIcon />} />
                <BottomNavigationAction component={Link} exact to="/browse" className='nav-item' label="Browse" icon={<VideocamRoundedIcon />} />
                <BottomNavigationAction component={Link} to="/" className='nav-item' label="Bookmarks" icon={<TurnedInRoundedIcon />} />
                <BottomNavigationAction component={Link} to="/" className='nav-item' label="More" icon={<ViewModuleRoundedIcon />} />
            </BottomNavigation>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
                <Route exact path="/">
                    <Discover />
                </Route>
                <Route exact path="/Browse">
                    <Browse />
                </Route>

            </Switch>
        </Router>
    )
}

export default Menu

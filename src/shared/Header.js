import React from 'react'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
const Header = (props) => {
    const discoverHeader=<header id='discover'><span className='headerLabel'> Discover</span> <SearchOutlinedIcon/></header>;
    const browseHeader=<header className='headerLabel' ><ArrowBackRoundedIcon/><span className='headerLabel'> Browse</span> </header>;
    let head='';
    if(props.label=='Discover')
    {
        head=discoverHeader;
    }
    else{
        head=browseHeader;
    }
    ;

    return (
        <div>
         {head}
        </div>
    )
}

export default Header

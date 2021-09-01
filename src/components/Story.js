import { Avatar } from '@material-ui/core'
import React from 'react'
import avatar1 from '../img/avatar1.png'
import avatar2 from '../img/avatar2.png'
import avatar3 from '../img/avatar3.png'
import avatar4 from '../img/avatar4.png'
import avatar5 from '../img/avatar5.png'
import verified from '../img/verified.png'
import Badge from '@material-ui/core/Badge';
import { makeStyles, withStyles } from '@material-ui/core/styles';
const SmallAvatar = withStyles((theme) => ({
    root: {
      width: 10,
      height: 10,
      
    },
  }))(Avatar);
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
export const Story = () => {
    let avaImg=[avatar1,avatar2,avatar3,avatar4,avatar5]; //can be taken from api.
    const classes = useStyles();
 
    return (
        <div id='storiesSection'>
            {avaImg.map((heading, index) =>
            <div>
               <Badge
        overlap="circular"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        className=''
        badgeContent={<SmallAvatar alt="Remy Sharp" src={verified}  />}
      >
                <Avatar className='story' key={index} src={heading}/></Badge>
            </div>
            
            )}
            {avaImg.map((heading, index) => <Avatar className='story' key={index} src={heading}/>)}
        </div>
    )
}

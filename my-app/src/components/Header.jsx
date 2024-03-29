import React from 'react'

import {AppBar, Toolbar,makeStyles} from '@material-ui/core'
import {Menu} from '@material-ui/icons'


const useStyles = makeStyles({
    header:{
        backgroundColor: '#f6f6f6',
        height: '75px'
    },
    logo:{
      height: '55px',
      margin: 'auto',  
      paddingRight: 70,
    },
    menu:{
        color: '#000',
    },
})

const Header = () => {
    const classes = useStyles()
    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
    return (
        <AppBar className = {classes.header}>
            <Toolbar>
                <Menu className= {classes.menu}/>
                <img src={url} alt="logo" className= {classes.logo} />
            </Toolbar>
        </AppBar>
    )
}

export default Header

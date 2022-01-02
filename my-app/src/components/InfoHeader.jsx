import React from 'react'

import{Box, Typography,makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    container:{
      backgroundColor:'#f44336',
      color:'#ffffff',
      height: '48px',
      display:'flex',
      alignItems:'center',
    },
    text:{
        fontSize:'14px',
        marginLeft:'50px',
        fontWeight:300,
    },
    logo:{
        height:34,
        '&:last-child':{
            margin:'0 50px 0 20px',

        },
    },
})

const InfoHeader = () => {
    const classes = useStyles()

    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';

    return (
        <Box className={classes.container} >
            <Typography className={classes.text}>
            For the best experience use <b>inshorts </b>app on your smartphone
            </Typography>
            <Box style={{marginLeft:'auto'}}>
                <img src={appleStore} alt="appleStore" className={classes.logo} />
                <img src={googleStore} alt="googleStore" className={classes.logo} />
            </Box>
        </Box>
    )
}

export default InfoHeader

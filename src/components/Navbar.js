import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

const Navbar = () => {
    return (
        <AppBar position='fixed'>
            <Toolbar>
                <Typography variant='h6'>Intern Test Kumparan</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar

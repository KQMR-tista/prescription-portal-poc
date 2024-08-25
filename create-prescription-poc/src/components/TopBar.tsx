import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import '../styleSheets/topBar.css'

const pages: string[] = ['PRESCRIBER', 'PRESCRIPTION'];


function TopBar({onSelectionChange}: any) {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleNavBarSelectionChange = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
        onSelectionChange(event.currentTarget.innerText);
    };

    return (
        <AppBar position="static" color="secondary">
            <Container maxWidth="xl"
                       className={'topBar'}
                       sx={{
                           height: '125px'

                       }}
            >
                <Toolbar sx={{paddingTop: '30px', position: 'inherit'}}>
                    <LocalPharmacyIcon fontSize={'large'} className={'icon'}/>
                    <Typography
                        className={'title'}
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                        }}
                    >
                        PRESCRIBER DASHBOARD (POC)
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleNavBarSelectionChange}
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default TopBar;
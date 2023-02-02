import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; 
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import back_card from '../image/back_image/back_image_3.png';

const Result = () => {

    let location = useLocation();
    // console.log(location.state);

    const card_turnover = useRef(null);

    const OnClickImage = (e) => {
        let target_name = e.target.name;
        
        if(target_name == 'turnover') {
            let id = document.getElementById(e.target.id);
            id.style.transform = id.style.transform === '' ? 'rotate(180deg)' : null;
        }
    }
    
    const tiers = [
        {
          title: 'Your First Card',
          buttonText: 'Go to LoveTarrot',
          buttonVariant: 'outlined',
          card_image : back_card,
          category : 'love',
          id : location.state.first_select
        },
        {
          title: 'Your Second Card',
          buttonText: 'Go to MoneyTarrot',
          buttonVariant: 'outlined',
          card_image : back_card,
          category : 'money',
          id : location.state.second_select
        },
        {
          title: 'Your Third Card',
          buttonText: 'Go to HealthTarrot',
          buttonVariant: 'outlined',
          card_image : back_card,
          category : 'health',
          id : location.state.third_select
        },
      ];

    //   console.log(tiers);

    function Copyright(props) {
        return (
          <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
              Amm.co.kr
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      }


    return (
        <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Amm.Tarrot
          </Typography>
          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }} onClick = { OnClickImage } name = 'main'>
            Main
          </Button>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Check The Result
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Can be flipped over or checked as is
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            <Grid
              item
              key={tier.title}
              xs={12}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                  <Box 
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline'
                    }}
                    onClick = { OnClickImage }
                    
                  >
                    <div ref= { card_turnover }>
                    <img src={ tier.card_image } alt='logo' style={ { height : '50vh' } } name = { tier.category } id = { tier.id } /></div>
                  </Box>                
                  <Button fullWidth variant={tier.buttonVariant} onClick = { OnClickImage } name = 'confirm' >
                    Confirm Like This
                  </Button>
                  <Button fullWidth variant={tier.buttonVariant} onClick = { OnClickImage } name = 'turnover' id = { tier.id }>
                    Turn Over And Check
                  </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 4,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}
    </React.Fragment>
    )
}


export default Result;
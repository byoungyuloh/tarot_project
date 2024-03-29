import * as React from 'react';
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
import love_image from '../image/main_image/6_5.png';
import money_image from '../image/main_image/21_4(hidden).png';
import health_image from '../image/main_image/21_2.png';
import { unstable_HistoryRouter, useNavigate } from 'react-router-dom'; 
import { Navigate } from 'react-router-dom';

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

const tiers = [
  {
    title: 'Love',
    buttonText: 'Go to LoveTarrot',
    subheader: '33% picks!',
    buttonVariant: 'outlined',
    card_image : love_image,
    category : 'love'
  },
  {
    title: 'Money',
    subheader: '34% picks!',
    buttonText: 'Go to MoneyTarrot',
    buttonVariant: 'outlined',
    card_image : money_image,
    category : 'money'
  },
  {
    title: 'Health',
    buttonText: 'Go to HealthTarrot',
    subheader: '33% picks!',
    buttonVariant: 'outlined',
    card_image : health_image,
    category : 'health'
  },
];



export default function SelectMenu() {
    let navigate = useNavigate();
    const OnClickImage = (e) => {
        let target_name = e.target.name;
        target_name == 'main' ? navigate('/Main') : navigate('/SelectImage', { state : { 'target_name' : target_name } })
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
          Today's Tarrot
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          What's your issue?
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
            //   sm={tier.title === 'Enterprise' ? 12 : 6}
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
                    <img src={ tier.card_image } alt='logo' style={ { height : '55vh' } } name = { tier.category } /> 
                  </Box>                
                  <Button fullWidth variant={tier.buttonVariant} onClick = { OnClickImage } name = { tier.category }  >
                    {tier.buttonText}
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
  );
}

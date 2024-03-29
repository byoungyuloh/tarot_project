import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import card_image from '../image/main_image/18_8.png';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'; 

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

const theme = createTheme();

export default function Main() {
  let navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    let target_name = event.target.name;
    target_name == 'menu' ? navigate('/SelectMenu') : navigate('/Main')
  };
  return (
    <ThemeProvider theme={theme}>
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
          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }} name='main' onClick={ handleSubmit }>
            Main
          </Button>
          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }} name='menu' onClick={ handleSubmit }>
            Select Menu
          </Button>
        </Toolbar>
      </AppBar>
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Amm's Tarrot
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          JYP~
        </Typography>
      </Container>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            // marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <img src={ card_image } alt='logo' style={ { height : '60vh' } } name = 'menu' onClick={ handleSubmit }/>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={ handleSubmit }
              name='menu'
            >
              Go to Taro
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
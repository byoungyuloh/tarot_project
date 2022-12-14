import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { unstable_HistoryRouter, useLocation, useNavigate } from 'react-router-dom'; 
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import back_card from '../image/back_card.png';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
const random_list = list.sort(() => Math.random() - 0.5)


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


const SelectImage = () => {

  const [spacing, setSpacing] = React.useState(2);

  let navigate = useNavigate();
  const onClick = (e) => {
    let target_name = e.target.name;
    target_name == 'main' ? navigate('/Main') : navigate('/SelectMenu')
  }
  let location = useLocation();
  // menu page 사용자 선택 확인용
  const target_name = location.state.target_name;
  // console.log(target_name);

  const OnClickImage = (e) => {
      console.log(e.target.id);
  }

  
  const [move, setMove] = useState(false);
  const startMove = () => {
    console.log('start');
    setMove(true);
  }
  const endMove = () => {
    setMove(false);
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
          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }} onClick = { OnClickImage } name = 'menu'>
            Select Category
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
          Select Three Image
        </Typography>
      </Container>
      {/* End hero unit */}
      <div style={ { width : '100%' }}>
      <div style={ { width : '35%', float : 'left' }}>
      <Grid sx={{ flexGrow : 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="left" spacing={spacing}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Paper
                sx={{
                  height: '60vh',
                  width: 250,
                  backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? theme.palette.grey[200]
                    : theme.palette.grey[700],
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      </Grid>
      </div>
      <div style={ { width : '60%', float : 'right' }}>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid container item spacing={3} >
          <React.Fragment>
            {random_list.map((random) => (
                  <Grid item xs={1.4} key = { random }>
                  <img src={ back_card } style={ { height : '250px' } }alt='logo' id = { random } onClick = { OnClickImage } className = { move ? 'App-logo' : 'App-stop' } onDragOver={ startMove } onDragEnd = { endMove }/>
                  </Grid>
              ))}
          </React.Fragment>
          </Grid>         
        </Grid>
        </Box>
      </div>
      </div>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
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


export default SelectImage;
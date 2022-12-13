import react from 'react';
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
import love_image from '../image/6_5.png';
import money_image from '../image/21_4(hidden).png';
import health_image from '../image/21_2.png';
import { unstable_HistoryRouter, useLocation, useNavigate } from 'react-router-dom'; 
import { Navigate } from 'react-router-dom';


const SelectImage = () => {
  let navigate = useNavigate();
  const onClick = (e) => {
    let target_name = e.target.name;
    target_name == 'main' ? navigate('/Main') : navigate('/SelectMenu')
  }
  let location = useLocation();
  // menu page 사용자 선택 확인용
  const target_name = location.state.target_name;
  // console.log(target_name);
    return (
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
          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }} name='main' onClick = { onClick }>
            Main
          </Button>
          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }} name='category' onClick = { onClick }>
            Select Category
          </Button>
        </Toolbar>
      </AppBar>
    )
}


export default SelectImage;
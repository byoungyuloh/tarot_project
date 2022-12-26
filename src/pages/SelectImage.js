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
import black_image from '../image/black.jpg';
import select_left from '../image/default_left.png';
import select_center from '../image/default_center.png';
import select_right from '../image/default_right.png';
import { EggTwoTone } from '@mui/icons-material';
import Card from '@mui/material/Card';
import Draggable from "react-draggable";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
const random_num = list.sort(() => Math.random() - 0.5);
const random_list = [
  // 1열
  {
    id : random_num[0],
    left : 993,
    top : 246
  },
  {
    id : random_num[1],
    left : 1243,
    top : 246
  },
  {
    id : random_num[2],
    left : 1493,
    top : 246
  },
  {
    id : random_num[3],
    left : 1743,
    top : 246
  },
  {
    id : random_num[4],
    left : 1993,
    top : 246
  },
  {
    id : random_num[5],
    left : 2243,
    top : 246
  },
  // 2열
  {
    id : random_num[6],
    left : 993,
    top : 496
  },
  {
    id : random_num[7],
    left : 1243,
    top : 496
  },
  {
    id : random_num[8],
    left : 1493,
    top : 496
  },
  {
    id : random_num[9],
    left : 1743,
    top : 496
  },
  {
    id : random_num[10],
    left : 1993,
    top : 496
  },
  {
    id : random_num[11],
    left : 2243,
    top : 496
  },
  // 3열
  {
    id : random_num[12],
    left : 993,
    top : 746
  },
  {
    id : random_num[13],
    left : 1243,
    top : 746
  },
  {
    id : random_num[14],
    left : 1493,
    top : 746
  },
  {
    id : random_num[15],
    left : 1743,
    top : 746
  },
  {
    id : random_num[16],
    left : 1993,
    top : 746
  },
  {
    id : random_num[17],
    left : 2243,
    top : 746
  },
  // 4열
  {
    id : random_num[18],
    left : 993,
    top : 996
  },
  {
    id : random_num[19],
    left : 1243,
    top : 996
  },
  {
    id : random_num[20],
    left : 1493,
    top : 996
  }
]
const styles = {
  select_left : {
    backgroundImage : `url(${select_left})`
  },
  emptyContainer : {
    backgroundImage : `url(${black_image})`
  },
  select_center : {
    backgroundImage : `url(${select_center})`
  },
  select_right : {
    backgroundImage : `url(${select_right})`
  }
}

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

  // navi 기능 구현
  let navigate = useNavigate();
  const onClick = (e) => {
    let target_name = e.target.name;
    target_name == 'main' ? navigate('/Main') : navigate('/SelectMenu')
    if(target_name == 'main') {
      navigate('/Main');
    }
    else if(target_name == 'menu') {
      navigate('/SelectMenu');
    }
    else {
      navigate('/Test');
    }
  }
  let location = useLocation();
  // menu page 사용자 선택 확인용
  const target_name = location.state.target_name;


  const startMove = (e) => {
    e.target.className = 'App-logo';
  }
  const endMove = (e) => {
    e.target.className = '';
  }

  const OnClickImage = (e) => {
    // 현재위치 확인
    img_from_left = e.target.offsetLeft;
    img_from_top = e.target.offsetTop;
    // e.target.className = 'App-logo';
  }

  const [move, setMove] = useState(false);

  let img_from_left = 0;
  let img_from_top = 0;
  let target_x = 0;
  let target_y = 0;
  let targetObj;
  let animation_id;
  let requestedId;
  let orgLeft = 0;
  let orgTop = 0;
  const speed = 0.03;

  let obj_wine = document.getElementById('1');
    // 위치 체크
  // function getLocFromLeft(obj){
  //     return parseInt(obj.target.style.left.replace('px',''));
  // }
  // function getLocFromTop(obj){
  //     return parseInt(obj.style.top.replace('px',''));
  // }

  function getLocFromLeft(e){
    return parseInt(e.target.style.left.replace('px',''));
  }
  function getLocFromTop(e){
    return parseInt(e.target.style.top.replace('px',''));
  }




  // 이미지 이동 함수
  function moveOnDrag(e){
      var event_obj = window.event? window.event : e;
      targetObj.target.style.left = parseInt(event_obj.clientX + (img_from_left) )+ "px";
      targetObj.target.style.top = parseInt(event_obj.clientY + (img_from_top)) + "px";
      // setMove(true);
      return false;
  }
  // 드래그 멈추기
  function stopDrag(e){               
      document.onmousemove = null;
      document.onmouseup = null;               
      // 놓았을 때 원래대로(목표지점) 돌아가기
      // 조건으로 이미지 겹치는 범위에 따라 목적지 및 선택된 항목 분기 등 가능
      requestedId = window.requestAnimationFrame(step);
      // setMove(false);
  }
  // 이미지 단계적 이동
  function step(e){
      // console.log(parseInt(obj_wine.target.style.left) - (target_x), (parseInt(obj_wine.target.style.top)) - (target_y))
      let nowleft = Math.abs(parseInt(obj_wine.target.style.left.replace('px','')));
      let nowtop = Math.abs(parseInt(obj_wine.target.style.top.replace('px','')));
          // 변경로직, 드래그 중단시 원래위치로 즉시이동
          if
          // 현재위치와 이미지 원래 위치 비교조건
              (orgLeft > obj_wine.target.style.left || orgTop > obj_wine.target.style.top)
            {
                // obj_wine.target.style.left = parseInt(obj_wine.target.style.left) + (target_x-parseInt(obj_wine.target.style.left)*speed) + "px";
                // obj_wine.target.style.top = parseInt(obj_wine.target.style.top) + (target_y-parseInt(obj_wine.target.style.top)*speed) + "px";
                obj_wine.target.style.left = orgLeft;
                obj_wine.target.style.top = orgTop;
                requestedId = window.requestAnimationFrame(step);            
            }; 
  }

  function catchDrag(e){
    console.log('drag start');
    console.log(e);
    // var t = e.dataTransfer.setData("text", e.target.id);
    orgLeft = e.target.style.left;
    orgTop = e.target.style.top;
    targetObj = e;
    obj_wine = e;
    let obj = e.target;
    var event_obj = window.event? window.event: e;
    img_from_left = getLocFromLeft(obj) - event_obj.clientX;
    img_from_top = getLocFromTop(obj) - event_obj.clientY;
    document.onmousemove = moveOnDrag;
    document.onmouseup = stopDrag;
    if(event_obj.preventDefault)event_obj.preventDefault();
  }

    function onMouseMove(e) {
      var event_obj = window.event? window.event: e;
      img_from_left = getLocFromLeft(e) - event_obj.clientX;
      img_from_top = getLocFromTop(e) - event_obj.clientY;

      console.log(img_from_left);
      console.log(img_from_top);

      console.log(e.target.style.left);
      // e.target.style.left = parseInt(e.clientX + (img_from_left) )+ "px";
      // e.target.style.top = parseInt(e.clientY + (img_from_top)) + "px";
    }


    function onDragOver(e) {
      e.preventDefault();
      // console.log('on drag over');
      // console.log('image in');
    }


    const [firstImage, setFirstImage] = useState(false);
    const [seconImage, setseconImage] = useState(false);
    const [thirdImage, setthirdImage] = useState(false);

    function onDropImage(e) {
      e.preventDefault();
      console.log(e);
      setFirstImage(!firstImage);
    }


    function allowDrop(e) {
      e.preventDefault();
    }

    // 드래그가 시작되면서 실행되는 이벤트
    function onDragStart(e) {
    }


    // 드래그가 끝난 시점에 이미지 원위치
    function onDragEnd(e) {
      console.log('drag end');
      console.log(e.target)
      // console.log(e);
    }

    // 커서가 이미지에 올라왔을때 이미지 원위치를 저장해둠.
    function onMouseUp(e) {
      orgLeft = e.target.style.left;
      orgTop = e.target.style.top;
      // console.log('org left, top');
      // console.log(orgLeft);
      // console.log(orgTop);
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
          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }} onClick = { onClick } name = 'main'>
            Main
          </Button>
          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }} onClick = { onClick } name = 'menu'>
            Select Category
          </Button>
          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }} onClick = { onClick } name = 'test'>
            image Move Test
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
              <Grid>
              <Paper
                sx={{
                  height: '60vh',
                  width: 250,
                  backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? theme.palette.grey[200]
                    : theme.palette.grey[700],
                }}
                style={ firstImage ? styles.select_left : styles.emptyContainer }
                name = 'firstpaper'
                onDrop = { onDropImage } onDragOver = { onDragOver }
              />
            </Grid>
            <Grid>
              <Paper
                sx={{
                  height: '60vh',
                  width: 250,
                  backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? theme.palette.grey[200]
                    : theme.palette.grey[700],
                }}
                style={ seconImage ? styles.select_center : styles.emptyContainer }
                name = 'secondpaper'
                onDrop = { onDropImage } onDragOver = { onDragOver }
              />
            </Grid>
            <Grid>
              <Paper
                sx={{
                  height: '60vh',
                  width: 250,
                  backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? theme.palette.grey[200]
                    : theme.palette.grey[700],
                }}
                style={ thirdImage ? styles.select_right : styles.emptyContainer }
                name = 'thirdpaper'
                onDrop = { onDropImage } onDragOver = { onDragOver }
              />
            </Grid>
        </Grid>
      </Grid>
      </Grid>
      </div>
      <div style={ { width : '60%', float : 'right' }}>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid container item spacing={2} >
          <React.Fragment>
            {random_list.map((random) => (
                  <div key = { random.id } draggable = 'true'>
                  <img src = { back_card } key = { random.id }
                  style={ { height : '250px', position : 'absolute', left : random.left, top : random.top, cursor : 'pointer'  } } alt='logo'
                  id = { random.id } 
                  onDrag = { onDragStart }
                  onDragEnd = { onDragEnd }
                  onMouseMove = { onMouseUp }
                  />
                  </div>
              ))}
          </React.Fragment>
          </Grid>         
        </Grid>
        </Box>
      </div>
      </div>
      {/* Footer */}
      {/* <Container
        maxWidth="md"
        component="footer"
        sx={{
          mt: 4,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
        </Grid>
      </Container> */}
      {/* <Copyright sx={{ mt: 24 }} /> */}
      {/* End footer */}
    </React.Fragment>
    )
}


export default SelectImage;
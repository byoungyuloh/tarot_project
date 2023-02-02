import React, { useState, useRef, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { useLocation, useNavigate, useParams } from 'react-router-dom'; 
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import back_card from '../image/back_image/back_image_3.png';
import black_image from '../image/main_image/black.jpg';
import select_left from '../image/main_image/default_left.png';
import select_center from '../image/main_image/default_center.png';
import select_right from '../image/main_image/default_right.png';




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
    top : 246,
    reverse : random_num[0] % 2 === 0 ? 'true' : 'false'
  },
  {
    id : random_num[1],
    left : 1243,
    top : 246,
    reverse : random_num[1] % 2 === 0 ? 'true' : 'false'
  },
  {
    id : random_num[2],
    left : 1493,
    top : 246,
    reverse : random_num[2] % 2 === 0 ? 'true' : 'false'
  },
  {
    id : random_num[3],
    left : 1743,
    top : 246,
    reverse : random_num[3] % 2 === 0 ? 'true' : 'false'
  },
  {
    id : random_num[4],
    left : 1993,
    top : 246,
    reverse : random_num[4] % 2 === 0 ? 'true' : 'false'
  },
  {
    id : random_num[5],
    left : 2243,
    top : 246,
    reverse : random_num[5] % 2 === 0 ? 'true' : 'false'
  },
  // 2열
  {
    id : random_num[6],
    left : 993,
    top : 496,
    reverse : random_num[6] % 2 === 0 ? 'true' : 'false'
  },
  {
    id : random_num[7],
    left : 1243,
    top : 496,
    reverse : random_num[7] % 2 === 0 ? 'true' : 'false'
  },
  {
    id : random_num[8],
    left : 1493,
    top : 496,
    reverse : random_num[8] % 2 === 0 ? 'true' : 'false'
  },
  {
    id : random_num[9],
    left : 1743,
    top : 496,
    reverse : random_num[9] % 2 === 0 ? 'true' : 'false'
  },
  {
    id : random_num[10],
    left : 1993,
    top : 496,
    reverse : random_num[10] % 2 === 0 ? 'true' : 'false'
  },
  {
    id : random_num[11],
    left : 2243,
    top : 496,
    reverse : random_num[11] % 2 === 0 ? 'true' : 'false'
  },
  // 3열
  {
    id : random_num[12],
    left : 993,
    top : 746,
    reverse : random_num[12] % 2 === 0 ? 'true' : 'false'
  },
  {
    id : random_num[13],
    left : 1243,
    top : 746,
    reverse : random_num[13] % 2 === 0 ? 'true' : 'false'
  },
  {
    id : random_num[14],
    left : 1493,
    top : 746,
    reverse : random_num[14] % 2 === 0 ? 'true' : 'false'
  },
  {
    id : random_num[15],
    left : 1743,
    top : 746,
    reverse : random_num[15] % 2 === 0 ? 'true' : 'false'
  },
  {
    id : random_num[16],
    left : 1993,
    top : 746,
    reverse : random_num[16] % 2 === 0 ? 'true' : 'false'
  },
  {
    id : random_num[17],
    left : 2243,
    top : 746,
    reverse : random_num[17] % 2 === 0 ? 'true' : 'false'
  },
  // 4열
  {
    id : random_num[18],
    left : 993,
    top : 996,
    reverse : random_num[18] % 2 === 0 ? 'true' : 'false'
  },
  {
    id : random_num[19],
    left : 1243,
    top : 996,
    reverse : random_num[19] % 2 === 0 ? 'true' : 'false'
  },
  {
    id : random_num[20],
    left : 1493,
    top : 996,
    reverse : random_num[20] % 2 === 0 ? 'true' : 'false'
  }
]

const random_fix = random_list.slice(0,9);

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

  // navigate parameter 확인코드
  // 이전 페이지에서 선택한 카테고리 확인용 로직

  let location = useLocation();
  const target_name = location.state.target_name;
  

    function onDragOver(e) {
      e.preventDefault();
    }

    
    const [firstImage, setFirstImage] = useState(false);
    const [seconImage, setSeconImage] = useState(false);
    const [thirdImage, setThirdImage] = useState(false);

    const [temp_second, setTemp_Second] = useState(false);


    // useEffect 참고용 주석
    // doc ready function 대용
    // 1. useEffect(() => {
    //  excute logic
    // }, [])
    // 2. component 변화 감지하여 사용
    // useEffect(() => {
    //  excute logic
    // }, [dependency component name])



    function onDropImage(e) {
      e.preventDefault();
      let paperName = e.target.id;

      if(paperName == 'firstpaper') {
        setTemp_Second(true);
        setFirstImage(true);
      }
      if(paperName == 'secondpaper') {
        setSeconImage(true);
        setTemp_Second(false);
      }
      if(paperName == 'thirdpaper') {
        setThirdImage(true);
        // 마지막 이미지 뒤집어 준 다음 다음화면으로 이동.
        // 다음화면 이동 parameter = result
        
      }
    }
    
    function nextPage() {

      let first_test = document.getElementById(first);
      console.log(first_test);

      navigate('/Result', 
      { state :{  'first_select' : first,
                  'first_reverse' : document.getElementById(first).name,
                  'second_select' : second,
                  'second_reverse' : document.getElementById(second).name,
                  'third_select' : last,
                  'third_reverse' : document.getElementById(last).name,
                  'target_name' : target_name
      }})
    }

    

    // 드래그가 끝난 시점에 이미지 원위치
    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');
    const [last, setLast] = useState('');

    useEffect(() => {
      if(second && last) {
        nextPage();
      }
    },[last])


    useEffect(() => {
      setSpread(false);
    },[first])

    function onDragEnd(e) {
      let value = e.target.id;
      if(firstImage && !seconImage && !thirdImage) {
        setFirst(value);
      }
      else if(firstImage && !thirdImage) {
        setSecond(value);
      }
      else if(firstImage && thirdImage){
        setLast(value);
      }
      // console.log(value);
      let hidden_target = document.getElementById(value);
      hidden_target.style.display = 'none';
    }


    // stackOnClick
    function stackOnClick(e) {
      spreadButton.current.childNodes[0].style.left = '1100px';
      spreadButton.current.childNodes[0].style.top = '296px';
      spreadButton.current.childNodes[1].style.left = '1100px';
      spreadButton.current.childNodes[1].style.top = '296px';
      spreadButton.current.childNodes[2].style.left = '1100px';
      spreadButton.current.childNodes[2].style.top = '296px';
      spreadButton.current.childNodes[3].style.left = '1100px';
      spreadButton.current.childNodes[3].style.top = '296px';
      spreadButton.current.childNodes[4].style.left = '1100px';
      spreadButton.current.childNodes[4].style.top = '296px';
      spreadButton.current.childNodes[5].style.left = '1100px';
      spreadButton.current.childNodes[5].style.top = '296px';
      spreadButton.current.childNodes[6].style.left = '1100px';
      spreadButton.current.childNodes[6].style.top = '296px';
      spreadButton.current.childNodes[7].style.left = '1100px';
      spreadButton.current.childNodes[7].style.top = '296px';
      spreadButton.current.childNodes[8].style.left = '1100px';
      spreadButton.current.childNodes[8].style.top = '296px';
    }
    

    //spreadOnClick
    const spreadButton = useRef(null);
    const divable = useRef(null);


    const [spread, setSpread] = useState(false);


    function spreadOnClick(e) {

      setSpread(true);

      setTimeout(function () {
        spreadButton.current.childNodes[0].style.left = '1300px';
        spreadButton.current.childNodes[0].style.top = '246px';
      }, 150)
      setTimeout(function () {
        spreadButton.current.childNodes[1].style.left = '1700px'
        spreadButton.current.childNodes[1].style.top = '246px';
      }, 300)
      setTimeout(function () {
        spreadButton.current.childNodes[2].style.left = '2100px';
        spreadButton.current.childNodes[2].style.top = '246px';
      }, 450)      
      setTimeout(function () {
        spreadButton.current.childNodes[3].style.left = '1300px';
        spreadButton.current.childNodes[3].style.top = '596px';
      }, 600)
      
      setTimeout(function () {
        spreadButton.current.childNodes[4].style.left = '1700px'
        spreadButton.current.childNodes[4].style.top = '596px';
      }, 750)
      setTimeout(function () {
        spreadButton.current.childNodes[5].style.left = '2100px';
        spreadButton.current.childNodes[5].style.top = '596px';
      }, 900)
      setTimeout(function () {
        spreadButton.current.childNodes[6].style.left = '1300px';
        spreadButton.current.childNodes[6].style.top = '946px';
      }, 1050)
      setTimeout(function () {
        spreadButton.current.childNodes[7].style.left = '1700px'
        spreadButton.current.childNodes[7].style.top = '946px';
      }, 1200)
      setTimeout(function () {
        spreadButton.current.childNodes[8].style.left = '2100px';
        spreadButton.current.childNodes[8].style.top = '946px';
      }, 1350)
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
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 3 }}>
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
        <Grid container justifyContent="center" spacing={spacing}>
              <Grid>
              <h1 style={ { textAlign : 'center' }}>First Card</h1>
              {/* <div style = { firstImage ? { pointerEvents : 'none' } : {} } ref = { divable }> */}
              <div style = { spread? { } : { pointerEvents : 'none' } } id = 'firstdiv' >
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
                id = 'firstpaper'
                value = { first }
                onDrop = { onDropImage } onDragOver = { onDragOver }
              />
              </div>
            </Grid>
            <div style={ { width : '1vh' }}></div>
            <Grid>
            <h1 style={ { textAlign : 'center' }}>Second Card</h1>
            <div style = { temp_second ? {  } : { pointerEvents : 'none' } } ref = { divable }>
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
                id = 'secondpaper'
                value = { second } 
                onDrop = { onDropImage } onDragOver = { onDragOver }
              />
            </div>
            </Grid>
            <div style={ { width : '1vh' }}></div>
            <Grid>
            <h1 style={ { textAlign : 'center' }}>Third Card</h1>
            <div style = { firstImage && seconImage ? { } : { pointerEvents : 'none' } }ref = { divable }>
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
                id = 'thirdpaper'
                value = { last }
                onDrop = { onDropImage } onDragOver = { onDragOver }
              />
              </div>
            </Grid>
        </Grid>
      </Grid>
      </Grid>
      </div>
      <div style={ { width : '60%', float : 'right' }}>
          <div ref = { spreadButton }>
            <div className = 'card' ><img src = {back_card} alt = 'cardimage' id = { random_fix[0].id } name = { random_fix[0].reverse } className = 'card_default' onDragEnd = { onDragEnd } /></div>
            <div className = 'card' ><img src = {back_card} alt = 'cardimage' id = { random_fix[1].id } name = { random_fix[1].reverse } className = 'card_default' onDragEnd = { onDragEnd } /></div>
            <div className = 'card' ><img src = {back_card} alt = 'cardimage' id = { random_fix[2].id } name = { random_fix[2].reverse } className = 'card_default' onDragEnd = { onDragEnd } /></div>
            <div className = 'card' ><img src = {back_card} alt = 'cardimage' id = { random_fix[3].id } name = { random_fix[3].reverse } className = 'card_default' onDragEnd = { onDragEnd } /></div>
            <div className = 'card' ><img src = {back_card} alt = 'cardimage' id = { random_fix[4].id } name = { random_fix[4].reverse } className = 'card_default' onDragEnd = { onDragEnd } /></div>
            <div className = 'card' ><img src = {back_card} alt = 'cardimage' id = { random_fix[5].id } name = { random_fix[5].reverse } className = 'card_default' onDragEnd = { onDragEnd } /></div>
            <div className = 'card' ><img src = {back_card} alt = 'cardimage' id = { random_fix[6].id } name = { random_fix[6].reverse } className = 'card_default' onDragEnd = { onDragEnd } /></div>
            <div className = 'card' ><img src = {back_card} alt = 'cardimage' id = { random_fix[7].id } name = { random_fix[7].reverse } className = 'card_default' onDragEnd = { onDragEnd } /></div>
            <div className = 'card' ><img src = {back_card} alt = 'cardimage' id = { random_fix[8].id } name = { random_fix[8].reverse } className = 'card_default' onDragEnd = { onDragEnd } /></div>
        </div>
          <div>
          <Button variant = 'outlined' onClick = { spreadOnClick } >Spread</Button>
          <Button variant = 'outlined' onClick = { stackOnClick } style = { { marginLeft : '10px' }}>Stack</Button>
          </div>
      </div>
      </div>
    </React.Fragment>
    )
}


export default SelectImage;
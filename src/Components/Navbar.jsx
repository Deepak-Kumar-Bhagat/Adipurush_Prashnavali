import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from "react-router-dom";

import ramlogo from '../images/ramlogo.png';
import { textAlign } from '@mui/system';
import { Badge, Modal, Stack, TextField } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {Audio} from "react-loader-spinner";
import {Songslist} from './Songs';
import "../css/universal.css"; 
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import {auth} from '../firebase';
import {db} from '../firebase';
import {signInWithEmailAndPassword,signOut} from 'firebase/auth'
import { collection, getDocs } from 'firebase/firestore';

// const pages = ['Home', 'About', 'Contact Us'];
const settings = ['Logout'];


function Navbar({user,noticount,setnoticount}) { 

        const login = JSON.parse(localStorage.getItem('login'));
        // console.log(login);

        const Navigate=useNavigate();
        
        const [pages,setpages]=useState([]);

        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

        const [anchorElNav, setAnchorElNav] = React.useState(null);
        const [anchorElUser, setAnchorElUser] = React.useState(null);

        const handleOpenNavMenu = (event) => {
            setAnchorElNav(event.currentTarget);
        };
        const handleOpenUserMenu = (event) => {
            setAnchorElUser(event.currentTarget);
        };

        const handleCloseNavMenu = () => {
            setAnchorElNav(null);
        };

        const handleCloseUserMenu = () => {
            setAnchorElUser(null);
        };

        const SelectOption=(page)=>{
          // console.log(page);  
          if(page=="Home"){
             Navigate('/');
          } 
          else if(page=="About"){
             Navigate('/about');
          }
          else if(page=="Contact Us"){
             Navigate('/contact')
          }
          else if(page=="Message"){
             Navigate('/message')
          }  
        }
    
  const [plank,setplank]=useState(true);

  useEffect(()=>{

    if(login==true){
      let temp=['Home', 'About', 'Message'];
      setpages(temp);
    }
    else{
     let temp=['Home', 'About', 'Contact Us'];
     setpages(temp);
    }
  },[plank]);

    const audioEle=useRef();
    const [currSong,setcurrSong]=useState("");
     const [currSongTitle,setcurrSongTitle]=useState("");
    const [trigger,settrigger]=useState(false);

  useEffect(()=>{
    setcurrSong(Songslist[0].src);
    setcurrSongTitle(Songslist[0].title);
  },[]);

  const SetCurrentSong=(idx)=>{
      setcurrSongTitle(Songslist[idx].title);
      setcurrSong(Songslist[idx].src);
  }

  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const [error,seterror]=useState(false);

  const handleLogin= ()=>{

    signInWithEmailAndPassword(auth, email, password) 
    .then(() => { 
      handleClose()
      localStorage.setItem("login",true);
      setplank(!plank);
      Navigate('./message');
      setemail("");
      setpassword("");
    })
    .catch((error) => {
      seterror(true);
      setTimeout(()=>{
        seterror(false);
    },2000);
      setemail("");
      setpassword("");
    });
  }

  const handleLogout= ()=>{
     
    signOut(auth).then(() => {
      console.log("Signed out Successfully!!");
      localStorage.setItem("login",false);
      setplank(!plank);
      Navigate('/');
    }).catch((error) => {
      console.log(error.message);
    });

  }

  // for updating Count of messages for the first time
  const readCount= async ()=>{

        let arr=[];
        const querySnapshot = await getDocs(collection(db, "users"));

        querySnapshot.forEach((doc) => {
        let obj={
            id:doc.id,
            data:doc.data()
        }
        arr.push(obj);
        });
        
        let count=0;
        for(let i=0;i<arr.length;i++){

            if(arr[i].data.read==false){
               count=count+1;
            }
        }
        setnoticount(count);
    }
  
  useEffect(()=>{
    readCount();
  },[])

  return (
    <div>
    <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none',marginTop:"20px",backgroundColor:"rgba(248, 250, 252,.7)"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box>
             <img src={ramlogo} style={{width:"100px",margin:"0px 0px 0px 0px"}}></img>
             <Typography
           
            sx={{
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#800000',
              textDecoration: 'none',
              textAlign:"center",
              fontSize:"10px",
              margin:"-5px 0px 0px 0px"
            }}
          >
            PRASHNAVALI
          </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{color:"#ff8c00",margin:"0px 0px 0px 10px"}}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" className="navoption" sx={{color:"#ff8c00"}} onClick={()=>SelectOption(page)}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={()=>{handleCloseNavMenu();SelectOption(page)}}
                sx={{mx:1,color: '#ff8c00', display: 'block',fontWeight:"600",fontFamily: 'roboto',fontSize:"20px" }}
                className="navoption"
              >
                {page}
              </Button>
            ))}
          </Box> 
          
          {user &&
          <Box sx={{marginRight:"30px",marginTop:"0px"}}>
            <IconButton size="large" aria-label="show 17 new notifications" sx={{color:"#ff8c00"}}>
              <Badge badgeContent={noticount} color="error">
                <NotificationsIcon sx={{width:"37px",height:"37px"}}/>
              </Badge>
            </IconButton>
          </Box>
          }

          <Box sx={{ flexGrow: 0}}>
            <Tooltip title="Admin Login" >
              <IconButton onClick={user && login?handleOpenUserMenu:handleOpen} sx={{ p: 0  }}>
                <Avatar alt="A" src="/static/images/avatar/2.jpg" sx={{backgroundColor:"#ff8c00",opacity:"0.7","&:hover": {backgroundColor: '#ff4500',boxShadow:"0px 0px 5px #800000"} }}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top', 
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              handleOpenUserMenu
              >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu} sx={{}}>
                  <Typography textAlign="center" sx={{color:"#ff8c00"}} onClick={handleLogout}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>

      {/* Music List */}
      <Box sx={{width:"20%",textAlign:"right",position:"absolute",top:"18%",right:"0%",zIndex:"1"}}>
              <Accordion sx={{width:"100%",boxShadow:"0px 0px 3px lightgray"}}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{color:"#ff8c00","&:hover": {color: '#ff4500'}}}/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                <Stack sx={{}}>
                  <Stack direction="row" sx={{width:"100%",alignItems:"center",paddingLeft:"15px"}}>
                  <Typography sx={{color:"#ff4500",fontWeight:"500",fontFamily:"Poppins",fontSize:"1.1rem",paddingRight:"20px"}}>{currSongTitle}</Typography>
                  <Audio 
                    height="15"
                    color="orange"
                    secondaryColor='red'
                    ariaLabel='loading'
                    width="20"
                  />
                  </Stack> 

                  <Box sx={{width:"80%",display:"flex",marginTop:"5px"}}>
                      <audio className='audio' controlsList="nodownload noplaybackrate" src={currSong} 
                      // ref={audioEle}
                      controls loop autoPlay
                    >
                  </audio>
                  </Box>   

                </Stack>
                  
                </AccordionSummary>

                <AccordionDetails>
                
                  {Songslist.map((ele,idx)=>{
                    return(
                      <Stack direction="row" sx={{width:"100%",display:"flex",alignItems:"center",marginBottom:"5px",boxShadow:"0px 0px 3px orange",cursor:"pointer","&:hover": {backgroundColor: '#ff4500',boxShadow:"0px 0px 5px #800000",opacity:"0.7"}}} onClick={()=>{SetCurrentSong(idx)}}>

                      {currSongTitle==ele.title && 
                      <Box sx={{color:"1px solid red",margin:"0px -35px 0px 20px"}}>
                        <Audio 
                          height="15"
                          color="orange"
                          secondaryColor='red'  
                          ariaLabel='loading'
                          width="15"
                        />
                      </Box>
                      }
                        <Typography sx={{width:"100%",textAlign:"center",color:"#ff8c00",fontWeight:"500",fontFamily:"Poppins",fontSize:"1.1rem","&:hover":{color:"white"}}}>{ele.title}</Typography>
                      </Stack>
                    )
                  })}

                </AccordionDetails>
              </Accordion>
            </Box>
    </AppBar>

    {/* Login Modal */}
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{position: 'absolute',
             top: '50%',
             left: '50%',
             transform: 'translate(-50%, -50%)',
             width: "25%",
             bgcolor: 'white',
             border: '2px solid white',
             borderRadius:"10px",
             boxShadow: 24,
             pt: 3,
             px: 3,
             pb: 1.5,
             textAlign:"center"
            }}>
           <Typography sx={{color:"#ff4500",fontWeight:"600",margin:"10px 0px 10px 0px",fontSize:"0.8rem"}}>💮|| जय श्री राम ||💮</Typography>
           <Typography sx={{color:"#cb4154",fontWeight:"700",marginBottom:"25px",fontFamily:"Josefin Slab",fontSize:"1.5rem"}}>ADMIN LOGIN</Typography>
           <TextField variant="standard" color="warning" focused placeholder="Email *" required type="email" sx={{Color:'#ff8c00',marginBottom:"25px",width:"80%"}} value={email} onChange={(e)=>{setemail(e.target.value)}}/>
           <TextField variant="standard" color="warning" focused placeholder="Password *" required type="password" sx={{color:'#ff8c00',marginBottom:"25px",width:"80%"}} value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
           {error && <Typography sx={{fontFamily:"Josefin Slab",color:"red"}}>Credentials is wrong !!</Typography>}
            <Box>
              <Button className="questionbox" variant="contained" size="medium" sx={{padding:"7px 30px",margin:"20px 0px 20px 0px",backgroundColor:"#ffa500 ",color:"white","&:hover": {backgroundColor: '#ff8c00',boxShadow:"0px 0px 5px #800000"}}} onClick={handleLogin}>Login</Button>
            </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default Navbar
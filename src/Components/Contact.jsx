import { Box } from '@mui/system';
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from "react-router-dom"; 
import Modal from '@mui/material/Modal';
 
import "../css/universal.css";
import { Button, Input, Stack, TextField, Typography } from '@mui/material'; 
import { useState } from 'react';

import {db} from '../firebase';
import { Timestamp,collection, addDoc } from 'firebase/firestore';


function Contact() { 
 
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name,setname]=useState("");
  const [email,setemail]=useState("");
  const [msg,setmsg]=useState("");  

  const handleChange=async (e)=>{

    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "users"), {
        name: name,
        email: email,
        message: msg,
        read:false,
        time:Timestamp.now()
      });
      setOpen(true);

      setTimeout(()=>{
        setOpen(false);
      },1500);

      }catch (e) {
        console.error("Error adding document: ", e);
      }

    setemail(""); 
    setname("");
    setmsg("");

  }
 
  return ( 
    <div>
        <Box sx={{width:"100%",backgroundColor:"rgba(248, 250, 252,.7)"}}>
            {/* <Navbar/> */}
            <Box className="container" sx={{width:"100%"}}>
                <Box sx={{background:"rgba(248, 250, 252,.7)",textAlign:"center",padding:"4% 3% 3% 3%"}}>
                    <Typography sx={{color:"#ff4500",fontWeight:"600",marginBottom:"20px"}}>💮|| जय श्री राम ||💮</Typography>
                    <Typography sx={{color:"#cb4154",fontWeight:"700",marginBottom:"10px",fontFamily:"Josefin Slab",fontSize:"1.5rem"}}>CONTACT US</Typography>
                    <Typography sx={{color:"#ff4500",fontWeight:"600",marginBottom:"40px",fontFamily:"Josefin Slab",fontSize:"1.4rem"}}>Reach out with any suggestions you have.</Typography>
                    <form onSubmit={(e)=>handleChange(e)}>
                    <Box sx={{display:"flex",justifyContent:"center",margin:"20px 0px 0px 0px"}}>
                      <Stack directio="col" spacing={4} sx={{width:"600px"}}>
                        <TextField variant="standard" color="warning" focused placeholder="Name *" required type="string" sx={{Color:'#ff8c00'}} value={name} onChange={(e)=>{setname(e.target.value)}}/>
                        <TextField variant="standard" color="warning" focused placeholder="Email *" required type="email" sx={{color:'#ff8c00'}} value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                        <TextField variant="standard" color="warning" focused multiline placeholder="Message *" required type="string" sx={{color:'#ff8c00'}} value={msg} onChange={(e)=>{setmsg(e.target.value)}}/>
                      <Box>
                        <Button className="questionbox" variant="contained" size="medium" type='submit' sx={{padding:"7px 20px",marginTop:"20px",backgroundColor:"#ffa500 ",color:"white","&:hover": {backgroundColor: '#ff8c00',boxShadow:"0px 0px 5px #800000"}}}>Send</Button>
                      </Box>
                    </Stack>
                    </Box>
                    </form>
                </Box>
            </Box>
            <Footer/>
        </Box>

        {/* Modal starts Here */}
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
             width: "20%",
             bgcolor: 'white',
             border: '2px solid white',
             borderRadius:"10px",
             boxShadow: 24,
             pt: 3,
             px: 3,
             pb: 1.5,
             textAlign:"center"
            }}>
           <Typography sx={{color:"#ff4500",fontWeight:"600",marginBottom:"10px",fontSize:"0.8rem"}}>💮|| जय श्री राम ||💮</Typography>
          <Typography sx={{color:"#ff4500",fontWeight:"500",marginBottom:"20px",fontFamily:"Poppins",fontSize:"1.2rem"}}>Thank you ! for your valuable suggestion !!</Typography>
        </Box>
      </Modal>
    </div> 
  )
}

export default Contact
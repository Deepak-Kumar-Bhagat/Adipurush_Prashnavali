import { Box } from '@mui/system';
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from "react-router-dom";
 
import "../css/universal.css";
import { Stack, Typography } from '@mui/material'; 

function Instruction() {
  
  const Navigate=useNavigate();     

  return (
    <div>
        <Box sx={{width:"100%",backgroundColor:"rgba(248, 250, 252,.7)"}}>
            {/* <Navbar/> */}
            <Box className="container" sx={{width:"100%"}}>
                <Box sx={{background:"rgba(248, 250, 252,.7)",textAlign:"center",padding:"4% 3% 3% 3%"}}>
                    <Typography sx={{color:"#ff4500",fontWeight:"600",marginBottom:"10px"}}>💮|| जय श्री राम ||💮</Typography>
                    <Typography sx={{color:"#cb4154",fontWeight:"700",marginBottom:"10px",fontFamily:"Josefin Slab",fontSize:"1.5rem"}}>SHREE RAMACHARITAMANAS PRASHNAVALI</Typography>
                    <Typography sx={{color:"#ff4500",fontWeight:"500",marginBottom:"20px",fontFamily:"Poppins",fontSize:"1.1rem"}}>Shri Ram Prashna Shalaka is part of Shri Ram Charit Manas by Saint Goswami Tulsidasa. It is also called shree ram shalaka or sri ram shalaka. In the following square each small square is part of a couplet which reveals answer to your question.</Typography>
                    <Typography sx={{color:"#ff4500",fontWeight:"600",marginBottom:"10px",fontFamily:"Josefin Slab",fontSize:"1.4rem"}}>How to ask a Prashnavali question?</Typography>
                    <Typography sx={{color:"#ff4500",fontWeight:"500",marginBottom:"10px",fontFamily:"Poppins",fontSize:"1.1rem"}}><spam style={{color:"#ff4500",fontWeight:"600"}}>Step 1 : </spam>Close your eyes with a calm mind and meditate on Sri Rama for a few moments. Make your question in your mind.</Typography>
                    <Typography sx={{color:"#ff4500",fontWeight:"500",marginBottom:"10px",fontFamily:"Poppins",fontSize:"1.1rem"}}><spam style={{color:"#ff4500",fontWeight:"600"}}>Step 2 : </spam>Say "Jay Shree Ram" and click anywhere on prashnavali chart with closed eyes.</Typography>
                    <Typography sx={{color:"#ff4500",fontWeight:"500",marginBottom:"20px",fontFamily:"Poppins",fontSize:"1.1rem"}}><spam style={{color:"#ff4500",fontWeight:"600"}}>Step 3 : </spam>Your answer page will load immediately.</Typography>
                    <Typography sx={{color:"#008000",fontWeight:"540",marginBottom:"20px",fontFamily:"Poppins",fontSize:"1.2rem",opacity:"0.8"}}>It is recommended to ask a question with full faith.</Typography>
                    <Typography className="blink" sx={{color:"#cb4154",fontWeight:"600",fontFamily:"Josefin Slab",fontSize:"1.2rem",margin:"20px 5px 0px 5px",cursor:"pointer",marginBottom:"20px"}} onClick={()=>Navigate('/question')}> CLICK TO ASK A QUESTION </Typography>
                </Box>
            </Box>
            <Footer/>
        </Box>
    </div> 
   
  )
}

export default Instruction
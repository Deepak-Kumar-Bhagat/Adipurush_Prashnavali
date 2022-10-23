import { Box } from '@mui/system';
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from "react-router-dom";
 
import "../css/universal.css";
import { Stack, Typography } from '@mui/material'; 


function About() {

  const Navigate=useNavigate(); 
  
  return (
    <div>
        <Box sx={{width:"100%",backgroundColor:"rgba(248, 250, 252,.7)"}}>
            {/* <Navbar/> */}
            <Box className="container" sx={{width:"100%"}}>
                <Box sx={{background:"rgba(248, 250, 252,.7)",textAlign:"center",padding:"4% 5% 3% 5%"}}>

                    <Typography sx={{color:"#ff4500",fontWeight:"600",marginBottom:"20px"}}>💮|| जय श्री राम ||💮</Typography>

                    <Typography sx={{color:"#cb4154",fontWeight:"700",marginBottom:"20px",fontFamily:"Josefin Slab",fontSize:"1.5rem"}}>About Shree Rama Prashnavali</Typography>

                    <Typography sx={{color:"#ff4500",fontWeight:"500",marginBottom:"20px",fontFamily:"Poppins",fontSize:"1.1rem",textAlign:"left"}}><b>Shree Rama Prashnavali</b> or <b>Ramshalaka</b> is an extract from <b>'Shri Ram Charit Manas'</b>, authored by the Saint <b>Goswami Tulsidas</b>. <b>'Shri Ram Charit Manas'</b>, also popularly known as <b>'Ramayana'</b> is a Holy book of <b>Hindus</b>. <b>Ramayana</b> describes the life and times of <b>Lord Rama</b>, the seventh incarnation of <b>Lord Vishnu</b>.</Typography>

                    <Typography sx={{color:"#ff4500",fontWeight:"500",marginBottom:"20px",fontFamily:"Poppins",fontSize:"1.1rem",textAlign:"left"}}><b>Shree Rama Prashnavali</b> is used to get answers to your questions or predict the outcome of endeavors you want to take. The answers / predictions are based on <b>Chopais</b> (couplets) from <b>'Shri Ram Charit Manas'</b> or <b>'Ramayana'</b>.</Typography>

                    <Typography sx={{color:"#ff4500",fontWeight:"500",marginBottom:"30px",fontFamily:"Poppins",fontSize:"1.1rem",textAlign:"left"}}><b>Shree Rama Prashnavali</b> is a 15x15 grid. Each square in the grid has one <b>Akshar</b> (Hindi alphabet) from nine <b>Chopais</b> (couplets) of <b>Shri Ram Charit Manas</b>. As per the procedure laid down in <b>Shri Ram Charit Manas</b>, the user has to close his / her eyes and put his / her finger on the grid. The <b>akshars</b> from every ninth square starting from the square on which finger was placed by the user are taken and joined in a sequence. This forms one <b>Chopai</b> from <b>'Shri Ram Cahrit Manas'</b>. The answer to the question asked is based on the <b>Chopai</b> so formed.</Typography>

                    <Typography sx={{color:"#cb4154",fontWeight:"600",marginBottom:"15px",fontFamily:"Josefin Slab",fontSize:"1.4rem",textAlign:"left"}}>How to Use Shree Rama Prashnavali</Typography>

                    <Typography sx={{color:"#ff4500",fontWeight:"500",marginBottom:"10px",fontFamily:"Poppins",fontSize:"1.1rem",textAlign:"left"}}><spam style={{color:"#ff4500",fontWeight:"600"}}>1. </spam>First remember <b>Lord Shri Rama</b> in your mind and pray him to give answer ( don't disclose the Question to anyone before asking to <b>Shri Rama</b> ).</Typography>

                    <Typography sx={{color:"#ff4500",fontWeight:"500",marginBottom:"10px",fontFamily:"Poppins",fontSize:"1.1rem",textAlign:"left"}}><spam style={{color:"#ff4500",fontWeight:"600"}}>2. </spam>Ask the question in your mind in clear and distinct words.</Typography>

                    <Typography sx={{color:"#ff4500",fontWeight:"500",marginBottom:"10px",fontFamily:"Poppins",fontSize:"1.1rem",textAlign:"left"}}><spam style={{color:"#ff4500",fontWeight:"600"}}>3. </spam>Click once anywhere on the <b>Ramshalaka</b> (15x15 grid) with closed eyes.</Typography>

                    <Typography sx={{color:"#ff4500",fontWeight:"500",marginBottom:"10px",fontFamily:"Poppins",fontSize:"1.1rem",textAlign:"left"}}><spam style={{color:"#ff4500",fontWeight:"600"}}>4. </spam><b>Shree Rama Prashnavali</b> will get you the answer/ prediction to your question according to your click.</Typography>

                    <Typography sx={{color:"#ff4500",fontWeight:"500",marginBottom:"30px",fontFamily:"Poppins",fontSize:"1.1rem",textAlign:"left"}}><spam style={{color:"#ff4500",fontWeight:"600"}}>5. </spam>Click only once as clicking more than once shows lack of faith in <b>God</b>.</Typography>

                     <Typography sx={{color:"#ff4500",fontWeight:"600",marginBottom:"20px",fontFamily:"Poppins",fontSize:"1.1rem",textAlign:"left"}}>Its all about faith in the almighty and faith is tested for only once. So try to avoid the verification by repeating the process again and again. You can take these words for caution.</Typography>

                    <Typography className="blink" sx={{color:"#cb4154",fontWeight:"600",fontFamily:"Josefin Slab",fontSize:"1.4rem",margin:"20px 5px 0px 5px",cursor:"pointer",marginBottom:"20px"}} onClick={()=>Navigate('/')}> Ask your question now with full confidence </Typography>
                </Box>
            </Box>
            <Footer/>
        </Box>
    </div>  
   
  )
}

export default About
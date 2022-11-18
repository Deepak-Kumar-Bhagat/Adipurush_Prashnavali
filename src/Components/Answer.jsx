import { Box } from '@mui/system';
import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {Circles} from "react-loader-spinner";
import {data} from "./data.js";

import "../css/universal.css";
import { Stack, Typography } from '@mui/material';

function Answer() {

    const {key} = useParams();
    let temp={key}.key-1

    const[loading,setloading]=useState(true);  

    setTimeout(()=>{
        setloading(false);
    },2000);


  return (
    <div>
        <Box sx={{width:"100%",backgroundColor:"rgba(248, 250, 252,.7)",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
            {/* <Navbar/> */}
            <Box className="container" sx={{width:"100%",margin:"auto"}}>
                <Box sx={{background:"rgba(248, 250, 252,.7)",display:"flex",flexDirection:"column",textAlign:"center",padding:"6% 4% 3% 4%",justifyContent:'center'}} style={loading?{height:"60vh"}:{height:"auto"}}>
                    {
                   loading?<Box className='flex justify-center mt-16 pt-16 ml-6' sx={{display:"flex",justifyContent:"center",marginTop:"8%"}}>
                                <Circles
                                    // height="100"
                                    // color="#ADD8E6"
                                    color="lightgray"
                                    secondaryColor='#f8f8ff'
                                    //ariaLabel='loading'
                                />
                            </Box>: 
                <Box className=''>
                <Typography sx={{color:"#ff4500",fontWeight:"600",marginBottom:"10px"}}>💮|| जय श्री राम ||💮</Typography>
                <Typography sx={{color:"#cb4154",fontWeight:"700",marginBottom:"10px",fontFamily:"Josefin Slab"}} fontSize={{lg: 25,md: 25,sm: 23,xs: 23}}>SHREE RAMACHARITAMANAS PRASHNAVALI ANSWER</Typography>
                <Typography sx={{color:"#b22222",fontWeight:"600",marginBottom:"10px",fontFamily:"Josefin Slab",opacity:"0.7"}} fontSize={{lg: 25,md: 25,sm: 22,xs: 22}}>Lord Rama's answer to your Question</Typography>
                <Typography sx={{color:"#ff4500",fontWeight:"600",marginBottom:"10px",fontFamily:"Josefin Slab",fontSize:"1.4rem"}}>Answer From {temp<0?"":
                data[temp].kand}</Typography>
                {
                   temp>=0 && data[temp].colour===0?
                   <Typography sx={{color:"#ff0000",fontWeight:"640",marginBottom:"20px",fontFamily:"Poppins",fontSize:"1.2rem",opacity:"0.9"}}>{temp<0?"":
                    data[temp].hstatus}</Typography> :
                    <Typography sx={{color:"#008000",fontWeight:"640",marginBottom:"20px",fontFamily:"Poppins",fontSize:"1.2rem",opacity:"0.8"}}>{temp<0?"":
                    data[temp].hstatus}</Typography> 
                }
                <Typography sx={{color:"#ff4500",fontWeight:"500",marginBottom:"10px",fontFamily:"Poppins",fontSize:"1.1rem"}}><spam style={{color:"#ff4500",fontWeight:"600"}}>चौपाई : </spam>{temp<0?"":
                data[temp].hchaupai}</Typography>
                <Typography sx={{color:"#ff4500",fontWeight:"500",marginBottom:"10px",fontFamily:"Poppins",fontSize:"1.1rem"}}><spam style={{color:"#ff4500",fontWeight:"600"}}>राम चरित मानस में स्थान : </spam>{temp<0?"":
                data[temp].hplace}</Typography>

                {
                   temp>=0 && data[temp].colour===0?
                   <Typography sx={{color:"#ff0000",fontWeight:"640",marginBottom:"20px",fontFamily:"Poppins",fontSize:"1.2rem",opacity:"0.9"}}>{temp<0?"":
                   data[temp].estatus}</Typography> :
                    <Typography sx={{color:"#008000",fontWeight:"640",marginBottom:"20px",fontFamily:"Poppins",fontSize:"1.2rem",opacity:"0.8"}}>{temp<0?"":
                   data[temp].estatus}</Typography> 
                }

                <Typography sx={{color:"#ff4500",fontWeight:"500",marginBottom:"10px",fontFamily:"Poppins",fontSize:"1.1rem"}}><spam style={{color:"#ff4500",fontWeight:"600"}}>The Verse : </spam>{temp<0?"":
                data[temp].echaupai}</Typography>
                <Typography sx={{color:"#ff4500",fontWeight:"500",marginBottom:"10px",fontFamily:"Poppins",fontSize:"1.1rem"}}><spam style={{color:"#ff4500",fontWeight:"600"}}>The Place Of Occurence in Ramcharitmanas : </spam>{temp<0?"":
                data[temp].eplace}</Typography>

            </Box> 
        }
















                    {/* <Typography sx={{color:"#ff4500",fontWeight:"600",marginBottom:"10px"}}>💮|| जय श्री राम ||💮</Typography>
                    <Typography sx={{color:"#cb4154",fontWeight:"700",marginBottom:"10px",fontFamily:"Josefin Slab",fontSize:"1.5rem"}}>SHREE RAMACHARITAMANAS PRASHNAVALI</Typography>
                    <Typography sx={{color:"#ff4500",fontWeight:"500",marginBottom:"20px",fontFamily:"Poppins",fontSize:"1.1rem"}}>Shri Ram Prashna Shalaka is part of Shri Ram Charit Manas by Saint Goswami Tulsidasa. It is also called shree ram shalaka or sri ram shalaka. In the following square each small square is part of a couplet which reveals answer to your question.</Typography>
                    <Typography sx={{color:"#ff4500",fontWeight:"600",marginBottom:"10px",fontFamily:"Josefin Slab",fontSize:"1.4rem"}}>How to ask a Prashnavali question?</Typography>
                    <Typography sx={{color:"#ff4500",fontWeight:"500",marginBottom:"10px",fontFamily:"Poppins",fontSize:"1.1rem"}}><spam style={{color:"#ff4500",fontWeight:"600"}}>Step 1 : </spam>Close your eyes with a calm mind and meditate on Sri Rama for a few moments. Make your question in your mind.</Typography>
                    <Typography sx={{color:"#ff4500",fontWeight:"500",marginBottom:"10px",fontFamily:"Poppins",fontSize:"1.1rem"}}><spam style={{color:"#ff4500",fontWeight:"600"}}>Step 2 : </spam>Say "Jay Shree Ram" and click anywhere on prashnavali chart with closed eyes.</Typography>
                    <Typography sx={{color:"#ff4500",fontWeight:"500",marginBottom:"20px",fontFamily:"Poppins",fontSize:"1.1rem"}}><spam style={{color:"#ff4500",fontWeight:"600"}}>Step 3 : </spam>Your answer page will load immediately.</Typography>
                    <Typography sx={{color:"#008000",fontWeight:"540",marginBottom:"20px",fontFamily:"Poppins",fontSize:"1.2rem",opacity:"0.8"}}>It is recommended to ask a question with full faith.</Typography>
                    <Typography className="blink" sx={{color:"#cb4154",fontWeight:"600",fontFamily:"Josefin Slab",fontSize:"1.2rem",margin:"20px 5px 0px 5px",cursor:"pointer",marginBottom:"20px"}} onClick={()=>Navigate('/question')}> CLICK TO ASK A QUESTION </Typography>
                </Box> */}
            </Box>
            </Box>
            <Footer/>
        </Box>
    </div>
  )
}

export default Answer
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import "../css/universal.css";
import "../css/fontSize.css";
import om from '../images/om.png';


function Footer() {
  return (
    <div>
        <Box className="footer" sx={{}}>
          <Box className="ombox">
            <img src={om} style={{width:"4.375rem"}}></img>
          </Box>  
            <Stack direction="row" className="dialogebox">
                <img src={om} className="omlogo"></img>
                <Box sx={{}}>
                    <Typography sx={{color:"#ff4500",fontWeight:"500",marginBottom:"5px",fontFamily:"Poppins",wordSpacing:"0.5rem",textAlign:"center"}} fontSize={{lg: 17,md: 16,sm: 15,xs: 15}}>योगी के चिंतन मे राम, मानव के मंथन मे राम, तन मे राम, मन मे राम, सृष्टि के कण कण मे राम ।</Typography>
                    <Typography sx={{color:"#ff4500",fontWeight:"500",fontFamily:"Poppins",wordSpacing:"0.5rem",textAlign:"center"}} fontSize={{lg: 17,md: 16,sm: 15,xs: 15}}>आती जाती साँस मे राम, अनुभव मे आभास मे राम, बहे तर्क के पास मे राम, बसते है विश्वास मे राम ।।</Typography>
                </Box>
                <img src={om} className="omlogo"></img>
            </Stack>
            <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",background:"#e7e8e8",}}>
              <Typography sx={{padding:"1% 0% 1% 0%", color:"#b22222",fontFamily:"Poppins"}}><a className="link" style={{cursor:"pointer",textDecoration:"underline"}}>©copyright</a> || <a className="link" style={{cursor:"pointer",textDecoration:"underline"}}>Adipurusham</a></Typography>
            </Box>
        </Box>
    </div>
  )
}

export default Footer
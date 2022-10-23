import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import "../css/universal.css";
import om from '../images/om.png';


function Footer() {
  return (
    <div>
        <Box className="footer" sx={{}}>  
            <Stack direction="row" sx={{justifyContent:"center",alignItems:"center",padding:"1% 0% 1% 0%"}}>
                <img src={om} style={{width:"70px"}}></img>
                <Box sx={{}}>
                    <Typography sx={{color:"#ff4500",fontWeight:"500",marginBottom:"5px",fontFamily:"Poppins",fontSize:"1.1rem",wordSpacing:"0.5rem",textAlign:"center"}}>योगी के चिंतन मे राम, मानव के मंथन मे राम, तन मे राम, मन मे राम, सृष्टि के कण कण मे राम ।</Typography>
                    <Typography sx={{color:"#ff4500",fontWeight:"500",fontFamily:"Poppins",fontSize:"1.1rem",wordSpacing:"0.5rem",textAlign:"center"}}>आती जाती साँस मे राम, अनुभव मे आभास मे राम, बहे तर्क के पास मे राम, बसते है विश्वास मे राम ।।</Typography>
                </Box>
                <img src={om} style={{width:"70px"}}></img>
            </Stack>
            <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",background:"#e7e8e8",}}>
              <Typography sx={{padding:"1% 0% 1% 0%", color:"#b22222",fontFamily:"Poppins"}}><a className="link" style={{cursor:"pointer",textDecoration:"underline"}}>©copyright</a> || <a className="link" style={{cursor:"pointer",textDecoration:"underline"}}>Adipurusham</a></Typography>
            </Box>
        </Box>
    </div>
  )
}

export default Footer
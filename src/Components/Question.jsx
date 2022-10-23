import { Box } from '@mui/system';
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import "../css/universal.css";
import { Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Question() {

  const Navigate=useNavigate();

  let row=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
  let col=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

  let counter=0;
  let letter=-1;

  let searchkey=[{id:1,key:"सु"},{id:2,key:"प्र"},{id:3,key:"उ"},{id:4,key:"बि"},{id:5,key:"हो"},{id:6,key:"मु"},{id:7,key:"ग"},{id:8,key:"ब"},{id:9,key:"सु"},{id:10,key:"नु"},{id:11,key:"बि"},{id:12,key:"घ"},{id:13,key:"धि"},{id:14,key:"इ"},{id:15,key:"द"},
  {id:16,key:"र"},{id:17,key:"रु"},{id:18,key:"फ"},{id:19,key:"सि"},{id:20,key:"सि"},{id:21,key:"रहिं"},{id:22,key:"बस"},{id:23,key:"हि"},{id:24,key:"मं"},{id:25,key:"ल"},{id:26,key:"न"},{id:27,key:"ल"},{id:28,key:"य"},{id:29,key:"न"},{id:30,key:"अं"},
  {id:31,key:"सुज"},{id:32,key:"सो"},{id:33,key:"ग"},{id:34,key:"सु"},{id:35,key:"कु"},{id:36,key:"म"},{id:37,key:"स"},{id:38,key:"ग"},{id:39,key:"त"},{id:40,key:"न"},{id:41,key:"ई"},{id:42,key:"ल"},{id:43,key:"धा"},{id:44,key:"बे"},{id:45,key:"नो"},
  {id:46,key:"त्य"},{id:47,key:"र"},{id:48,key:"न"},{id:49,key:"कु"},{id:50,key:"जो"},{id:51,key:"म"},{id:52,key:"रि"},{id:53,key:"र"},{id:54,key:"र"},{id:55,key:"अ"},{id:56,key:"की"},{id:57,key:"हो"},{id:58,key:"सं"},{id:59,key:"रा"},{id:60,key:"य"},
  {id:61,key:"पु"},{id:62,key:"सु"},{id:63,key:"थ"},{id:64,key:"सी"},{id:65,key:"जे"},{id:66,key:"इ"},{id:67,key:"ग"},{id:68,key:"म"},{id:69,key:"सं"},{id:70,key:"क"},{id:71,key:"रे"},{id:72,key:"हो"},{id:73,key:"स"},{id:74,key:"स"},{id:75,key:"नि"},
  {id:76,key:"त"},{id:77,key:"र"},{id:78,key:"त"},{id:79,key:"र"},{id:80,key:"स"},{id:81,key:"हूँ"},{id:82,key:"ह"},{id:83,key:"ब"},{id:84,key:"ब"},{id:85,key:"प"},{id:86,key:"चि"},{id:87,key:"स"},{id:88,key:"हिं"},{id:89,key:"स"},{id:90,key:"तु"},
  {id:91,key:"म"},{id:92,key:"का"},{id:93,key:"ा"},{id:94,key:"र"},{id:95,key:"र"},{id:96,key:"म"},{id:97,key:"मि"},{id:98,key:"मी"},{id:99,key:"म्हा"},{id:100,key:"ा"},{id:101,key:"जा"},{id:102,key:"हू"},{id:103,key:"हीं"},{id:104,key:"ा"},{id:105,key:"ा"},
  {id:106,key:"ता"},{id:107,key:"रा"},{id:108,key:"रे"},{id:109,key:"री"},{id:110,key:"ह्य"},{id:111,key:"का"},{id:112,key:"फ"},{id:113,key:"खा"},{id:114,key:"जू"},{id:115,key:"ई"},{id:116,key:"र"},{id:117,key:"रा"},{id:118,key:"पू"},{id:119,key:"द"},{id:120,key:"ल"},
  {id:121,key:"नि"},{id:122,key:"को"},{id:123,key:"जो"},{id:124,key:"गो"},{id:125,key:"न"},{id:126,key:"मु"},{id:127,key:"जि"},{id:128,key:"यँ"},{id:129,key:"ने"},{id:130,key:"मनि"},{id:131,key:"क"},{id:132,key:"ज"},{id:133,key:"प"},{id:134,key:"स"},{id:135,key:"ल"},
  {id:136,key:"हि"},{id:137,key:"रा"},{id:138,key:"मि"},{id:139,key:"स"},{id:140,key:"रि"},{id:141,key:"ग"},{id:142,key:"द"},{id:143,key:"न्मु"},{id:144,key:"ख"},{id:145,key:"म"},{id:146,key:"खि"},{id:147,key:"जि"},{id:148,key:"म"},{id:149,key:"त"},{id:150,key:"जं"},
  {id:151,key:"सिं"},{id:152,key:"ख"},{id:153,key:"नु"},{id:154,key:"न"},{id:155,key:"कौ"},{id:156,key:"मि"},{id:157,key:"निज"},{id:158,key:"र्क"},{id:159,key:"ग"},{id:160,key:"धु"},{id:161,key:"ध"},{id:162,key:"सु"},{id:163,key:"का"},{id:164,key:"स"},{id:165,key:"र"},
  {id:166,key:"गु"},{id:167,key:"ब"},{id:168,key:"म"},{id:169,key:"अ"},{id:170,key:"रि"},{id:171,key:"नि"},{id:172,key:"म"},{id:173,key:"ल"},{id:174,key:"ा"},{id:175,key:"न"},{id:176,key:"ढँ"},{id:177,key:"ती"},{id:178,key:"न"},{id:179,key:"क"},{id:180,key:"भ"},
  {id:181,key:"ना"},{id:182,key:"पु"},{id:183,key:"व"},{id:184,key:"अ"},{id:185,key:"ा"},{id:186,key:"र"},{id:187,key:"ल"},{id:188,key:"ा"},{id:189,key:"ए"},{id:190,key:"तु"},{id:191,key:"र"},{id:192,key:"न"},{id:193,key:"नु"},{id:194,key:"वै"},{id:195,key:"थ"},
  {id:196,key:"सि"},{id:197,key:"हूँ"},{id:198,key:"सु"},{id:199,key:"म्ह"},{id:200,key:"रा"},{id:201,key:"र"},{id:202,key:"स"},{id:203,key:"स"},{id:204,key:"र"},{id:205,key:"त"},{id:206,key:"न"},{id:207,key:"ख"},{id:208,key:"ा"},{id:209,key:"ज"},{id:210,key:"ा"},
  {id:211,key:"र"},{id:212,key:"ा"},{id:213,key:"ा"},{id:214,key:"ला"},{id:215,key:"धी"},{id:216,key:"ा"},{id:217,key:"री"},{id:218,key:"ा"},{id:219,key:"हू"},{id:220,key:"हीं"},{id:221,key:"खा"},{id:222,key:"जु"},{id:223,key:"ई"},{id:224,key:"रा"},{id:225,key:"रे"}
  ] 

  return ( 
    <div>
        <Box sx={{width:"100%",backgroundColor:"rgba(248, 250, 252,.7)"}}>
            {/* <Navbar/> */}
            {/* <Typography sx={{color:"#ff4500",fontWeight:"600",marginBottom:"10px"}}>💮|| जय श्री राम ||💮</Typography> */}
            <Box className="container" sx={{width:"100%"}}>
                <Box sx={{background:"rgba(248, 250, 252,.7)",textAlign:"center",padding:"4% 3% 3% 3%",display:"flex",justifyContent:"center"}}>
                    <Box className="questionbox" sx={{borderTop:"4px solid #ff8c00",borderBottom:"2px solid #ff8c00",borderLeft:"4px solid #ff8c00",borderRight:"2px solid #ff8c00",dispaly:"flex",flexDirection:"col"}}>
                        {
                            row.map((ele)=>{
                                return <Box sx={{display:"flex",borderBottom:"2px solid #ff8c00",width:"100%"}}>
                                    {
                                       col.map((val)=>{
                                    return <Box className='letterbox' sx={{borderRight:"2px solid #ff8c00",textAlign:"center",color:"#ff8c00",width:"45px",height:"33px",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"600"}} onClick={()=>{
                                    //setletter(ele*15+val);
                                    letter=ele*15+val;
                                    Navigate(`/answer/${letter}`);
                                }}>{searchkey[counter++].key}</Box>
                            })
                        }
                    </Box>
                   })
                }
                </Box>
                </Box>
            </Box>
            <Footer/>
        </Box>
    </div>
  )
}

export default Question
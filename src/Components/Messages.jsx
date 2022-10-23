import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from "react-router-dom";
 
import "../css/universal.css";
import { Accordion, AccordionDetails, AccordionSummary, Button, CircularProgress, FormControl, InputLabel, MenuItem, Pagination, Select, Stack, TextField, Typography } from '@mui/material'; 
import MessageIcon from '@mui/icons-material/Message';
import SearchIcon from '@mui/icons-material/Search';
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import { GridExpandMoreIcon } from '@mui/x-data-grid';
import Checkbox from '@mui/material/Checkbox';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import {db} from '../firebase';
import { collection, CollectionReference, deleteDoc, doc, getDocs, updateDoc, WriteBatch } from 'firebase/firestore';
import { MarkAsUnread } from '@mui/icons-material';

function Messages({user,setnoticount}) {

    const Navigate=useNavigate();

    const [msg,setmsg]=useState([]);
    const [readcount,setreadcount]=useState();
    const [loading,setloading]=useState();
    const [filtermsg,setfiltermsg]=useState(msg);
    const [trigger,setTrigger]=useState(false);
    const [curpage, setcurpage] = useState(1);
    const [pageRange, setPageRange] = useState([0, 6]);
    const [pages, setPages] = useState([]);
    const [multiplemsg,setMultipleMsg]=useState([]);

    // console.log(multiplemsg);
    console.log(filtermsg);

    useEffect(()=>{
        // console.log(user);
        if(!user){
            Navigate('/');
        }

    },[])

    const nextClick = () => {
    if (
      !(filtermsg.length >= pageRange[0] && filtermsg.length <= pageRange[1])
    ) {
      setcurpage(curpage + 1);
      setPageRange([pageRange[0] + 6, pageRange[1] + 6]);
    }
    };

    const prvClick = () => {
    if (pageRange[0] != 0 && pageRange[1] != 6) {
      setcurpage(curpage - 1);
      setPageRange([pageRange[0] - 6, pageRange[1] - 6]);
    }
    };

    const selectNoofPages=()=>{

        if (filtermsg) {
            let arr = [];
            for (let i = 1;i <=(filtermsg.length % 6 == 0 ? filtermsg.length / 6: filtermsg.length / 6 + 1);i++) {
                    arr.push(i);
                }
                setPages(arr);
        }
    }

    useEffect(()=>{
        selectNoofPages();
    },[filtermsg]);

    const readData= async ()=>{

        let arr=[];
        const querySnapshot = await getDocs(collection(db, "users"));

        querySnapshot.forEach((doc) => {
        let obj={
            id:doc.id,
            data:doc.data()
        }
        // console.log(doc)
        // console.log(`${doc.id} => ${doc.data()}`);
        arr.push(obj);
        });
        
        let count=0;
        for(let i=0;i<arr.length;i++){

            if(arr[i].data.read==false){
               count=count+1;
            }
            let date=new Date(arr[i].data.time.seconds*1000).getDate();
            let currdate= new Date()
            let cDay = currdate.getDate();
            if(date===cDay){
                arr[i].data.time="Today";
            }
            else if((date+1===cDay)||(date===30 || cDay===1) || (date===31 && cDay===1)||(date===28 && cDay===1)){
                arr[i].data.time="Yesterday";
            }
            else{
               arr[i].data.time=new Date(arr[i].data.time.seconds*1000).toDateString(); 
            }
        }

        setmsg(arr); 
        setreadcount(count);
        setnoticount(count);
        setfiltermsg(arr);
        setloading(false);
        selectNoofPages();

    }

    const deleteSelectedData=async (id)=>{
       try{
        //   console.log(id);
          await deleteDoc(doc(db,"users",id));
          setTrigger(!trigger);
       }
       catch(err){
        console.log(err.msg);
       }
    }

    const deleteMultipleData= async ()=>{
        try{
          for(let i=0;i<multiplemsg.length;i++){
            await deleteDoc(doc(db,"users",multiplemsg[i]));
          }
          setTrigger(!trigger);
       }
       catch(err){
        console.log(err.msg);
       }
    }

    useEffect(()=>{
        setloading(true);
        readData();
    },[trigger]);
   
   const [filter,setfilter]=useState("name");
   const [search,setsearch]=useState();
   
   const handleChanged=(e)=>{
      setfilter(e.target.value);
   }
    
   const searchItem=(val)=>{

    if(filter==="name"){
        if(val===""){
            setfiltermsg(msg);
            return;
        }
        let value = val.toLowerCase()
        let result = msg.filter((ele) => {
            return ele?.data?.name?.toLowerCase().includes(value) === true ;
            });
        setfiltermsg([...result])
    }
    else if(filter==="email"){
        if(val===""){
            setfiltermsg(msg);
            return;
        }
        let value = val.toLowerCase()
        let result = msg.filter((ele) => {
            return ele?.data?.email?.toLowerCase().includes(value) === true ;
            });
        setfiltermsg([...result])
    }
      
    }
    
    const checkedMsg=(id)=>{

       console.log(id);
       let temparray=multiplemsg;

       const found = temparray.find(element => {
            return element === id;
        });
        if(found){
            temparray=temparray.filter((ele)=>{
                return ele!=id;
            })
        }
        else{
           temparray.push(id);
        }
        // console.log(temparray);
        setMultipleMsg([...temparray]);
    }

    const MarkAsUnread=(id)=>{

        let updateArray=[];

        for(let i=0;i<filtermsg.length;i++){
            let obj=filtermsg[i];
            console.log(obj);
            if(filtermsg[i].id===id){
                obj.data.read=true;
            }
            updateArray.push(obj);
        }
        console.log("After update: ", updateArray);

        let count=0;
        for(let i=0;i<updateArray.length;i++){

            if(updateArray[i].data.read==false){
               count=count+1;
            }
        }
        setfiltermsg([...updateArray]);
        setreadcount(count);
        setnoticount(count);
        
       const docRef = doc(db, "users", id);

        const data = {
            read: true
        };

        updateDoc(docRef, data)
            .then(docRef => {
            console.log("Value of an Existing Document Field has been updated");
            })
            .catch(error => {
                console.log(error);
            })
    }

    console.log("asasas=====",filter);

  return (
     <div>
        <Box sx={{width:"100%",backgroundColor:"rgba(248, 250, 252,.7)"}}>
            {/* <Navbar/> */}
            <Box className="container" sx={{width:"100%"}}>
                <Box sx={{background:"rgba(248, 250, 252,.7)",textAlign:"center",padding:"4% 3% 3% 3%"}}>
                    <Typography sx={{color:"#ff4500",fontWeight:"600",marginBottom:"10px"}}>💮|| जय श्री राम ||💮</Typography>
                    <Box sx={{textAlign:"left"}}>
                        <Stack direction="row" sx={{display:"flex",justifyContent:"space-around",padding:"10px 20px 10px 20px",flexWrap:"wrap",margin:"25px 0px 20px 0px"}}>

                            <Stack sx={{alignItems:"center",width:"50",margin:"10px 0px 10px 0px"}}>
                                <Typography sx={{color:"#cb4154",fontWeight:"700",marginBottom:"0px",fontFamily:"Josefin Slab",fontSize:"1.5rem",letterSpacing: '.2rem',width:"100%"}}>MESSAGES</Typography>
                                <Typography sx={{color:"#ff4500",fontWeight:"500",marginBottom:"0px",fontFamily:"Poppins",fontSize:"1.1rem",wordSpacing: '.4rem',letterSpacing: '.3rem',width:"100%"}}>{readcount} unread messages</Typography>
                            </Stack>

                            <Stack direction="row" sx={{justifyContent:"center",alignItems:"center",width:"400px",margin:"10px 0px 10px 0px"}}>
                                <TextField variant="standard" color="warning" focused placeholder="Search" required type="string" sx={{Color:'#ff8c00',width:"100%"}} 
                                
                                onChange={(e)=>{searchItem(e.target.value)}}
                                // onChange={searchItem}
                                /> 
                               <SearchIcon sx={{color:"gray"}}/>
                            </Stack>

                            <Stack direction="row" sx={{justifyContent:"center",alignItems:"center",width:"250px",margin:"10px 0px 10px 0px"}}>
                                <TuneOutlinedIcon sx={{ color: "#ff4500",margin:"0px 10px 0px 5px",width:"32px",height:"32px"}} />
                                <Box sx={{textAlign:"center"}}>
                                    <FormControl sx={{ width: "200px" }}>
                                        <InputLabel id="demo-simple-select-label" color="warning" sx={{alignItems:"center"}}>Filter</InputLabel>
                                        <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Filter"
                                        onChange={handleChanged}
                                        color="warning" sx={{color:"#ff4500",alignItems:"center"}}
                                        >

                                            <MenuItem value={"name"} sx={{color:"#ff4500"}}>Name</MenuItem>
                                            <MenuItem value={"email"}  sx={{color:"#ff4500"}}>Email</MenuItem>

                                        </Select>
                                    </FormControl> 
                                </Box>
                            </Stack>
                        </Stack>
                        
                        {multiplemsg?.length!=0 && 
                           <Box>
                            <Button className="questionbox" variant="contained" size="medium" sx={{padding:"7px 30px",margin:"0px 0px 20px 50px",backgroundColor:"#ffa500 ",color:"white","&:hover": {backgroundColor: '#ff8c00',boxShadow:"0px 0px 5px #800000"}}} onClick={deleteMultipleData}>Delete</Button>
                        </Box>
                        }
                {loading?<Stack sx={{ color: 'grey.500',dispaly:"flex",justifyContent:"center",alignItems:"center"}}>
                            <CircularProgress color="inherit" />
                        </Stack>:
                <Stack sx={{}}>
                {filtermsg?.length==0?
                    <Box sx={{textAlign:"center",marginTop:"50px"}}>
                        <Typography sx={{fontSize:"25px",fontWeight:"500",color:"gray",}}>No Matches Found !!</Typography>
                    </Box>:
                    <Box>
                        {filtermsg && filtermsg.map((item, index) => { 
                            if (index >= pageRange[0] && index <= pageRange[1]) {
                                return (
                                <Stack direction="row" sx={{width:"100%",borderRadius: "5px",margin:"0px 0px 10px 0px",background:"#f5f6f8",opacity:"0.7",boxShadow:"0px 0px 5px orange"}} onClick={()=>{MarkAsUnread(item.id)}}>

                                <Accordion sx={{boxShadow: "0",width:"100%",background:"none",justifyContent:"space-between"}}>

                                    <AccordionSummary>
                                        <Stack direction="column" sx={{width:"100%",marginTop:"-8px"}}>
                                            <Stack>
                                                <Typography sx={{fontSize:"10px",textAlign:"right",paddingRight:"30px"}}>{item?.data?.time}</Typography>
                                            </Stack>

                                            <Stack direction="row"sx={{display:"flex",width:"100%",justifyContent:"space-around",flexWrap:"wrap"}}>
                                            
                                            <Stack direction="row" justifyContent="center" alingItems="center" sx={{display:"flex",flexWrap:"wrap",textAlign:"center",padding:"0px 10px 0px 0px"}}>
                                                {item?.data?.read ===false?
                                                    <Box sx={{borderRadius:"50%",width:"10px",height:"10px",border:"1px solid red",marginTop:"22%",background:"red",boxShadow:"0px 0px 5px red"}}></Box>:null
                                                }
                                                <input type="checkbox" onClick={(e)=>{e.stopPropagation();checkedMsg(item?.id)}} style={{color:"orange",margin:"0px 10px 0px 10px"}}></input>
                                                <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid orange",padding:"10px",borderRadius:"50%",background:"#ff8c00",opacity:"0.7",boxShadow:"0px 0px 5px orange"}}>
                                                    <MessageIcon sx={{color:"white"}}/>
                                                </Box>
                                            </Stack>
                                             
                                            <Stack justifyContent="center" alingItems="center" sx={{display:"flex",flexWrap:"wrap",width:"250px",textAlign:"center"}}>
                                                <Typography sx={{color:"#ff4500",fontWeight:"500",fontFamily:"Poppins",fontSize:"1.1rem",textAlign:"center"}}>{item?.data?.name}</Typography>
                                            </Stack>

                                            <Stack justifyContent="center" alingItems="center" sx={{display:"flex",flexWrap:"wrap",width:"300px"}}>
                                                <Typography sx={{color:"#ff4500",fontWeight:"500",fontFamily:"Poppins",fontSize:"1.1rem",textAlign:"center"}}>{item?.data?.email}</Typography>
                                            </Stack>

                                            <Stack justifyContent="center" alingItems="center" sx={{height:"50px",display:"flex",flexWrap:"wrap",width:"400px"}}>
                                                <Typography sx={{height:"100%",color:"#ff4500",fontWeight:"500",fontFamily:"Poppins",fontSize:"1.1rem",textAlign:"center",textOverflow:"ellipsis",overflow:"hidden"}}>{item?.data?.message}</Typography>
                                            </Stack>

                                        </Stack>

                                        </Stack>

                                    </AccordionSummary>

                                    <AccordionDetails>

                                       <Stack sx={{margin:"0% 10% 2% 3%"}}>
                                           <Typography sx={{marginBottom: "5px",color:"#ff4500",fontWeight:"600",fontFamily:"Josefin Slab",fontSize:"1.5rem",letterSpacing: '.2rem'}}>Message</Typography>
                                            <Typography sx={{color:"#ff4500",fontFamily:"Josefin Slab",fontSize:"1.1rem"}}>{item?.data?.message}</Typography>
                                       </Stack>

                                       <Box sx={{textAlign:"right"}}>
                                            <Button className="questionbox" variant="contained" size="medium" sx={{padding:"7px 30px",margin:"10px 35px 10px 0px",backgroundColor:"#ffa500",color:"white","&:hover": {backgroundColor: '#ff8c00',boxShadow:"0px 0px 5px #800000"}}} onClick={()=>{deleteSelectedData(item?.id)}}>Delete</Button>
                                       </Box>
                        
                                    </AccordionDetails>

                                </Accordion>
                            </Stack>
                           );
                        }
                    }
                )
            }
        </Box>
        }
        </Stack>}

    </Box>
    
    {filtermsg?.length!=0 &&
       <Box sx={{display:"flex",justifyContent:"center",margin:"35px 0px 10px 0px"}}>
           
          <Box sx={{ display: "flex", justifyContent: "right" }}>
            {filtermsg.length!=0 && 
            <Button variant="contained" sx={{background:"#ffa500","&:hover": {backgroundColor: '#ff8c00',boxShadow:"0px 0px 5px #800000"}}}
              onClick={prvClick}>
                <ArrowBackIosIcon fontSize="small" />
                <Box sx={{ textTransform: "capitalize" }}>Previous</Box>
            </Button>}

            <Box sx={{background: "#E3E4EB",display: "flex",placeItems: "center",margin: " 0 10px",borderRadius: "5px"}}>
                <Box sx={{background: `white`,color: "#ffa500",width: "30px",borderRadius: "5px",margin: "0 10px",display: "grid",placeItems: "center",fontWeight:"500"}}>{curpage}</Box>
                <Box sx={{color: "#ff4500",width: "30px",borderRadius: "5px",margin: "0 0px",display: "grid",placeItems: "center",fontWeight:"500"}}>of</Box>
                <Box sx={{background: `white`,color: "#ffa500",width: "30px",borderRadius: "5px",margin: "0 10px",display: "grid",placeItems: "center",fontWeight:"500"}}>{pages?.length}</Box>
            </Box>

            {filtermsg.length!=0 && 
                <Button variant="contained" sx={{width:"100px",background:"#ffa500","&:hover": {backgroundColor: '#ff8c00',boxShadow:"0px 0px 5px #800000"}}}
                    onClick={nextClick}>
                    <Box sx={{ textTransform: "capitalize" }}>Next</Box>
                    <ArrowForwardIosIcon fontSize="small" />
                </Button>
            }
          </Box>
        </Box>
    }
    
    





                </Box>
            </Box>
            <Footer/>
        </Box>
    </div> 
  ) 
}

export default Messages
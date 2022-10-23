import { useEffect } from 'react';
import { useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import About from './Components/About';
import Answer from './Components/Answer';
import Contact from './Components/Contact';
import Instruction from './Components/Instruction';
import Messages from './Components/Messages';
import Navbar from './Components/Navbar';
import Question from './Components/Question';

import {auth} from './firebase';



function App() {

  const [user,setuser]=useState(null);
  const [noticount,setnoticount]=useState();
  
  useEffect(()=>{

   auth.onAuthStateChanged((user)=>{
    if(user){
      setuser(user);
    }
    else{
      setuser(null);
    }
   })

  },[])

  return (
  <div className="App">  
   
    <BrowserRouter>
      <Navbar user={user} noticount={noticount} setnoticount={setnoticount}/>
      <Routes>
        <Route exact path="/" element={<Instruction/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/question" element={<Question/>}/>
        <Route exact path="/answer/:key" element={<Answer/>}/>
        <Route exact path="/answer" element={<Answer/>}/>
        <Route exact path="/message" element={<Messages user={user} setnoticount={setnoticount}/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;

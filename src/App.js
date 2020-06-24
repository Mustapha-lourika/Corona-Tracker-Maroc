import React, { useState,useEffect} from 'react';
import './App.css';
import {Cards,Chart,FooterPage,CardT} from './components';
import {fetchData} from './api';

import styles from './App.css';
import imageCovid from './images/corona.jpg'; 

class App extends React.Component{
  state={
    data:{},
    country:'',
  
  }
 

  render(){
   

    //console.log("okay")
    return(
      <div className="container">
        <div className="con">
        الحالة الوبائية بالمغرب
        </div>
 <img className="imgContainer" src={imageCovid} alt="covid" />
 <CardT/>
 <hr/>
<Cards/>

<Chart />
<div className="margi">

<FooterPage   />
</div>

      </div>
    )
  }
}
export  default App;
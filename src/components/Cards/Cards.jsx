import React, { useState,useEffect} from 'react';
import {Card,CardContent,Typography,Grid}  from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
  
import styles from './Cards.module.css';
import { covidReg } from '../../api';
const Cards=()=>{
    const [dailyDataReg,setDailyDataReg]=useState([]); 
    useEffect(()=>{
        const fetchAPI=async ()=>{
           setDailyDataReg(await  covidReg());
        }
        fetchAPI();
    },[]);
    console.log("daily",dailyDataReg);
    const grid=dailyDataReg.map((reg)=>

        <Grid key={reg.RegionFr}  alignItems='center'  item component={Card} xs={12} md={3}  className={cx(styles.card,styles.infected)}>
            <CardContent> 

<Typography paragraph	  variant="h5" className={styles.rl}  color="primary" gutterBottom>   {reg.RegionAr} </Typography>
<hr/>
<Typography paragraph	 variant="h5"   color='textPrimary' gutterBottom> 

  {reg.RegionFr}
   </Typography>
<hr/>


             <Typography paragraph	 className={styles.rl}  variant="h5">الحالات المؤكدة:
             <CountUp start={0} end={reg.Cases}   duration={2} /> 
      </Typography>
           
             </CardContent>
        
         </Grid>

    )

  
return (
   
    <div className={styles.container}>
 <div className={styles.cols}> 
           جدول توزيع الحالات حسب الجهات
           </div>
 <Grid container spacing={3}   justify="center">
{grid}
</Grid>
</div>
)
}
export default Cards;
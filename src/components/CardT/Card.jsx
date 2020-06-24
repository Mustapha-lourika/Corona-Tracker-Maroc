import React , { useState,useEffect}from 'react';
import {Card,CardContent,Typography,Grid}  from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import { covid2 } from '../../api';
  
import styles from './Cards.module.css';
const CardT=()=>{
  
    const [da,setDa]=useState({confirmed:0,recovered:0,deaths:0,negative:0,date:0}); 
    useEffect(()=>{
        const fetchAPI=async ()=>{
            setDa(await  covid2());
        }
        fetchAPI();
    },[]);
    console.log("oooook",da);
 
return (
    <div className={styles.container}>
<Grid item container spacing={3}  justify="center">
<Grid  item   component={Card} md={4} xs={12} className={cx(styles.card,styles.infected)}>
    <CardContent> 
        <Typography  variant="h5"  className={styles.ar} color="primary">الحالات المؤكدة</Typography>
        <CountUp start={0} end={da.confirmed}   duration={2} separator=" "/> 
               <Typography color="textSecondary">  آخر تحديث:{ new Date(da.date).toLocaleDateString('en-GB')} </Typography>
               <Typography style={{color:'white'}}> ssssssssssssssssssssssssssssssssss </Typography>

    </CardContent>

</Grid>
<Grid item component={Card}  md={4} xs={12}   className={cx(styles.card,styles.recovered)}>
    <CardContent>
        <Typography variant="h5" color="primary" className={styles.ar} >المتعافون</Typography>
        <CountUp start={0} end={da.recovered} duration={2} separator=" "/> 
               <Typography color="textSecondary"> آخر تحديث:  { new Date(da.date).toLocaleDateString('en-GB')} </Typography>
               <Typography style={{color:'white'}}> sssssssssssssssss</Typography>

    </CardContent>

</Grid>
<Grid item component={Card}  md={4} xs={12}  className={cx(styles.card,styles.deaths)}>
    <CardContent>
        <Typography variant="h5" className={styles.ar}  color="primary">الوفيات</Typography>
        <CountUp start={0} end={da.deaths} duration={2} separator=" "/> 
               <Typography color="textSecondary">  آخر تحديث: { new Date(da.date).toLocaleDateString('en-GB')} </Typography>
               <Typography style={{color:'white'}}>sssssssssssssssssssss </Typography>

    </CardContent>

</Grid>
<Grid item component={Card}  md={4}  xs={12}  className={cx(styles.card,styles.negative)}>
    <CardContent>
        <Typography variant="h5"   className={styles.ar} color="primary">الحالات المستبعدة</Typography>
        <Typography variant="body1" style={{margin :'6px'}}>
            <CountUp  start={0} end={da.negative} duration={2} separator=" "/> 
            </Typography> 
               <Typography color="textSecondary"> آخر تحديث:  { new Date(da.date).toLocaleDateString('en-GB')} </Typography>
               <Typography style={{color:'white'}}> sssssssssssssssss </Typography>

    </CardContent>

</Grid>
</Grid>
    </div>
)
}
export default CardT;
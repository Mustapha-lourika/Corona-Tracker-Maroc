import React, { useState,useEffect} from 'react'
import { fetchDailyData,covid} from '../../api';
import {Line,Bar} from 'react-chartjs-2';
import styles from './Chart.module.css'

const Chart=()=>{
    const [dailyData,setDailyData]=useState([]); 
    useEffect(()=>{
        const fetchAPI=async ()=>{
           setDailyData(await  covid());
        }
        fetchAPI();
    },[]);
    console.log(dailyData);


    const lineChart=(
        dailyData.length? ( <Line data={{
            labels:dailyData.map(({date})=> new Date(date).toLocaleDateString('en-GB')),
            datasets:[{
                data:dailyData.map(({confirmed})=> confirmed),
                label:'المصابون',
                borderColor:'blue',
                fill:true,

            },{ 
                data:dailyData.map(({deaths})=> deaths),
                label:'الوفيات',
                borderColor:'red',
                backgroundColor: 'rgba(255,0,0,0.5)',
                fill:true,

            },{ 
                data:dailyData.map(({recovered})=> recovered),
                label:'المتعافون',
                borderColor:'green',
                fill:true,

            }],
        }}
        />):null

    );

return (
    <div className={styles.container}>
{lineChart}
</div>
)
}
export default Chart;
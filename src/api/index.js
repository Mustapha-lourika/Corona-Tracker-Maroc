import axios from 'axios';

    export  const  covid =async ()=>{
        try{
            const {data:{features}}=await axios.get("https://services3.arcgis.com/hjUMsSJ87zgoicvl/arcgis/rest/services/Covid_19/FeatureServer/5/query?where=1%3D1&outFields=*&outSR=4326&f=json");
            const modifierData2=features.map((dailyData)=>({
                confirmed: dailyData.attributes.Cas_confirmés,
                recovered: dailyData.attributes.Retablis,
                deaths: dailyData.attributes.Décédés,
                date: dailyData.attributes.Date,
            }))
            return modifierData2;
        }
        catch(error){
            console.log(error);
        }
    
}
export  const  covid2 =async ()=>{
    try{
        const {data:{features}}=await axios.get("https://services3.arcgis.com/hjUMsSJ87zgoicvl/arcgis/rest/services/Covid_19/FeatureServer/5/query?where=1%3D1&outFields=*&outSR=4326&f=json");
        const modifierData3=features.map((dailyData)=>({
            confirmed: dailyData.attributes.Cas_confirmés,
            recovered: dailyData.attributes.Retablis,
            deaths: dailyData.attributes.Décédés,
            date: dailyData.attributes.Date,
            negative:dailyData.attributes.Negative_tests

        }))
        return modifierData3[modifierData3.length-1];
    }
    catch(error){
        console.log(error);
    }

}
export  const  covidReg =async ()=>{
    try{
        const {data:{features}}=await axios.get("https://services3.arcgis.com/hjUMsSJ87zgoicvl/arcgis/rest/services/Covid_19/FeatureServer/7/query?where=1%3D1&outFields=OBJECTID_1,RegionFr,RegionAr,Cases,Deaths,Recoveries&outSR=4326&f=json");
        const modifierData3=features.map((dailyData)=>({
            RegionFr: dailyData.attributes.RegionFr,
            RegionAr: dailyData.attributes.RegionAr,
            Cases:dailyData.attributes.Cases,
            Deaths: dailyData.attributes.Deaths,
            Recoveries: dailyData.attributes.Recoveries,
        }))
        return modifierData3;
    }
    catch(error){
        console.log(error);
    }

}
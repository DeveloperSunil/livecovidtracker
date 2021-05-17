import React, { useEffect, useState } from 'react';
import './covid.css';
const Covid = () =>{
    const [data,setData] = useState([]);
    const getCovidData = async () =>{
        try{
            const res =  await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
         }catch(err) {
            console.log(err);
         }
    }
    
    useEffect(()=>{
        getCovidData();
    },[]);
    return(
        <>
        <section>
            <h1>LIVE</h1>
            <h2>COVID-19 CORONAVIRUS TRACKER</h2>
            <div className="container">
                    <div className="first">
                        <p className="card-name"><span>OUR</span>COUNTRY</p>
                        <p className="card-total">INDIA</p>
                    </div>

                    <div className="first">
                        <p className="card-name"><span>TOTAL</span> RECOVERED</p>
                        <p className="card-total">{data.recovered}</p>
                    </div>

                    <div className="first">
                        <p className="card-name"><span>TOTAL</span>CONFIRMED</p>
                        <p className="card-total">{data.confirmed}</p>
                    </div>

            </div>

            <div className="container2">
                    <div className="first">
                        <p className="card-name"><span>TOTAL</span>DEATHS</p>
                        <p className="card-total">{data.deaths}</p>
                    </div>

                    <div className="first">
                        <p className="card-name"><span>TOTAL</span>ACTIVE</p>
                        <p className="card-total">{data.active}</p>
                    </div>

                    <div className="first">
                        <p className="card-name"><span>LAST</span>UPDATED</p>
                        <p className="card-total">{data.lastupdatedtime}</p>
                    </div>
        </div>
        </section>
        </>
    );
}
export default Covid;
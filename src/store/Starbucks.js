import React,{useEffect,useState} from 'react'
import Portal from '../layout/Portal';
import './Starbucks.css'

function Starbucks() {
    const [data, setData]= useState([])
    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'd6d6d906c1msh434728f5fb3e3f6p1d7396jsn10336eff8d77',
                'X-RapidAPI-Host': 'starbucks-store-data.p.rapidapi.com'
            }
        };
        
        fetch('https://starbucks-store-data.p.rapidapi.com/uk', options)
            .then(response => response.json())
            .then(response => setData(response.stores))
            .catch(err => console.error(err));
      } ,[])
      console.log(data)
      return (
        <Portal>
        <div className="portal-container"> 
        <h2 className="portal-title">Our stores</h2>
            {
              data.map((value)=><div key={value.coordinates.latitude}>
                <div className='container'>
                <h5 className='name'>Name: {value.name}</h5>
                <h6 className='address'><i class='fa fa-thumb-tack'></i> Address: {value.address}</h6>
                </div>
                </div>)
            }
        </div>
        </Portal>
        )
}

export default Starbucks
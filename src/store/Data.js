  import classes from './Data.module.css'
    import React ,{useState, useEffect}from 'react'
    
    function Data(props) {
 
    const [data, setData]= useState([])
    useEffect(()=>{
      const options = {
        method: 'GET',

      };
      fetch('https://api.randomuser.me/?results=3',options)
      .then(res => res.json())
      .then(res=>setData(res.results));
    } ,[])
     

  
      return (

      <div> 
          {
            data.map((value)=><div key={value.login.uuid} className={classes.card}>
              <img src={value.picture.large}/>
              <div className={classes.container}>
              <h5>{value.name.title} {value.name.first}</h5>
              <p className={classes.mail}><i class="fa fa-envelope"></i> {value.email}</p>
              </div>
              </div>)
          }
      </div>
      
      )
    }
    
    export default Data

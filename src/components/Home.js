import React,{Fragment, useState} from "react"
import Navigation from "../layout/Navigation"
import SideNav from "../layout/SideNav"
import Starbucks from "../store/Starbucks"
import classes from "./Home.module.css"
import Grid from "./HomeItems/Grid"
const Home = props => {
const [clicked, setClicked] = useState(false)
const [show, setShow]= useState(false);
const showHandler=()=>{
  console.log("yes")
  setShow(trues=>!trues)
}
const hello =()=>{
setClicked(prevClicked=>!prevClicked)

}
    return <div className={classes.home}>
        <Navigation/>
        <SideNav click={hello} show={showHandler}></SideNav>
        <Grid show={show}/>
       {clicked &&<Starbucks></Starbucks>}
      
        
        
     </div>
}
export default Home


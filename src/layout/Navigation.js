import React,{Fragment} from 'react';
import classes from "./Navigation.module.css"
import logo from "../assets/t.png"
import Time from './Time';
const Navigation=props=>{


    return <Fragment>
        <nav className={classes.nav}>
           <div className={classes.logo}>
                <img src={logo}className={classes.badge}></img>
                <div className={classes.title}>StarbucksBooks</div>
           </div>
           <div className={classes.content}>
                <a href='#'>Home</a>
                <a href='#'>About</a>
                <a href='#'>Contact</a>
           </div>
           <div className={classes.searchTime}>
                <div className={classes.search}>
                <input type="search" placeholder="Search..."></input>
                <button type="submit"><i class="fa fa-search"></i></button>
                </div>
                <div className={classes.time}><Time/></div>
                </div>
        </nav>
    </Fragment>
}
export default Navigation
import React,{Fragment} from 'react';
import classes from './SideNav.module.css'
import Button from './Button'

const SideNav=props=>{


    return <Fragment>
        <div className={classes.sidenav}>
            <Button clicked={props.show} title={<i class="fa fa-save"></i>}></Button>
            <Button title={<i class="fa fa-user"></i>}></Button>
            <Button title={<i class="fa fa-key"></i>}></Button>
            <Button clicked={props.click}title={<i class="fa fa-map-marker"></i>}></Button>
            <Button title={<i class="fa fa-moon-o"></i>}></Button>
        </div>
    </Fragment>
}
export default SideNav;
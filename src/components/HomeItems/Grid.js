import Data from "../.././store/Data.js";
import classes from "./Grid.module.css";
import GridItem from "./GridItem";
import list from "../../store/MainData";
import react, { useState } from "react";
import Cart from "./Cart.js";

const Grid = (props) => {
  const [cart, setCart] = useState([]);

  const clickHandler = (item) => {
  setCart((prev)=>{
    return [...prev, item]; 
  })
  console.log(cart)
  };
  return (
    <div>
      <div className={classes.container}>
        {list.slice(0, 6).map((item) => (
          <GridItem
            className={classes.box}
            key={item.id}
            item={item}
            clickHandler={clickHandler}
          />

        ))}
      </div>
      {props.show&&<Cart cart={cart}></Cart>}
    </div>
  );
};
export default Grid;

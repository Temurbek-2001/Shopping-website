import React from 'react'
import classes from './About.module.css'
import Data from '../../store/Data'
function About() {
  return (
    <div className={classes.about}>
      <h1 className={classes.title}>
        About<span className={classes.us}>Us</span>
      </h1>
      <div className={classes.container}>
        <div className={classes.aboutBody}>
          <div className={classes.one}>
            <h2>Our Heritage</h2>
            <p>
              Our story begins in 1971 along the cobblestone streets of
              Seattle’s historic Pike Place Market. It was here where Starbucks
              opened its first store, offering fresh-roasted coffee beans, tea
              and spices from around the world for our customers to take home.
              Our name was inspired by the classic tale, “Moby-Dick,” evoking
              the seafaring tradition of the early coffee traders. Ten years
              later, a young New Yorker named Howard Schultz would walk through
              these doors and become captivated with Starbucks coffee from his
              first sip. After joining the company in 1982, a different
              cobblestone road would lead him to another discovery. It was on a
              trip to Milan in 1983 that Howard first experienced Italy’s
              coffeehouses, and he returned to Seattle inspired to bring the
              warmth and artistry of its coffee culture to Starbucks. By 1987,
              we swapped our brown aprons for green ones and embarked on our
              next chapter as a coffeehouse.
            </p>
          </div>
        </div>
        <div className={classes.right}>
          <h3>Our Dealers</h3>
          <div className={classes.cards}>
            <Data></Data>
            <Data></Data>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
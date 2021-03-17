import Button from '../ui/button';
import classes from './events-search.module.css';
//UseRef will help us to get the value from the select tags
import { useRef } from 'react';

const EventsSearch = props => {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  //SUBMITHANDLER
  const submitHandler = e => {
    e.preventDefault();

    //get the values from the select inputs with ref
    const yearSelected = yearInputRef.current.value;
    const monthSelected = monthInputRef.current.value;

    //Once we click we trigger the findEventsHandler
    //which is in the /events page (/events/index.js)
    //passed as a prop in the EventSearch component
    props.onSearch(yearSelected, monthSelected);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select name="year" id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Year</label>
          <select name="month" id="month" ref={monthInputRef}>
            <option value="4">April</option>
            <option value="5">May</option>
          </select>
        </div>
      </div>
      <Button>Search</Button>
    </form>
  );
};

export default EventsSearch;

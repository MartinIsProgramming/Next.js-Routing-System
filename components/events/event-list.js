import EventItem from './event-item';
import classes from './event-list.module.css';

const EventList = props => {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map(e => {
        const { title, image, date, location, id } = e;
        return (
          <EventItem
            key={id}
            id={id}
            title={title}
            image={image}
            date={date}
            location={location}
          />
        );
      })}
    </ul>
  );
};

export default EventList;

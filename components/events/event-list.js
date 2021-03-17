import EventItem from './event-item';

const EventList = props => {
  const { items } = props;
  return (
    <ul>
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

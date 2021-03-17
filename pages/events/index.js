import Head from 'next/head';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { getAllEvents } from '../../data/dummy-data';
import { useRouter } from 'next/router';

const AllEventsPage = () => {
  const router = useRouter();
  const events = getAllEvents();

  const findEventsHandler = (year, month) => {
    //this will trigger the [...slug].js
    const fullPath = `/events/${year}/${month}`;

    //push() will direct my site to the selected path
    router.push(fullPath);
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <EventsSearch onSearch={findEventsHandler} />
        <EventList items={events} />
      </main>

      <footer></footer>
    </div>
  );
};

export default AllEventsPage;

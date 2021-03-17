import Head from 'next/head';
import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../data/dummy-data';

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <EventList items={featuredEvents} />
        </div>
      </main>
    </div>
  );
};

export default HomePage;

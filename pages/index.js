import EventList from "../components/events/EventList";
import EventSearch from "../components/events/EventSearch";
import { getFeaturedEvents } from "../dummy-data";
import { useRouter } from "next/router";

function HomePage() {
  const featureEvent = getFeaturedEvents();
  const router = useRouter();
  function findEventsHanlder(year, month) {
    router.push(`/events/${year}/${month}`);
  }
  return (
    <div>
      <EventSearch onSearch={findEventsHanlder} />
      <EventList items={featureEvent} />
    </div>
  );
}

export default HomePage;

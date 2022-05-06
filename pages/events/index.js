import EventList from "../../components/events/EventList";
import { getAllEvents } from "../../dummy-data";


function AllEventsPage() {
  const events = getAllEvents();

  return (
    <div>
      <EventList items={events}/>
    </div>
  );
}

export default AllEventsPage;

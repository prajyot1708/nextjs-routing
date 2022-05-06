import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/results-title";
import { getFilteredEvents } from "../../dummy-data";

function FilterEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }
  const year = +filterData[0];
  const month = +filterData[1];
  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
    return <p>Invalid filter</p>;
  }

  const events = getFilteredEvents({ year, month });
  if (!events || events.length === 0) {
    return <p>No Events Founds</p>;
  }

  const date = new Date(year, month - 1);
  console.log(date)
  return (
    <div>
      <ResultsTitle date={date} />
      <EventList items={events} />
    </div>
  );
}

export default FilterEventsPage;

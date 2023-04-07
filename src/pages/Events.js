import { Link } from "react-router-dom";

const EVENTS = [
	{
		id: 1,
		title: "epic Event 1",
		description: "so Cool",
		date: "2025-01-01",
	},
	{
		id: 2,
		title: "epic Event 2",
		description: "so Cool",
		date: "2025-02-02",
	},
	{
		id: 3,
		title: "epic Event 3",
		description: "so Cool",
		date: "2025-03-03",
	},
	{
		id: 4,
		title: "epic Event 4",
		description: "so Cool",
		date: "2025-04-04",
	},
];

const EventsPage = () => {
	return (
		<div>
			<h1>EventsPage</h1>
            <ul>
                {
                    EVENTS.map(event =>(
                        <li key={event.id}>
                            <h1>
                                {event.title}
                            </h1>
                            <p>{event.description}</p>
                            <p>{event.date}</p>
                            <Link to={`/events/${event.id}`}>
                                <button>
                                    More details
                                </button>
                            </Link>
                        </li>
                    ))
                }
            </ul>
		</div>
	);
};

export default EventsPage;

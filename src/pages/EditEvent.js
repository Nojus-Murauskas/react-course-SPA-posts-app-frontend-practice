import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

const EditEventPage = () => {
	const data = useRouteLoaderData('event-detail'); // uses id to determine which loader to use
	return <EventForm event={data.event}/>;
};

export default EditEventPage;

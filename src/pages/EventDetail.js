import { Link, useParams } from "react-router-dom";

const EventDetailPage = () => {
    const params = useParams();
    return ( 
        <div>
            <h1>
                EventDetailPage
            </h1>
            <p>{params.id}</p>
            <Link to=".." relative='path'><button>Back</button></Link>
            
        </div>
     );
}
 
export default EventDetailPage;
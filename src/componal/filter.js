import { Button } from "react-bootstrap";

function Filter() {
    return (
        <div className="filter row">
            <div className='col-4 btnfilter'><Button variant="outline-secondary">All</Button></div>
            <div className='col-4 btnfilter'><Button variant="outline-secondary">Done</Button></div>
            <div className='col-4 btnfilter'><Button variant="outline-secondary">In-progess</Button></div>
        </div>
    )
}

export default Filter;
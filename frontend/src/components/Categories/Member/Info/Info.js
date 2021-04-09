import { Link } from 'react-router-dom';

const Info = (props) => {
    return (
        <div className="member-info">
            <h4 className="d-inline">
                <Link className="text-dark">{props.name}</Link>
            </h4>
        </div>
    )
}

export default Info;
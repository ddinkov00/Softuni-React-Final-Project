import { Link } from 'react-router-dom'

const Image = (props) => {
    return (
        <div className="member-img">
            <Link to={`/shop/categories/${props.id}`}>
                <img src={props.imageUrl} className="img-fluid categoryImage" alt="" />
            </Link>
        </div>
    )
}

export default Image;
import { Link } from 'react-router-dom'

const Image = (props) => {
    return (
        <div className="member-img portfolio-item">
            <Link to={`/product/${props.id}`}>
                <img src={props.imageUrl} className="img-fluid productImage" alt="Product" />
            </Link>
        </div>
    )
}

export default Image;
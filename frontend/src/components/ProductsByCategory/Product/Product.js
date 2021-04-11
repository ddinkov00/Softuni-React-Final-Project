import { useHistory } from 'react-router'
import Image from './Image/index'
import Info from './Info/index'

const Product = (props) => {
    const history = useHistory()

    const token = localStorage.getItem('token')
    if (token === null) {
        history.push('/login');
    }

    return (
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div className="member">
                <Image imageUrl={props.imageUrl} id={props.id} />
                <Info name={props.name} price={props.price} categoryName={props.categoryName} />
            </div>
        </div>
    )
}

export default Product;
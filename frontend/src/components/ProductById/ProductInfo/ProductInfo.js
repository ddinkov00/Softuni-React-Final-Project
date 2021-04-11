import { useState } from 'react';

const ProductInfo = (props) => {
    const [quantity, setQuantity] = useState(1)

    const incrementQuantityHandler = () => {

    }

    const decreaseCuantityHandler = () => {

    }

    return (
        <div className="col-md-6">
            <h5>{props.name}</h5>
            <p className="mb-4 text-muted text-uppercase small">{props.categoryName}</p>
            <p><span className="mr-1 h4"><strong>{(Math.round(props.price * 100) / 100).toFixed(2)} $.</strong></span></p>

            <hr />

            <p className="text-dark"><strong>In stock now!</strong></p>

            <hr />

            <div className="btn-group col-md-4 col-7" role="group" aria-label="Basic example">
                <button id="minisQuanityProduct" type="button" onClick={decreaseCuantityHandler} className="btn btn-secondary"><i className="icofont-minus"></i></button>
                <input id="productQuantity" type="number" className="form-control text-center" min="1" max="100" value={quantity} />
                <button id="plusQuanityProduct" type="button" onClick={incrementQuantityHandler} className="btn btn-secondary"><i className="icofont-plus"></i></button>
            </div>

            <hr />

            <h5>Total price: <span id="totalSumField" className="text-primary h4">10.00 $</span></h5>

            <button type="button" id="shoppingCartBtn" className="btn-outline-dark btn btn-md mr-1 mb-2"><i className="icofont-shopping-cart">Add to Cart</i></button>
        </div>
    )
}

export default ProductInfo;
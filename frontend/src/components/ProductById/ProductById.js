import { useState, useEffect } from 'react'

import ProductDescription from "./ProductDescription/ProductDescription";
import * as productService from '../../services/productService'
import ProductImage from "./ProductImage.";
import ProductInfo from "./ProductInfo/ProductInfo";
import { useHistory } from 'react-router';

const ProductById = ({ match }) => {
    const history = useHistory()

    const token = localStorage.getItem('token')
    if (token === null) {
        history.push('/login');
    }

    const productId = match.params.id;
    const [product, setProduct] = useState([]);
    useEffect(() => {
        productService.GetById(productId)
            .then(res => setProduct(res));
    }, [productId])

    return (
        <div className="container">
            <div className="row mt-5 mb-5">
                <ProductImage imageUrl={product.imageUrl} />
                <ProductInfo name={product.name} categoryName={product.categoryName} originalPrice={product.price} id={product.id} />
                <ProductDescription description={product.description} />
            </div>
        </div>
    )
}

export default ProductById
import Title from './Title/index'
import Product from './Product/index';
import * as productService from '../../services/productService';

import { useState } from 'react';
import { useEffect } from 'react';

const ProductsByCategory = ({match}) => {
    const categoryId = match.params.categoryId;
    
    const [products, setProducts] = useState([]);
    useEffect(() => {

        productService.GetForList(categoryId)
            .then(res => setProducts(res));
    }, [categoryId])

    const productsList = products.map((p) => 
        <Product key={p.id} name={p.name} imageUrl={p.imageUrl} categoryName={p.categoryName} price={p.price} id={p.id} />
    );

    return (
        <section id="team" className="team section-bg">
            <div className="container">
                <Title categoryid={categoryId} />

                <div className="row">
                    { productsList }
                </div>
            </div>
        </section>
    )
}

export default ProductsByCategory
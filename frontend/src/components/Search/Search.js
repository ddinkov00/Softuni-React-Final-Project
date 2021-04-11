import { useEffect, useState } from 'react'

import Title from '../ProductsByCategory/Title/index'
import Product from '../ProductsByCategory/Product/index'
import * as productService from '../../services/productService'

const Search = ({match}) => {
    const keyword = match.params.keyword;
    
    const [products, setProducts] = useState([]);
    useEffect(() => {

        productService.Search(keyword)
            .then(res => setProducts(res));
    }, [keyword])
    console.log(products);

    const productsList = products.map((p) => 
        <Product key={p.id} name={p.name} imageUrl={p.imageUrl} categoryName={p.categoryName} price={p.price} id={p.id} />
    );

    return (
        <section id="team" className="team section-bg">
            <div className="container">
                <Title />

                <div className="row">
                    { productsList }
                </div>
            </div>
        </section>
    )
}

export default Search;
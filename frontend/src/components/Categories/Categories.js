import Title from './Title/index'
import Member from './Member/index'
import * as categoryService from '../../services/categoryService'

import { useState, useEffect } from 'react';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        categoryService.GetAll()
            .then(res => setCategories(res));
    }, []);

    const categoryItems = categories.map((c) => 
        <Member key={c.name} name={c.name} imageUrl={c.imageUr} />
    );

    return (
        <section className="team section-bg">
            <div className="container">

                <Title />

                <div className="row">

                    {categoryItems}

                </div>
            </div>
        </section>
    )
}

export default Categories;
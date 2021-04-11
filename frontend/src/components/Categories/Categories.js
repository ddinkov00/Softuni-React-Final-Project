import Title from './PageTitle/index'
import Member from './Member/index'
import * as categoryService from '../../services/categoryService'

import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

const Categories = () => {
    const history = useHistory()

    const token = localStorage.getItem('token')
    if (token === null) {
        history.push('/login');
    }

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        categoryService.GetAll()
            .then(res => setCategories(res));
    }, []);

    const categoryItems = categories.map((c) => 
        <Member key={c.name} name={c.name} imageUrl={c.imageUr} id={c.id} />
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
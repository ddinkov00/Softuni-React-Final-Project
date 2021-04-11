import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'

import * as categoryService from '../../../services/categoryService'
import * as productService from '../../../services/productService'

const AddProduct = () => {
    const history = useHistory();

    const [categotyList, setCategotyList] = useState([]);
    useEffect(() => {
        categoryService.getForNavigation()
            .then(res => setCategotyList(res));
    }, [])

    let categoryItems = categotyList.map((category) =>
        <option key={category.id} value={category.id}>{category.name}</option>
    )

    const onAddProductHandler = async (e) => {
        e.preventDefault();

        const data = {
            name: e.target.name.value,
            description: e.target.description.value,
            imageUrl: e.target.imageUrl.value,
            price: e.target.price.value,
            categoryId: e.target.categoryId.value,
        }

        const res = await productService.AddProduct(data);
        console.log(res);
        if (res.ok) {
            history.push('/');
        }
    };

    return (
        <div className="col-md-5">
            <h2>Add new product</h2>
            <form onSubmit={onAddProductHandler} className="mt-3">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <div className="form-group">
                            <input type="text" name="name" className="form-control form-control-lg form-control-a" placeholder="Name" />
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="form-group">
                            <input type="number" step="0.01" name="price" className="form-control form-control-lg form-control-a" placeholder="Price" />
                        </div>
                    </div>
                    <div className="col-md-12 mb-3">
                        <div className="form-group">
                            <input type="link" name="imageUrl" className="form-control form-control-lg form-control-a" placeholder="Image Url" />
                        </div>
                    </div>
                    <div className="col-md-12 mb-3">
                        <div className="form-group">
                            <textarea className="form-control" name="description" cols="45" rows="8" placeholder="Description"></textarea>
                        </div>
                    </div>
                    <div className="col-md-12">
                    <select className="form-control form-select-lg" name="categoryId" aria-label="Default select example">
                        <option value="" disabled>Category</option>
                        { categoryItems }
                    </select>
                    </div>

                    <div className="col-md-12 text-center">
                        <button type="submit" className="btn btn-primary mt-3">Add product</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddProduct;
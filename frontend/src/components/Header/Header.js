import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import * as categoryService from '../../services/categoryService'
import { GetIdentityList, GetAdminElement } from '../../services/identityService'

const Header = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        categoryService.getForNavigation()
            .then(res => setCategories(res));
    }, []);

    const [token, setToken] = useState(localStorage.getItem('token'));
    const [role, setRole] = useState(localStorage.getItem('roleId'))

    setInterval(() => {
        const currentToken = localStorage.getItem('token');
        const currentRole = localStorage.getItem('roleId');

        if (currentToken !== token) {
            setToken(currentToken);
            setRole(currentRole);
        }
    }, 500);

    const [identityList, setList] = useState();
    useEffect(() => {
        const token = localStorage.getItem('token');
        setList(GetIdentityList(token));
    }, [token]);

    const [adminElement, setElement] = useState();
    useEffect(() => {
        const role = localStorage.getItem('roleId');
        setElement(GetAdminElement(role));
    }, [role])

    let categoryItems = categories.map((category) =>
        <li>
            <Link className="dropdown-item" key={category.id} to={`/shop/categories/${category.id}`}>
                {category.name}
            </Link>
        </li>
    )

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand" to="/">Evergreen</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/shop">Shop</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {categoryItems}
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact us</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                User
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                { identityList }
                                { adminElement }
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success bg-white" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Header;
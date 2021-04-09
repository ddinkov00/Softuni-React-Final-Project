import { Link } from 'react-router-dom';

const baseUrl = 'https://localhost:44320/api/identity';

export const MakeLoginRequest = (email, password) => {
    var url = `${baseUrl}?email=${email}&password=${password}`;

    return fetch(url)
        .then(res => res.json())
        .catch(err => err.json());
}

export const MakeRegisterRequest = (email, password) => {
    var url = `${baseUrl}?email=${email}&password=${password}`;

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };

    return fetch(url, requestOptions)
        .then(res => res.json())
        .catch(err => err);
}

export const GetIdentityList = (token) => {
    const logout = () => {
        localStorage.clear();
    }

    if (token === null) {
        return (
            <>
                <li>
                    <Link className="dropdown-item" to='/login'>
                        Login
                    </Link>
                </li>
                <li>
                    <Link className="dropdown-item" to='/register'>
                        Register
                    </Link>
                </li>
            </>
        );
    } else {
        return (
        <>
            <li>
                <Link className="dropdown-item" to='/profile'>
                    Profile
                </Link>
            </li>
            <li>
                <Link className="dropdown-item" to='/login' onClick={ logout }>
                    Logout
                </Link>
            </li>
        </>
        );
    }
}

export const GetAdminElement = (role) => {
    if (Number(role) === 1) {
        return (
            <>
                <li>
                    <Link className="dropdown-item" to='/admin'>
                        Admin
                    </Link>
                </li>
            </>
        )
    }
}
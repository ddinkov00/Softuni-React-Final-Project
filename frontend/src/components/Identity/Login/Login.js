import { useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import { useHistory } from "react-router-dom";

import { MakeLoginRequest } from '../../../services/identityService'

const Login = () => {
    let history = useHistory();

    const [invalidCredentials, setInvalidCredentials] = useState();

    const onLoginHandler = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        if (password.length < 8) {
            alert("Password too short!");
            return;
        }

        var res = await MakeLoginRequest(email, password);
        if (res.userData !== undefined) {
            localStorage.setItem('token', res.userData.token);
            localStorage.setItem('roleId', res.userData.roleId);
            history.push('/');
        } else {
            setInvalidCredentials(<p className="text-danger">Invalid login details</p>);
        }
    }

    const [invalidPassword, setLabel] = useState();

    const verifyPassword = (e) => {
        if (e.target.value.length < 6) {
            setLabel(<Form.Label className='text-danger d-block p-0 text-center'>Password too short!</Form.Label>);
        } else {
            setLabel();
        }
    }

    return (
        <Form className='container-md mt-5 mb-5' onSubmit={onLoginHandler} style={{ maxWidth: 500 }}>
            <h1>Login</h1>
            { invalidCredentials }
            <Form.Group controlId="email" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="password" className="mb-3">
                <Form.Label>Password</Form.Label>
                { invalidPassword }
                <Form.Control type="password" placeholder="Password" onChange={verifyPassword} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    )
}

export default Login;
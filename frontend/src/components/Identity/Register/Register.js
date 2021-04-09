import { useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import { MakeRegisterRequest, MakeLoginRequest } from '../../../services/identityService'

const Register = () => {
    let history = useHistory();
    const [userExists, setUserExists] = useState();
    const [passwordLabel, setPasswordLabel] = useState();
    const [passwordsDontMatch, setPasswordsDontMatch] = useState();

    const validatePassword = (e) => {
        if (e.target.value.length < 6) {
            setPasswordLabel(<Form.Label className='text-danger d-block p-0 text-center'>Password too short!</Form.Label>);
        } else {
            setPasswordLabel();
        }
    }

    const onRegisterHandler = async (e) => {
        e.preventDefault();

        const email = (e.target.email.value);
        const password = (e.target.password.value);
        const confirmPassword = (e.target.confirmPassword.value);

        if (password !== confirmPassword) {
            setPasswordsDontMatch((<Form.Label className='text-danger d-block p-0 text-center'>Passwords does not match!</Form.Label>))
            return;
        }

        var res = await MakeRegisterRequest(email, password);

        if (res.status >= 400) {
            setUserExists(<p className="text-danger">User with this email already exists!</p>)
            console.log(res);
        } else {
            var loginRes = await MakeLoginRequest(email, password);
            localStorage.setItem('token', loginRes.userData.token);
            localStorage.setItem('roleId', loginRes.userData.roleId);
            history.push('/');
        }
    }

    return (
        <Form className='container-md mt-5 mb-5' onSubmit={ onRegisterHandler } style={{ maxWidth: 500 }}>
            <h1>Register</h1>
            { userExists }
            <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                { passwordLabel }
                { passwordsDontMatch }
                <Form.Control type="password" placeholder="Password" name="password" onChange={ validatePassword } />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mb-3">
                <Form.Label>Confirm password</Form.Label>
                <Form.Control type="password" placeholder="Confirm password" name="confirmPassword" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form>
    )
}

export default Register;
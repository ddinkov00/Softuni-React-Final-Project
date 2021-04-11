import Title from './Title/index'
import Main from './Main/index'
import { useHistory } from 'react-router'

const Contact = () => {
    const history = useHistory()

    const token = localStorage.getItem('token')
    if (token === null) {
        history.push('/login');
    }

    return (
        <>
            <Title />
            <Main />
        </>
    )

}

export default Contact;
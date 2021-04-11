import Title from './Title/index';
import AddProduct from './AddProduct/index'
import Messages from './Messages/index'
import ErrorPage from '../ErrorPage/index'

const Admin = () => {
    const role = localStorage.getItem('roleId')
    console.log(role);
    if (Number(role) === 2) {
        return (
            <ErrorPage />
        )
    }

    return (
        <section className="container pt-0">
            <Title />
            <div className="row">
                <AddProduct />
                <Messages />
            </div>
        </section>
    )
}

export default Admin;
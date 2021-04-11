import Title from './Title/index';
import AddProduct from './AddProduct/index'
import Messages from './Messages/index'

const Admin = () => {
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
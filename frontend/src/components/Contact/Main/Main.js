import Map from './Map/index'
import Content from './Content/Content';

const Main = () => {
    return (
        <section className="contact">
            <div className="container">
                <div className="row">
                    <Map />
                    <Content />
                </div>
            </div>
        </section>
    )
}

export default Main;
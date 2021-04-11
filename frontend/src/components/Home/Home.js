import { Link } from 'react-router-dom'

const Home = () => {
    const userToken = localStorage.getItem('token');
    console.log(userToken)
    return (
        <section id="hero">
            <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">

                <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

                <div className="carousel-inner" role="listbox">

                    <div className="carousel-item active homeCarouselImg">
                        <div className="container">
                            <h2>Welcome to <span text-primary>Evergreen</span></h2>
                            <p>We are a small online shop for fishing equipment. Here you can find things like rods, reels, lures etc. Visit the shop page for more info.</p>
                            <Link to="/shop" className="btn-get-started scrollto">Shop page</Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Home;
const Info = () => {
    return (
        <div className="col-md-5 section-md-t3">
            <div className="icon-box section-b2">
                <div className="icon-box-icon">
                    <span className="ion-ios-paper-plane"></span>
                </div>
                <div className="icon-box-content table-cell">
                    <div className="icon-box-title">
                        <h4 className="icon-title text-primary">Our contacts</h4>
                    </div>
                    <div className="icon-box-content">
                        <p className="mb-1">
                            <strong >Email: </strong>
                            <span className="color-a">evergreen@example.com</span>
                        </p>
                        <p className="mb-1">
                            <strong >Phone: </strong>
                            <span className="color-a">+54 356 945234</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="icon-box section-b2">
                <div className="icon-box-icon">
                    <span className="ion-ios-pin"></span>
                </div>
                <div className="icon-box-content table-cell">
                    <div className="icon-box-title">
                        <h4 className="icon-title text-primary">Our address</h4>
                    </div>
                    <div className="icon-box-content">
                        <p className="mb-1">
                            Manhattan, NY 10036,
                            <br /> United States
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;
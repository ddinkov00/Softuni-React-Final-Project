const ProductDescription = (props) => {
    return (
        <div id="accordion" className="col-12 mt-3">
            <div className="card">
                <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                        <button className="btn text-primary" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Description
                        </button>
                    </h5>
                </div>

                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                        {props.description}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDescription;
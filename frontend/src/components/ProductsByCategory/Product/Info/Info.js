const Info = (props) => {
    return (
        <div className="member-info">
            <h4 className="mb-3">{props.name}</h4>
            <p>{props.categoryName}</p>
            <h3 className="text-dark">{(Math.round(props.price * 100) / 100).toFixed(2)} $</h3>
        </div>
    )
}

export default Info;
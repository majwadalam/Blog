const Card = (props) => {
    return (
        <div className="card">
        <div className="card-header">
            <h3 className="card-title">{props.first_name}</h3>
        </div>
        <div className="card-body">
            <p className="card-text">{props.email}</p>
            <p className="card-text">{props.gender}</p>
        </div>
        </div>
    );
    }

export default Card;
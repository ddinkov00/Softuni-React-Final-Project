import Image from './Image/index';
import Info from './Info/index';

const Member = (props) => {
    return (
        <div className="d-inline col-lg-4 col-md-6 align-items-stretch">
            <div className="member">
                <Image imageUrl={props.imageUrl} id={props.id} />
                <Info name={props.name} />
            </div>
        </div >
    )
}

export default Member;
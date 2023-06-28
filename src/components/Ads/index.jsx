import "./index.css";
import SiteImages from "../../assets/images";
import {Link} from "react-router-dom";

const Ads = ({
    name,
    img,
    text,
    tag
}) =>
{
    const imgStyle = {
        backgroundImage: `url(${SiteImages[img]})`
    }
    return <div className="ads">
        <div className="ads__text">
            <h3>{name}</h3>
            <p>{text}</p>
            <Link to={`/catalog/${tag}`}>Подробнее</Link>
        </div>
        <div className="ads__img" style={imgStyle}/>
    </div>
}

export default Ads;
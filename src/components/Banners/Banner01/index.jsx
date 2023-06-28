import "./index.css";
import SiteImages from "../../../assets/images";

const Banner01 =({
    text, 
    image, 
    title="DogFood",
    pattern = true,
    bgPos = "center"
}) => {
    const bannerStyle = {
        backgroundImage: `url(${SiteImages[image]})`,
        backgroundSize: pattern ? "contain" : "cover",
        backgroundPosition: bgPos
    }
    return <div className="banner01" style={bannerStyle}>
        <h2 className="banner01__header">{title}</h2>
        <div className="banner01__text">{text}</div>
    </div>
}
export default Banner01;
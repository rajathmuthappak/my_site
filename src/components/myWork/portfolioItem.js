import {getImage} from "../../pages/imageContainer"

function PortfolioItem(props){
    const {ref , imgID, desc} = props.name
 
    return (
        <a href={ref} className="portfolio-item">
			<img src={getImage(imgID)} alt="" className="portfolio-img" />
			<div className="portfolio-item-desc">{desc}</div>
		</a>
    )
}
export default PortfolioItem;
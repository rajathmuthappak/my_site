import image from "../../img/display.jpg"
import WhoAmIBody from "./whoAmIBody"
function WhoAmI(props){

    const {title, subtitle, details} = props.name
return (
    <section className="about-me" id="about">
			<h2 className="section-title section-title-about">{title}</h2>
			<p className="section-subtitle section-subtitle-about">{subtitle}</p>
			<div className="about-me-body">
				{details.map( (detail, id) => <WhoAmIBody key={id} body={detail}/>)}
			</div>
			<a href="resume/Rajath Kallichanda_Resume.pdf"><i className="fa fa-download" aria-hidden="true"> Resume</i></a>
			<img
				src={image}
				alt="Rajath"
				className="about-me-img"
			/>
		</section>
)
}

export default WhoAmI;
import Service from "./service"
function WhatIDo(props) {
    const {title, button, services} = props.name;
    return(
        <section className="my-services" id="services">
			<h2 className="section-title section-title-services">{title}</h2>
			<div className="services">
                {
                    services.map((service, id) => <Service key ={id} curService={service} />)
                }
			</div>
			<a href="#work" className="btn">{button}</a>
		</section>
    );
}

export default WhatIDo;
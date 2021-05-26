import ServiceItem from './serviceItem'
function Service(props) {
    const {service, technologies} = props.curService;
    const techArray = technologies.split("blank,")
    return (
        <div className="service">
					<h3><u>{service}</u></h3>
                    {techArray.map((tech, id) => 
                       <ServiceItem key={id} name={tech} />
                    )}
        </div>
    )
}
export default Service;
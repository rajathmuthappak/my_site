import Description from "../../components/project/description";
import Responsibilities from "../../components/project/responsibilities";
import Technologies from "../../components/project/technologies"
function Body(props) {
    return (
        <div class="portfolio-item-individual">
            <Description details={props.name.details} />
            <Responsibilities responsibilities={props.name.responsbilities} />
            <Technologies tech={props.name.technologies} />
        </div>
    )
}

export default Body;
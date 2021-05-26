import { getImage } from "../../pages/imageContainer"
function Intro(props) {
    return (
        <section class="intro">
            <h1 class="section-title section-title-intro" dangerouslySetInnerHTML={{__html:props.name.title}}></h1>
            <p class="section-subtitle section-subtitle-intro"><strong>{props.name.organisation}</strong></p>
            <img src={getImage(props.name.imgId)} alt="" class="intro-img" />
        </section>
    )
}
export default Intro;
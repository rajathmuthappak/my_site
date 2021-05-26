import profile from "../../img/profile.jpg"

function Intro(props) {
    const {section_title_name, section_title_hi, section_subtitle} = props.name;
    return (
    <section className="intro" id="home">
        <h1 className="section-title section-title-intro">
            {section_title_hi}<strong>{section_title_name}</strong>
        </h1>
        <p className="section-subtitle section-subtitle-intro">
            {section_subtitle}
    </p>
        <img
            src={profile}
            alt="a picture of Rajath Kallichanda"
            className="intro-img"
        />
    </section>
    )
}

export default Intro;
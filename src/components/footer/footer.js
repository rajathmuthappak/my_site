function Footer(props){

    const{mail, github, linkedIn, gitlab} = props.name
    return (
        <footer className="footer">
        <a href={`mailto:${mail}`} className="footer-link">{mail}</a>
        <ul className="social-list">
            <li className="social-list-item">
                <a className="social-list-link" href={linkedIn}>
                    <i className="fab fa-linkedin"></i>
                </a>
            </li>
            <li className="social-list-item">
                <a className="social-list-link" href={github}>
                    <i className="fab fa-github"></i>
                </a>
            </li>
            <li className="social-list-item">
                <a className="social-list-link" href={gitlab}>
                    <i className="fab fa-gitlab"></i>
                </a>
            </li>
        </ul>
    </footer>
    )
}

export default Footer;
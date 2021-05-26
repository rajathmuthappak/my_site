function Responsibilities(props) {
    return (
        <p>
            <strong><u>Responsibilities<br /></u></strong>
            <ul>
                {props.responsibilities && props.responsibilities.map((responsibility) => <li>{responsibility}</li>)}
            </ul>
        </p>
    )
}

export default Responsibilities;
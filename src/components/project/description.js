function Description(props){
    return (
        props.details.map((detail) => <p dangerouslySetInnerHTML={{__html:detail}}></p>)
    )
}
export default Description;
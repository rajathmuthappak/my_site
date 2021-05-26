function Description(props){
    console.log(props.details)
    return (
        props.details.map((detail) => <p dangerouslySetInnerHTML={{__html:detail}}></p>)
    )
}
export default Description;
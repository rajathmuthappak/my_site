function WhoAmIBody(props){
    return (
        <p dangerouslySetInnerHTML={{__html:props.body}}></p>
    )
}
export default WhoAmIBody;
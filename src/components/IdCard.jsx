function IdCard(props){
    console.log(props)
    return(
        <div>
            <img src="{props.picture}" alt="img" />
            <p><b>First Name:</b> {props.firstName}</p>
            <p><b>Last Name:</b> {props.lastName}</p>
            <p><b>Genger:</b> {props.gender}</p>
            <p><b>Height:</b> {props.height}</p>
            <p><b> Birth:</b> {props.birth}</p>
        </div>
    )
}   

export default IdCard;
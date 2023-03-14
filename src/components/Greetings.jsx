function Greetings(props) {
    return(
        <div>
            <p><b> Hello:</b> {props.children}</p>
            
        </div>
    )
}

export default Greetings;
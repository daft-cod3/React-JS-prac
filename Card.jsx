

function Card(props){
    return(
        <div class="border ">
            <img alt="An image"src={props.img}height={400}width={300}></img>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default Card;
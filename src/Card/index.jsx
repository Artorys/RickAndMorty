import CardStyled from "./style"

function Card({name,status,image})
{
    return(
        <CardStyled status = {status}>
            <img src={image} alt="character of Ricky and Morty" />
            <p>
            {name}
            </p>
        </CardStyled>
    )
}
export default Card
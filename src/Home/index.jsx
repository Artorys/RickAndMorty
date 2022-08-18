
import Header from "./Header/index.jsx"
import api from "../services/api.js"
import HomeStyled from "./style.js"
import { useEffect, useState } from "react"
import Background from "./Background/index.jsx"
import Card from "../Card/index.jsx"


function Home()
{
    function prevPage()
    {
        if(count > 1 && count <= 42 )
        {
            setCounter((oldCount)=> oldCount - 1)
        }
    }
    function nextPage()
    {
        if(count >= 1 && count < 42)
        {
            setCounter((oldCount)=> oldCount + 1)
        }
    }
    const [character,setCharacter] = useState([])
    const [count,setCounter] = useState(1)
    useEffect(()=>
    {
        api.get("",
        {
            params : 
            {
                page : count
            }


        }).then((res)=>
        {
            const newArray = res.data.results
            const next = res.data.info.next
            const prev = res.data.info.prev
            console.log(res)
            setCharacter((oldArray)=> newArray)
        })
    },[count])
    return(
    <HomeStyled>
        <Header></Header>
        <main>
            <Background>
            <ul>
                <div className="box_card">
                    {character.map(({name,id,image,status})=>
                    {
                        return <Card  name={name} key = {id} image = {image} status = {status}></Card>

                    })}
                <div className="footer">
                    <button onClick={prevPage} className="prev">Prev</button>
                    <button onClickCapture={nextPage} className="next">Next</button>
                </div>
                </div>
            </ul>
            </Background>
            
        </main>
    </HomeStyled>
    )
}
export default Home
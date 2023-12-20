import { useState } from "react"
function Set(){
const [texto, setTexto] = useState("Titulo")
return (
    <div>
        <h2>{texto}</h2>
        <button onClick={()=>{setTexto("Mudei o texto")}}></button>
    </div>
)
}
export default Set
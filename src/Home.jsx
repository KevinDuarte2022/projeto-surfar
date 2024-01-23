import Set from "./Set"
import NavBarComponent from "./NavBar"
import Equipe from "./img/projeto-surfar-img1.jpeg"
import { useState } from "react"
import QuemSomos from "./QuemSomos";
import './index.css';

function Home() {
    const [quemSomos, setQuemSomos] = useState (false);
    let ong = "Projeto Surfar"
    return (
        <div>
            <NavBarComponent/>
            {quemSomos && <QuemSomos/>}
            <h1>ONG {ong}</h1>
            <img className="imagem01" src={Equipe} alt="Time Projeto Surfar" title="Time Projeto Surfar"/>            
            <Set/>
        </div>

    )
}

export default Home;
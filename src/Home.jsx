import Set from "./Set"
import NavBarComponent from "./NavBar"
import Equipe from "./img/WhatsApp Image 2024-01-18 at 17.12.45.jpeg"
import { useState } from "react"
import QuemSomos from "./QuemSomos";
import './index.css';

function Home() {
    const [quemSomos, setQuemSomos] = useState(false);
    let ong = "ONG Projeto Surfar"
    return (
        <div>
            <NavBarComponent />
            {quemSomos && <QuemSomos />}
            <img className="imagem01" src={Equipe} alt="Time Projeto Surfar" title="Time Projeto Surfar" />
            <Set />
        </div>

    )
}

export default Home;
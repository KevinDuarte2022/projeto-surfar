import React from "react"
import { Link } from "react-router-dom"
import Set from "./Set"
import NavBarComponent from "./NavBar"
import Equipe from "./img/projeto-surfar-img1.jpeg"
import { useState } from "react"
import QuemSomos from "./QuemSomos";
import './index.css';
import UncontrolledExample from "./Carrossel"




function Home() {
    return (
        <div>
            <NavBarComponent />
            <UncontrolledExample/>
            
            {/* <img className="imagem01" src={Equipe} alt="Time Projeto Surfar" title="Time Projeto Surfar" /> */}
            <Set />
        </div>

    )
}

export default Home;
import React from "react"
import { Link } from "react-router-dom"
import Set from "./Set"
import NavBarComponent from "./NavBar"
import './index.css';
import Carrossel from "./Carrossel"




function Home() {
    return (
        <div>
            <NavBarComponent />
            <Carrossel/>
            <Set />
        </div>

    )
}

export default Home;
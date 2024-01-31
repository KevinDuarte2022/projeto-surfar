import React from "react"
import { Link } from "react-router-dom"
import Set from "./Set"
import NavBarComponent from "./NavBar"
import './index.css';
import Carrossel from "./Carrossel"
import { Container } from "bootstrap-4-react/lib/components/layout";
import HorizontalExample from "./DoarHome";




function Home() {
    return (
        <div>
            <NavBarComponent />
            <Carrossel />
            <HorizontalExample/>
        </div>


    )
};



export default Home;
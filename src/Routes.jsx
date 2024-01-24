import React from "react";
import { Route, BrowserRouter } from "react-router-dom"
import Home from "./Home";
import QuemSomos from "./QuemSomos"
import DoeAqui from "./DoeAqui"
import SejaVoluntario from "./SejaVoluntario"
import Cursos from "./Cursos"
import Projetos from "./Projetos"
import Consultoria from "./Consultoria"
import FaleConosco from "./FaleConosco"

const Routes = () => {
    return (
        <BrowserRouter>
            <Route Component={Home} path="/" exact />
            <Route Component={QuemSomos} path="/" exact />
            <Route Component={DoeAqui} path="/" exact />
            <Route Component={SejaVoluntario} path="/" exact />
            <Route Component={Cursos} path="/" exact />
            <Route Component={Projetos} path="/" exact />
            <Route Component={Consultoria} path="/" exact />
            <Route Component={FaleConosco} path="/" exact />
        </BrowserRouter>
    )

}

export default Routes;

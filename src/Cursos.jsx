import NavBarComponent from "./NavBar";
import Footer from "./Footer"
import Colaboradores from "./colaboradores";

function Cursos(){
    return(
        <div>
            <NavBarComponent/>
            <h1>Teste Cursos</h1>
            <Colaboradores />
            <Footer />
        </div>
    )
}

export default Cursos;
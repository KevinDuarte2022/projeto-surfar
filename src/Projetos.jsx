import NavBarComponent from "./NavBar";
import Footer from "./Footer"
import Colaboradores from "./colaboradores";

function Projetos(){
    return(
        <div>
            <NavBarComponent/>
            <h1>Teste Projetos</h1>
            <Colaboradores />
            <Footer />
        </div>
    )
}

export default Projetos;
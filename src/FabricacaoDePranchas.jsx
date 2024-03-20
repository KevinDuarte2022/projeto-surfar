import NavBarComponent from "./NavBar"
import Footer from "./Footer"
import Colaboradores from "./colaboradores";

function FabricacaoDePranchas(){
    return(
        <div>
            <NavBarComponent/>
            <h1>Teste de Fabricação De Pranchas</h1>
            <Colaboradores />
            <Footer />
        </div>
    )
}

export default FabricacaoDePranchas;
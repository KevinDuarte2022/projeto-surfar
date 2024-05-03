import NavBarComponent from "./NavBar"
import Footer from "./Footer"
import Colaboradores from "./colaboradores";
import ImagemPranchaCapa from './img/prancha capa.png'
import ImagemPrancha01 from './img/prancha-01.png'

function FabricacaoDePranchas() {
    return (
        <div>
            <NavBarComponent />
            <img src={ImagemPranchaCapa} className="imgCapas" />

            <div className="divCatastrofe">

                <h3 className="tituloh3-1">Em 16 de junho de 2023, tivemos uma catástrofe natural que arruinou parte de nossa estrutura, e a estrutura da casa de várias famílias</h3>
                <h4 className="subtitulo">Sua doação vai ajudar na reestruturação da Ong e de muitas famílias</h4>
                <div className="row">
                    <img src={ImagemPrancha01} className="imgcat" />
                    {/* <img src={ImagemPrancha02} className="imgcat" />
                    <img src={ImagemPrancha03} className="imgcat" /> */}
                </div>
                <Colaboradores />
                <Footer />
            </div>
        </div>
    )
}

export default FabricacaoDePranchas;
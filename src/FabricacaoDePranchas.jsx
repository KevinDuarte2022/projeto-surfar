import NavBarComponent from "./NavBar";
import Footer from "./Footer";
import Colaboradores from "./colaboradores";
import ImagemPranchaCapa from './img/prancha capa.png';
import ImagemPrancha01 from './img/prancha-01.png';
import ImgWpp from './img/wpp.png';




function FabricacaoDePranchas() {
    return (
        <div>
            <NavBarComponent />
            <img src={ImagemPranchaCapa} className="imgCapas" />

            <div className="divCatastrofe">

                <h3 className="tituloh3-1">Fabricação de pranchas</h3>
                <h4 className="subtitulo">Venha conferir nosso catálogo</h4>
                <div className="row">
                    <img src={ImagemPrancha01} className="imgcat" />
                </div>
                <Colaboradores />
                <Footer />
            </div>

            <div className="whatsapp">
                <a target="_blank" href="https://wa.me/555184017604?text=Olá, gostaria de saber mais sobre a ONG Projeto Surfar.">
                <img src={ImgWpp} />
                </a>
            </div>
        </div>
    )
}

export default FabricacaoDePranchas;
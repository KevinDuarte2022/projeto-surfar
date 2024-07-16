import NavBarComponent from "./NavBar";
import Footer from "./Footer";
import Colaboradores from "./colaboradores";
import ImagemPranchaCapa from './img/prancha capa.png';
import ImagemPrancha00 from './img/prancha00.png';
import ImagemPrancha01 from './img/prancha01.jpeg';
import ImagemPrancha02 from './img/prancha02.jpeg';
import ImagemPrancha03 from './img/prancha03.jpeg';
import ImagemPrancha04 from './img/prancha04.jpeg';
import ImagemPrancha05 from './img/prancha05.jpeg';
//import ImagemPrancha06 from './img/prancha06.jpeg';
import ImagemPrancha07 from './img/prancha07.jpeg';
import ImagemPrancha08 from './img/prancha08.jpeg';
import ImagemPrancha09 from './img/prancha09.jpeg';
import ImagemPrancha10 from './img/prancha10.jpeg';
import ImagemPrancha11 from './img/prancha11.jpeg';
import ImagemPrancha12 from './img/prancha12.jpeg';
import ImagemPrancha13 from './img/prancha13.jpeg';
import ImagemPrancha14 from './img/prancha14.jpeg';
import ImagemPrancha15 from './img/prancha15.jpeg';
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
                    <div className="col-sm-3">
                        <img src={ImagemPrancha00} className="imgcat2" />
                    </div>

                    <div className="col-sm-3">
                        <img src={ImagemPrancha01} className="imgcat2" />
                    </div>
                    <div className="col-sm-3">
                        <img src={ImagemPrancha02} className="imgcat2" />
                    </div>
                    <div className="col-sm-3">
                        <img src={ImagemPrancha03} className="imgcat2" />
                    </div>

                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <img src={ImagemPrancha04} className="imgcat2" />
                    </div>

                    <div className="col-sm-3">
                        <img src={ImagemPrancha05} className="imgcat2" />
                    </div>
                    <div className="col-sm-3">
                        <img src={ImagemPrancha05} className="imgcat2" />
                    </div>
                    <div className="col-sm-3">
                        <img src={ImagemPrancha07} className="imgcat2" />
                    </div>

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
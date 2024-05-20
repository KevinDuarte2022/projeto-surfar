import Footer from "./Footer";
import NavBarComponent from "./NavBar";
import ImgLogo01 from './img/logos/logo Unimaqui .jpeg'
import ImgLogo02 from './img/logos/logo-ceasa-rs.png'
import ImgLogo03 from './img/logos/rede-construir-logo.jpeg'
import ImgLogo04 from './img/logos/rio-grande-do-sul-logo.png'
import ImgLogo05 from './img/logos/sicredi-logo.png'
import ImgLogo06 from './img/logos/unihouse-logo.png'
import ImgLogo07 from './img/logos/logoCacadores.png'

function Colaboradores() {
    return (
        <div>
            <div className="colaboradores">
                <h2 className="tituloh3">Painel de colaboradores</h2>
                <div className="container">
                    <div className="row">
                        <div className="logosColaboradores col-md-3 col-sm-3" >
                            <img src={ImgLogo06}/>
                        </div>
                        <div className="logosColaboradores col-md-3 col-sm-3" >
                            <img src={ImgLogo02}/>
                        </div>
                        <div className="logosColaboradores col-md-3 col-sm-3" >
                            <img src={ImgLogo03}/>
                        </div>
                        <div className="logosColaboradores col-md-3 col-sm-3" >
                            <img src={ImgLogo04}/>
                        </div>
                        <div className="logosColaboradores col-md-3 col-sm-3" >
                            <img src={ImgLogo05}/>
                        </div>
                        <div className="logosColaboradores col-md-3 col-sm-3" >
                            <img src={ImgLogo01}/>
                        </div>
                        <div className="logosColaboradores col-md-3 col-sm-3" >
                            <img src={ImgLogo07}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Colaboradores;
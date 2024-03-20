import Footer from "./Footer";
import NavBarComponent from "./NavBar";
import ImgLogo01 from './img/logos/logo Unimaqui .jpeg'
import ImgLogo02 from './img/logos/logo-ceasa-rs.png'
import ImgLogo03 from './img/logos/rede-construir-logo.jpeg'
import ImgLogo04 from './img/logos/rio-grande-do-sul-logo.png'
import ImgLogo05 from './img/logos/sicredi-logo.png'
import ImgLogo06 from './img/logos/unihouse-logo.png'

function Colaboradores() {
    return (
        <div>
            <div className="colaboradores">
                <h2 className="tituloh3">Painel de colaboradores</h2>
                <div className="row">
                    <img src={ImgLogo01} className="logosColaboradores col-md-6 col-sm-6"/>
                    <img src={ImgLogo02} className="logosColaboradores col-md-6 col-sm-6"/>
                    <img src={ImgLogo03} className="logosColaboradores col-md-6 col-sm-6"/>
                    <img src={ImgLogo04} className="logosColaboradores col-md-6 col-sm-6"/>
                    <img src={ImgLogo05} className="logosColaboradores col-md-6 col-sm-6"/>
                    <img src={ImgLogo06} className="logosColaboradores col-md-6 col-sm-6"/>
                </div>

            </div>
        </div>
    )

}

export default Colaboradores;
import NavBarComponent from "./NavBar";
import Footer from "./Footer";
import ImagemDoeAqui from './img/Doe-aqui-capa.png';
import { Link } from "react-router-dom";
import ImagemCatastrofe01 from './img/catastrofe01.png';
import ImagemCatastrofe02 from './img/catastrofe02.png';
import ImagemCatastrofe03 from './img/catastrofe03.png';
import ImagemCatastrofe04 from './img/catastrofe04.png';
import Colaboradores from "./Colaboradores";
import React, { useState } from "react"
import ImgWpp from './img/wpp.png';


function DoeAqui() {
    const [textoPix, setTextoPix] = useState('Copiar chave pix');
    const copiarChavePix = () => {
        navigator.clipboard.writeText('09097983000109')
        setTextoPix('Chave pix copiada')
    }

    return (
        <div >
            <NavBarComponent />
            <img src={ImagemDoeAqui} className="imgCapas" />
            <div >
                <div>
                    <h3 className="tituloParagrafo01">Ajude a mudar o mundo com um pequeno gesto</h3>
                    <p className="paragrafoQuemSomos03">Sua doação vai ajudar a transformar muitas vidas através do Projeto Surfar</p>
                </div>
                <div>

                    <div className="paragrafoQuemSomos">
                        <h3 className="tituloParagrafo01" >Vem fazer parte dessa família</h3>
                        <p className="paragrafoQuemSomos03">
                            É simples. Para ajudar o Projeto Surfar, as crianças, os adolescentes e idosos beneficiados pela instituição, você pode:
                        </p>
                        <h4 className="tituloPix02">Fazer um pix</h4>
                        <p className="paragrafoQuemSomos03">
                            <button onClick={() => { copiarChavePix() }} className="botaoPix">{textoPix}</button>
                        </p>
                        <h4 className="tituloPix02">Doar brinquedos</h4>
                        <p className="paragrafoQuemSomos03">
                            Você pode doar um brinquedo e fazer uma criança feliz.
                        </p>
                        <p className="paragrafoQuemSomos04">
                            <a target="_blank" href="https://wa.me/5551994962262?text=Ol%C3%A1%2C+gostaria+de+doar+brinquedos+para+ONG%2C+como+fa%C3%A7o%3F"><button className="botaoPix">Fale conosco para doar</button></a>
                        </p>

                        <h4 className="tituloPix02">Doar vestimentas</h4>
                        <p className="paragrafoQuemSomos03">
                            Você pode doar cobertores, agasalhos ou calçados para ajudar uma criança ou uma família.
                        </p>
                        <p className="paragrafoQuemSomos04">
                            <a target="_blank" href="https://wa.me/5551994962262?text=Ol%C3%A1%2C+gostaria+de+doar+vestimentas+para+ONG%2C+como+fa%C3%A7o%3F"><button className="botaoPix">Fale conosco para doar</button></a>
                        </p>

                        <h4 className="tituloPix02">Apadrinhamento</h4>
                        <p className="paragrafoQuemSomos03">
                            O apadrinhamento acontece na forma de colaboração mensal com depósitos recorrentes na conta da instituição.
                        </p>
                        <p className="paragrafoQuemSomos04" style={{ paddingBottom: '1rem' }}>
                            <a target="_blank" href="https://wa.me/5551994962262?text=Ol%C3%A1%2C+gostaria+de+ser+um+apadrinhador%2C+como+fa%C3%A7o%3F"><button className="botaoPix">Ser um apadrinhador</button></a>
                        </p>
                    </div>
                   <div className="paragrafoQuemSomos">
                   <div className="sejaVoluntarioContainer">
                        <Link to="/seja-voluntario">
                            <div className="sejaUmVoluntarioBox01">
                                <p>SEJA UM VOLUNTÁRIO</p>
                            </div>
                        </Link>

                        <Link to="/cursos-ofertados">
                            <div className="sejaUmVoluntarioBox02">
                                <p>CURSOS OFERTADOS</p>
                            </div>
                        </Link>

                        <Link to="/fabricacao-de-pranchas">
                            <div className="sejaUmVoluntarioBox03">
                                <p>PRANCHAS</p>
                            </div>
                        </Link>
                    </div>
                   </div>

                </div>

                <div className="paragrafoQuemSomos">

                    <h3 className="tituloParagrafo01">Em maio de 2024, tivemos uma catástrofe natural que arruinou parte de nossa estrutura, e a estrutura da casa de várias famílias</h3>
                    <h4 className="subtitulo">Sua doação vai ajudar na reestruturação da Ong e de muitas famílias</h4>
                    <div className="row">
                        <img src={ImagemCatastrofe01} className="imgQuemSomosP" />
                        <img src={ImagemCatastrofe02} className="imgQuemSomosP" />
                        <img src={ImagemCatastrofe03} className="imgQuemSomosP" />
                        <img src={ImagemCatastrofe04} className="imgQuemSomosP" />
                    </div>
                    <div>
                        <p className="paragrafoQuemSomos03">
                            <button onClick={() => { copiarChavePix() }} className="botaoPix">{textoPix}</button>
                        </p>
                    </div>
                </div>
            </div>
            <Colaboradores />
            <Footer />

            <div className="whatsapp">
                <a target="_blank" href="https://wa.me/5551994962262?text=Olá, gostaria de saber mais sobre a ONG Projeto Surfar.">
                    <img src={ImgWpp} />
                </a>
            </div>
        </div>

    )
}

export default DoeAqui;
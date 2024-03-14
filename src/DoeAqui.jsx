import NavBarComponent from "./NavBar";
import Footer from "./Footer";
import ImagemDoeAqui from './img/Doe-aqui-capa.png';
import { Link } from "react-router-dom";
import ImagemDentista from './img/dentista-editado.png';

function DoeAqui() {
    return (
        <div>
            <NavBarComponent />
            <img src={ImagemDoeAqui} className="imgCapas" />
            <div className="divMae">
                <div style={{ marginBottom: '3rem' }}>
                    <h3 className="tituloh3">Ajude a mudar o mundo com um pequeno gesto</h3>
                    <h4 className="subtitulo">Sua doação vai ajudar a transformar muitas vidas através do Projeto Surfar</h4>
                </div>
                <div>
                    <div className="row " style={{ marginBottom: '4rem' }}>
                        <div className="vemFazerParte col-md-8">
                            <h3 className="tituloPix" >Vem fazer parte dessa família</h3>
                            <p className="textoDoar">
                                É simples. Para ajudar o Projeto Surfar, as crianças, os adolescentes e idosos beneficiados pela instituição, você pode:
                            </p>
                            <h4 className="tituloPix02">Fazer um pix</h4>
                            <button className="botaoPix">Copiar chave pix</button>

                            <h4 className="tituloPix02">Doar brinquedos</h4>
                            <p className="textoDoar02">
                                Você pode doar um brinquedo e fazer uma criança feliz.
                            </p>
                            <button className="botaoPix">Fale conosco para doar</button>

                            <h4 className="tituloPix02">Doar vestimentas</h4>
                            <p className="textoDoar02">
                                Você pode doar cobertores, agasalhos ou calçados para ajudar uma criança ou uma família.
                            </p>
                            <button className="botaoPix">Fale conosco para doar</button>

                            <h4 className="tituloPix02">Apadrinhamento</h4>
                            <p className="textoDoar02">
                                O apadrinhamento acontece na forma de colaboração mensal com depósitos recorrentes na conta da instituição.
                            </p>
                            <button className="botaoPix">Ser um apadrinhador</button>
                        </div>
                        <div className="col-md-3">
                            <Link to="/seja-voluntario">
                                <div className="sejaUmVoluntarioBox">
                                    {/* <img src={ImagemDentista} className="imgSejaVBox"/> */}
                                    <p>SEJA UM VOLUNTÁRIO</p>

                                </div>
                            </Link>
                            <div className="sejaUmVoluntarioBox">

                                <p>CURSOS OFERTADOS</p>
                            </div>
                            <div className="sejaUmVoluntarioBox">

                                <p>FABRICAÇÃO DE PRANCHAS</p>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default DoeAqui;
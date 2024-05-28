import NavBarComponent from "./NavBar";
import Footer from "./Footer"
import ImagemSejaVoluntario from './img/seja-um-voluntario.png'
import Colaboradores from "./colaboradores";
import ImgWpp from './img/wpp.png';

function SejaVoluntario() {
    return (
        <div>
            <NavBarComponent />
            <img src={ImagemSejaVoluntario} className="imgCapas" />
            <div className="divMae">
                <div style={{ marginBottom: '3rem' }}>
                    <h3 className="tituloh3">Seja um voluntário nessa causa</h3>

                </div>
                <div>
                    <div style={{ marginBottom: '4rem' }}>
                        <div className="vemFazerParte02">
                            <h3 className="tituloPix" >Como posso me tornar um voluntário?</h3>
                            <p className="textoDoar">
                                Você pode se candidatar a uma das funções abaixo. Ao clicar no botão você será encaminhado(a) para uma conversa conosco.
                            </p>
                            <h4 className="tituloPix02">Apadrinhamento</h4>

                            <p className="textoDoar02">
                                O apadrinhamento acontece na forma de colaboração mensal com depósitos recorrentes na conta da instituição.
                            </p>

                            <h4 className="tituloPix02">Dar aulas</h4>
                            <p className="textoDoar02">
                                O Projeto Surfar tem diversos cursos e oficinas. Se você tiver especialidade em ministrar aulas de artes marciais, esportes ou um dos cursos que ofertamos, você pode ser um voluntário nesse projeto.
                            </p>

                            <h4 className="tituloPix02">Outra forma</h4>
                            <p className="textoDoar02">
                                Tem outra forma que você possa ajudar a gente? Seu talento vai ser muito bem vindo nesse projeto que tranforma vidas.
                            </p>
                            <p className="alinharEsquerda" style={{paddingBottom:'2rem'}}>
                            <a target="_blank" href="https://wa.me/5551984017604?text=Ol%C3%A1%2C+gostaria+de+me+tornar+um+volunt%C3%A1rio+na+ONG+Projeto+Surfar."><button className="botaoPix">Se tornar voluntário</button></a>
                            </p>
                        </div>
                        <Colaboradores/>
                        <Footer />
                    </div>

                </div>
            </div>
            <div className="whatsapp">
                <a target="_blank" href="https://wa.me/555184017604?text=Olá, gostaria de saber mais sobre a ONG Projeto Surfar.">
                <img src={ImgWpp} />
                </a>
            </div>
        </div>

    )
}

export default SejaVoluntario;
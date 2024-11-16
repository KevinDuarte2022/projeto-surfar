import NavBarComponent from "./NavBar";
import Footer from "./Footer"
import Colaboradores from "./Colaboradores";
import ImagemCapaProjeto from './img/Projetos capa.png'
import ImgAbc from './img/abc.png'
import ImgBerimbalando from './img/berimbalando.png'
import ImgJiujistu from './img/jiujistu.png'
import ImgAulaDeSurf from './img/aulaDeSurf.png'
import ImgWpp from './img/wpp.png';

function Projetos() {
    return (
        <div>
            <NavBarComponent />
            <img src={ImagemCapaProjeto} className="imgCapas" />
            <div className="divMae">
                <div>
                    <h3 className="tituloParagrafo01">Conheça os projetos da instituição</h3>

                </div>
                <div className="paragrafoQuemSomos">
                    <div className="row">
                        <h6 className="curso01" >Apoio escolar: Abc</h6>
                        <div className="container">

                            <img src={ImgAbc} className="imgQuemSomosP02" />
                            <p className="paragrafoQuemSomos03">Consiste em atividades de alfabetização e reforço escolar para crianças e adolescentes matriculados e cursando o ensino fundamentas na rede pública.
                            </p>
                        </div>
                        <h6 className="curso01">Berimbalando sonhos</h6>
                        <div className="container">

                            <img src={ImgBerimbalando} className="imgQuemSomosP02" />
                            <p className="paragrafoQuemSomos03">A Capoeira é o que você quiser que ela seja, pode ser luta, ou dança, cultura ou esporte, lazer ou profissão. É o alinhamento do corpo com a mente, preparando o indivíduo para o que a vida apresentar. Na Capoeira, são explorados todos os sentidos e diversas potencialidades do praticante como a musicalidade, ritmos, destreza corporal, o cuidado com sigo e com o outro, o sentimento de grupo e pertencimento, o respeito, o coleguismo, resumindo, é uma excelente ferramenta para a construção de um ser humano melhor.
                            </p>
                        </div>
                        <h6 className="curso01">JiuJitsu</h6>
                        <div className="container">

                            <img src={ImgJiujistu} className="imgQuemSomosP02" />
                            <p className="paragrafoQuemSomos03">O Jiu-Jitsu traz a disciplina, o auto conhecimento e o auto controle, faz você mergulhar no seu interior e colocar para o mundo quem você realmente é. Quando se sobe no tatame a mente se concentra, a atenção é trabalhada e a auto estima se eleva e você entende que deve ser sempre fluido, estar sempre em movimento, não se deixar levar pelas facilidades da vida e posicionar-se em todas as situações.
                            </p>
                        </div>
                        <h6 className="curso01">Projeto Surfar</h6>
                        <div className="container">

                            <img src={ImgAulaDeSurf} className="imgQuemSomosP02" />
                            <p className="paragrafoQuemSomos03">O Surf é um caminho a trilhar, é a liberdade, a felicidade, é a natureza e você, é a expressão da sua alma, é a alma da instituição. Este é um projeto fora da curva, bem longe do lugar comum, que tem como objetivo apresentar novos horizontes e possibilidades para quem assim quiser experimentar e fazer parte de uma experiência única. Se você souber aproveitar os momentos e ter sabedoria para avaliar as circunstâncias, o surf será a ponte que fará a conexão pura entre você e as energias do universo que conspiram para que sejamos pessoas completas, realizadas e felizes.
                            </p>
                        </div>
                        <div>
                        <p className="paragrafoQuemSomos04">
                            <a href="https://wa.me/5551994962262?text=Ol%C3%A1%2C+quero+me+inscrever+em+um+dos+projetos+ofertados+pela+institui%C3%A7%C3%A3o." target="_blank"><button className="botaoPix">Me inscrever em um projeto</button></a>
                        </p>
                        </div>

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

export default Projetos;
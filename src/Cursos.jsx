import NavBarComponent from "./NavBar";
import Footer from "./Footer"
import Colaboradores from "./Colaboradores";
import ImagemCapaCursos from './img/capa-cursos.png'
import ImgCurso01 from './img/curso01.png'
import ImgCurso04 from './img/curso04.png'
import ImgCurso08 from './img/curso08.png'
import ImgCurso12 from './img/curso12.png'
import ImgCurso13 from './img/curso13.png'
import ImgCurso14 from './img/curso14.png'
import ImgCurso15 from './img/curso15.png'
import ImgCurso16 from './img/serigrafia.png'
import ImgWpp from './img/wpp.png';

function Cursos() {
    return (
        <div>
            <NavBarComponent />
            <img src={ImagemCapaCursos} className="imgCapas" />
            <div className="divMae">
                <div>
                    <h3 className="tituloParagrafo01">Conheça os cursos ofertados pela instituição</h3>

                </div>
            </div>
            <div className="paragrafoQuemSomos">

                <h3 className="tituloParagrafo01">Cursos</h3>

                <div className="row">
                    <h4 className="curso01">Cadeia Produtiva do Surf</h4>
                    <div className="container">

                        <img src={ImgCurso04} className="imgQuemSomosP02" />
                        <p className="paragrafoQuemSomos03">Cadeia Produtiva do Surf é composto por alguns projetos básicos, são eles:
                        </p>
                    </div>
                    <h4 className="curso01">Onda de Cidadania</h4>
                    <div className="container">
                        <img src={ImgCurso08} className="imgQuemSomosP02" />
                        <p className="paragrafoQuemSomos03">Curso que ensina 9 profissões para jovens acima de 18 anos, preferencialmente de periferia com potencial para desenvolver. São elas:     Shaper, Pintor, Laminador em fibra de vidro, Lixador à Seco, Lixador à água, Polidor, Colocador de quilhas, estoquista e vendedor.</p>
                    </div>
                    <h4 className="curso01">1ª Impressão – Serigrafia</h4>
                    <div className="container">
                        <img src={ImgCurso16} className="imgQuemSomosP02" />
                        <p className="paragrafoQuemSomos03">Curso ofertado para jovens que utilizam a profissão para criarem e estamparem as sedas da marca das pranchas, bem como utilizam para estampar arte nas camisetas e moletons da instituição, com a marca social do surfar, bem como também podem realizar trabalhos para outras empresas. Para gerar renda tanto para a instituição, quanto para os participantes.</p>
                    </div>

                    <h4 className="curso01">Fazendo Arte & Gerando Renda <br />
                        –  Corte e Costura</h4>
                    <div className="container">
                        <img src={ImgCurso12} className="imgQuemSomosP02" />
                        <p className="paragrafoQuemSomos03">Curso ofertado tanto para jovens acima de 18 anos, quanto para mulheres em situação de vulnerabilidade que tem o intuito de confeccionar as roupas da marca social do Projeto Surfar, bem como também pode confeccionar roupas para outras empresas. Para gerar renda tanto para a instituição, quanto para os participantes.</p>
                    </div>
                    <h4 className="curso01">Morro é tudo de bom</h4>
                    <div className="container">
                        <img src={ImgCurso13} className="imgQuemSomosP02" />
                        <p className="paragrafoQuemSomos03">O projeto é um grande espaço aberto para debates, oficinas e mostras sobre as diversas vertentes de arte e cultura, oportunizando a fruição, estimulando um intenso diálogo de forma horizontal e transversal, divulgando, registrando e documentando as atividades artísticas e culturais em um espaço qualificado.
                        Capoeira,maculelé,puxada de rede,samba de roda, jiu jitsu,skate surf grafite desenho livre pintura em telas contação de histórias leitura,hip hop.
                        dança de rua.teatro,artesanato.identidade,corte de cabelo, franças,ritmos e danças afro, corte e costura, comidas típicas e todas as demais formas de manifestações artisticas e culturais que possam compor este projeto.</p>
                    </div>
                    <h4 className="curso01">Curso de TI</h4>
                    <div className="container">
                        <img src={ImgCurso14} className="imgQuemSomosP02" />
                        <p className="paragrafoQuemSomos03">O curso de Tecnologia da Informação é uma jornada educacional que capacita os estudantes a compreenderem e aplicarem os princípios, ferramentas e técnicas necessárias para gerenciar, processar e utilizar informações de forma eficiente e eficaz, através de sistemas computacionais e tecnologias relacionadas."</p>
                    </div>
                    <h4 className="curso01">Mulheres Cuidadoras que e Cuidam <br />
                        -  Cuidadoras de Idosos Deficientes e Acamados</h4>
                    <div className="container">
                        <img src={ImgCurso15} className="imgQuemSomosP02" />
                        <p className="paragrafoQuemSomos03">Curso de 220 horas que com reconhecimento da Secretaria de Assistência Social do governo do Estado do RS que tem por finalidade, empoderar mulheres com baixa ou nenhuma renda e que tenham filhos menores de idade, preferencialmente que sejam chefes de família, ou que estejam em situação de risco ou vulnerabilidade.</p>
                    </div>
                    <h4 className="curso01">Doce Surfar <br />
                        - Culinária e Confeitaria</h4>
                    <div className="container">
                        <img src={ImgCurso01} className="imgQuemSomosP02" />
                        <p className="paragrafoQuemSomos03">Curso que visa incentivar as crianças de forma lúdica e qualificar jovens e adultos ensinando desde o reaproveitamento dos alimentos, passando por como fazer doces, salgados, tortas e bolos </p>
                    </div>
                </div>
                <div>
                    <p className="paragrafoQuemSomos04">
                        <a href="https://wa.me/5551994962262?text=Ol%C3%A1%2C+quero+me+inscrever+em+um+dos+cursos+ofertados+pela+institui%C3%A7%C3%A3o.+" target="_blank"><button className="botaoPix">Me inscrever em um curso</button></a>
                    </p>
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

export default Cursos;
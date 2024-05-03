import NavBarComponent from "./NavBar";
import Footer from "./Footer"
import Colaboradores from "./colaboradores";
import ImagemCapaCursos from './img/capa-cursos.png'
import ImgCurso01 from './img/curso01.png'
import ImgCurso04 from './img/curso04.png'
import ImgCurso08 from './img/curso08.png'
import ImgCurso12 from './img/curso12.png'
import ImgCurso13 from './img/curso13.png'
import ImgCurso14 from './img/curso14.png'
import ImgCurso15 from './img/curso15.png'
import ImgCurso16 from './img/serigrafia.png'

function Cursos(){
    return(
        <div>
            <NavBarComponent/>
            <img src={ImagemCapaCursos} className="imgCapas" />
            <div className="divMae">
                <div style={{ marginBottom: '3rem' }}>
                    <h3 className="tituloh3">Conheça os cursos ofertados pela instituição</h3>
                    
                </div>
            </div>
            <div className="divCatastrofe">

                    <h3 className="tituloh3-1">Cursos</h3>
                    
                    <div className="row">    
                            <h6>Cadeia Produtiva do Surf</h6>
                            <img src={ImgCurso04} className="imgcat" />
                            <h6>Onda de Cidadania</h6>
                            <img src={ImgCurso08} className="imgcat" />
                            <h6>1ª Impressão – Serigrafia</h6>
                            <img src={ImgCurso16} className="imgcat" />
                            <h6>Fazendo Arte & Gerando Renda –  Corte e Costura</h6>
                            <img src={ImgCurso12} className="imgcat" />
                            <h6>Morro é tudo de bom</h6>
                            <img src={ImgCurso13} className="imgcat" />
                            <h6>Curso de TI</h6>
                            <img src={ImgCurso14} className="imgcat" />
                            <h6>Mulheres Cuidadoras que e Cuidam -  Cuidadoras de Idosos Deficientes e Acamados</h6>
                            <img src={ImgCurso15} className="imgcat" />
                            <h6>Doce Surfar - Culinária e Confeitaria</h6>
                            <img src={ImgCurso01} className="imgcat" />
                            
                    </div>
                    <div>
                    <button className="botaoPix02">Copiar chave pix</button>
                    </div>
                </div>
            <Colaboradores />
            <Footer />
        </div>
    )
}

export default Cursos;
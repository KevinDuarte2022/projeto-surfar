import NavBarComponent from "./NavBar";
import Footer from "./Footer"
import Colaboradores from "./colaboradores";
import ImagemCapaProjeto from './img/Projetos capa.png'
import ImgAbc from './img/abc.png'
import ImgBerimbalando from './img/berimbalando.png'
import ImgJiujistu from './img/jiujistu.png'
import ImgAulaDeSurf from './img/aulaDeSurf.png'

function Projetos() {
    return (
        <div>
            <NavBarComponent />
            <img src={ImagemCapaProjeto} className="imgCapas" />
            <div className="divMae">
                <div style={{ marginBottom: '3rem' }}>
                    <h3 className="tituloh3">Conheça os projetos da instituição</h3>

                </div>
                <div className="divCatastrofe">
                    <div className="row">
                        <h6 className="curso01" >Apoio escolar: Abc</h6>
                        <div className="container">

                            <img src={ImgAbc} className="imgcat" />
                            <p className="paragrafoCursos">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptate dolore pariatur nihil ea reprehenderit suscipit magnam incidunt fuga rerum! Quis totam, et distinctio vero facere ut dolor corrupti quidem?
                            </p>
                        </div>
                        <h6 className="curso01">Berimbalando sonhos</h6>
                        <div className="container">

                            <img src={ImgBerimbalando} className="imgcat" />
                            <p className="paragrafoCursos">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt inventore laborum impedit rem! Omnis accusamus hic incidunt, cupiditate tenetur, maiores officiis voluptatem nemo ad sunt aliquam suscipit magni quo nobis.
                            </p>
                        </div>
                        <h6 className="curso01">JiuJitsu</h6>
                        <div className="container">

                            <img src={ImgJiujistu} className="imgcat" />
                            <p className="paragrafoCursos">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt inventore laborum impedit rem! Omnis accusamus hic incidunt, cupiditate tenetur, maiores officiis voluptatem nemo ad sunt aliquam suscipit magni quo nobis.
                            </p>
                        </div>
                        <h6 className="curso01">Projeto Surfar</h6>
                        <div className="container">

                            <img src={ImgAulaDeSurf} className="imgcat" />
                            <p className="paragrafoCursos">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt inventore laborum impedit rem! Omnis accusamus hic incidunt, cupiditate tenetur, maiores officiis voluptatem nemo ad sunt aliquam suscipit magni quo nobis.
                            </p>
                        </div>

                    </div>

                </div>
            </div>
            <Colaboradores />
            <Footer />
        </div>
    )
}

export default Projetos;
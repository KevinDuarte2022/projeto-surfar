import NavBarComponent from "./NavBar";
import Footer from "./Footer";
import Colaboradores from "./Colaboradores";
import ImagemPranchaCapa from './img/prancha capa.png';
import ImagemPrancha00 from './img/prancha00.png';
import ImagemPrancha01 from './img/prancha01.jpeg';
import ImagemPrancha02 from './img/prancha02.jpeg';
import ImagemPrancha03 from './img/prancha03.jpeg';
import ImagemPrancha04 from './img/prancha04.jpeg';
import ImagemPrancha05 from './img/prancha05.jpeg';
import ImagemPrancha07 from './img/prancha07.jpeg';
import ImagemPrancha08 from './img/prancha08.jpeg';
import ImagemPrancha09 from './img/prancha09.jpeg';
import ImagemPrancha10 from './img/prancha10.jpeg';
import ImagemPrancha11 from './img/prancha11.jpeg';
import ImagemPrancha12 from './img/prancha12.jpeg';
import ImagemPrancha13 from './img/prancha13.jpeg';
import ImagemPrancha14 from './img/prancha14.jpeg';
import ImagemPrancha15 from './img/prancha15.jpeg';
import VideoPrancha from './videos/video-prancha.mp4'
import ImgWpp from './img/wpp.png';




function FabricacaoDePranchas() {
    return (
        <div>
            <NavBarComponent />
            <img src={ImagemPranchaCapa} className="imgCapas" />
            <div className="divMae">

                <div>
                    <div className="paragrafoQuemSomos">
                    <h3 className="tituloParagrafo01">Reforma e fabricação de pranchas</h3>
                    <div className="divMae">
                    </div>

                        <div className="videoContainer">
                            <video controls>
                                <source src={VideoPrancha} type="video/mp4" />
                                Seu navegador não suporta a tag de vídeo.
                            </video>
                        </div>


                        <div className="QuemSomosHome" >

                            <h4 className="tituloParagrafo01">Venha conferir nosso catálogo</h4>

                            <div className="row justify-content-center">
                                <div className="col-sm-3 d-flex flex-column align-items-center">
                                    <figure className="text-center">
                                        <img src={ImagemPrancha09} className="imgcat2" />
                                        <figcaption>Imagem 1</figcaption>
                                    </figure>
                                </div>
                                <div className="col-sm-3 d-flex flex-column align-items-center">
                                    <figure className="text-center">
                                        <img src={ImagemPrancha08} className="imgcat2" />
                                        <figcaption>Imagem 2</figcaption>
                                    </figure>
                                </div>
                                <div className="col-sm-3 d-flex flex-column align-items-center">
                                    <figure className="text-center">
                                        <img src={ImagemPrancha14} className="imgcat2" />
                                        <figcaption>Imagem 3</figcaption>
                                    </figure>
                                </div>
                                <div className="col-sm-3 d-flex flex-column align-items-center">
                                    <figure className="text-center">
                                        <img src={ImagemPrancha10} className="imgcat2" />
                                        <figcaption>Imagem 4</figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-sm-3 d-flex flex-column align-items-center">
                                    <figure className="text-center">
                                        <img src={ImagemPrancha13} className="imgcat2" />
                                        <figcaption>Imagem 5</figcaption>
                                    </figure>
                                </div>
                                <div className="col-sm-3 d-flex flex-column align-items-center">
                                    <figure className="text-center">
                                        <img src={ImagemPrancha12} className="imgcat2" />
                                        <figcaption>Imagem 6</figcaption>
                                    </figure>
                                </div>
                                <div className="col-sm-3 d-flex flex-column align-items-center">
                                    <figure className="text-center">
                                        <img src={ImagemPrancha07} className="imgcat2" />
                                        <figcaption>Imagem 7</figcaption>
                                    </figure>
                                </div>
                                <div className="col-sm-3 d-flex flex-column align-items-center">
                                    <figure className="text-center">
                                        <img src={ImagemPrancha15} className="imgcat2" />
                                        <figcaption>Imagem 8</figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-sm-3 d-flex flex-column align-items-center">
                                    <figure className="text-center">
                                        <img src={ImagemPrancha01} className="imgcat2" />
                                        <figcaption>Imagem 9</figcaption>
                                    </figure>
                                </div>
                                <div className="col-sm-3 d-flex flex-column align-items-center">
                                    <figure className="text-center">
                                        <img src={ImagemPrancha02} className="imgcat2" />
                                        <figcaption>Imagem 10</figcaption>
                                    </figure>
                                </div>
                                <div className="col-sm-3 d-flex flex-column align-items-center">
                                    <figure className="text-center">
                                        <img src={ImagemPrancha03} className="imgcat2" />
                                        <figcaption>Imagem 11</figcaption>
                                    </figure>
                                </div>
                                <div className="col-sm-3 d-flex flex-column align-items-center">
                                    <figure className="text-center">
                                        <img src={ImagemPrancha04} className="imgcat2" />
                                        <figcaption>Imagem 12</figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-sm-3 d-flex flex-column align-items-center">
                                    <figure className="text-center">
                                        <img src={ImagemPrancha05} className="imgcat2" />
                                        <figcaption>Imagem 13</figcaption>
                                    </figure>
                                </div>
                                <div className="col-sm-3 d-flex flex-column align-items-center">
                                    <figure className="text-center">
                                        <img src={ImagemPrancha11} className="imgcat2" />
                                        <figcaption>Imagem 14</figcaption>
                                    </figure>
                                </div>

                            </div>

                        </div>
                        <div className="button-container-pranchas">
                            <p style={{ paddingBottom: '2rem' }}>
                                <a href="https://wa.me/5551994962262?text=Me%20interessei%20por%20uma%20prancha%20do%20Projeto%20Surfar.%20Gostaria%20de%20um%20or%C3%A7amento." target="_blank">
                                    <button className="botaoPix">Orçamento de prancha</button>
                                </a>
                            </p>
                        </div>

                    </div>
                </div>
                <Colaboradores />
                <Footer />
            </div>


            <div className="whatsapp">
                <a target="_blank" href="https://wa.me/5551994962262?text=Olá, gostaria de saber mais sobre a ONG Projeto Surfar.">
                    <img src={ImgWpp} />
                </a>
            </div>
        </div>
    )
}

export default FabricacaoDePranchas;
import React, { useState } from "react"
import { Link } from "react-router-dom"
import NavBarComponent from "./NavBar"
import './index.css';
import Carrossel from "./Carrossel"
import { Container } from "bootstrap-4-react/lib/components/layout";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer"
import Colaboradores from "./colaboradores";
import ImagemP1 from './img/Design sem nome (9).png';
import ImagemPraia from './img/criancas-praia.jpeg';
import ImgWpp from './img/wpp.png';
import VideoTheo from './videos/Por favor ajudem!.mp4'



function Home() {

  const [textoPix, setTextoPix] = useState('Copiar chave pix');
  const copiarChavePix = () => {
    navigator.clipboard.writeText('09097983000109')
    setTextoPix('Chave pix copiada')

  }

  // src\img\capa-video-theo.jpeg

  return (
    <div>
      <NavBarComponent />
      <Carrossel />

      <div className="paragrafoQuemSomos">
        <h3 className="tituloParagrafo01">Por favor, ajudem!</h3>

        <div>
          <div className="videoContainer">
            <video controls >
              <source src={VideoTheo} type="video/mp4" />
              Seu navegador não suporta a tag de vídeo.
            </video>
          </div>
        </div>

        <h3 className="tituloParagrafo01">Quem somos?</h3>
        <p className="paragrafoQuemSomos02">

          Após sofrerem assalto por dois adolescentes no ano de 2000, o casal de empresários Gicele Melo e Gustavo Rocha tiveram suas vidas transformadas. Um episódio que poderia ter deixado eles com medo e raiva, mas ao contrário, gerou vontade de ajudar e a partir daí, surgiu o Projeto Surfar.  Uma Instituição sem fins lucrativos, inicialmente voltada para jovens de periferia em vulnerabilidade social. <br></br>
          MISSÃO: Fazer com que as pessoas em vulnerabilidade social melhorem a sua qualidade de vida e alcancem o desenvolvimento sócio econômico. VISÃO: Ser referência na inclusão social de pessoas em vulnerabilidade, ofertando projetos de educação, esporte, cultura, lazer e profissionalizantes.
          VALORES: Valorização das pessoas; Comprometimento com a causa social; Qualidade nos resultados.
          Em 2006 o início tiveram 80 pessoas beneficiadas, 04 voluntários, 05 apoiadores, oficinas de alfabetização, reforço escolar e capoeira... <Link to='/quem-somos' style={{ textDecoration: 'none' }}>Ler mais</Link>
          <img className="imgQuemSomosP" src={ImagemP1} />

        </p>

      </div>

      <div className="paragrafoQuemSomos">
        <h3 className="tituloParagrafo01">Ajude a mudar o mundo com um pequeno gesto</h3>
        <p className="paragrafoQuemSomos03">Sua doação vai ajudar a transformar muitas vidas através do Projeto Surfar</p>


        <h3 className="tituloParagrafo01">Vem fazer parte dessa família</h3>
        <p className="paragrafoQuemSomos03">
          É simples. Para ajudar o Projeto Surfar, as crianças, os adolescentes e idosos beneficiados pela instituição, você pode:
        </p>
        <p className="textoDoarHome">
          <button onClick={() => { copiarChavePix() }} className="botaoPix">{textoPix}</button>
        </p>
        <h3 className="tituloParagrafo">O que mais posso doar?</h3>
        <p className="paragrafoQuemSomos03">
          Você também pode ajudar de outras formas.
        </p>
        <p className="textoDoarHome">
          <Link to='/doe-aqui'><button className="botaoPix">Saber mais</button></Link>
        </p>


        <h3 className="tituloParagrafo01">Seja um voluntário nessa causa</h3>
        <p className="paragrafoQuemSomos03">
          O Projeto Surfar trabalha com voluntários. Talvez você tenha algum talento, habilidade ou formação que possa ser útil para ajudar a tranformar a vida de muitas famílias.
        </p>
        <p className="textoDoarHome">
          <Link to='/seja-voluntario'><button className="botaoPix">Saber mais</button></Link>
        </p>
      </div>

      <div className="paragrafoQuemSomos">
        <h3 className="tituloParagrafo01">Vem surfar com a gente</h3>
        <p className="paragrafoQuemSomos02">
          Agradecemos e aproveitamos para convidá-lo a vir surfar com a gente e fazer a diferneça! "Se mais pessoas surfarem e estiverem conectadas com esses valores, o mundo será um lugar melhor"
          CONTATO: Associação Projeto Surfar -PoA/RS F: 51- 3384 9728 /51- 994962262
          email: ongsurfar@hotmail.com
          facebook: associação Projeto Surfar
          Instagran: @projetosurfar
        </p>
        <div >
          <img src={ImagemPraia} className="imgQuemSomosP" />
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
};



export default Home;
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



function Home() {
 
  const [textoPix, setTextoPix] = useState ('Copiar chave pix');
  const copiarChavePix = () => {
    navigator.clipboard.writeText('09097983000109')
    setTextoPix ('Chave pix copiada')
  
  }

  return (
    <div>
      <NavBarComponent />
      <Carrossel />

      <div className="QuemSomosHome" style={{ marginTop: '4rem' }}>

        <h3 className="tituloParagrafo01">Quem somos?</h3>
        <p style={{ width: '90%', margin: 'auto' }}>

          Após sofrerem assalto por dois adolescentes no ano de 2000, o casal de empresários Gicele Melo e Gustavo Rocha tiveram suas vidas transformadas. Um episódio que poderia ter deixado eles com medo e raiva, mas ao contrário, gerou vontade de ajudar e a partir daí, surgiu o Projeto Surfar.  Uma Instituição sem fins lucrativos, inicialmente voltada para jovens de periferia em vulnerabilidade social. <br></br>
          MISSÃO: Fazer com que as pessoas em vulnerabilidade social melhorem a sua qualidade de vida e alcancem o desenvolvimento sócio econômico. VISÃO: Ser referência na inclusão social de pessoas em vulnerabilidade, ofertando projetos de educação, esporte, cultura, lazer e profissionalizantes.
          VALORES: Valorização das pessoas; Comprometimento com a causa social; Qualidade nos resultados.
          Em 2006 o início tiveram 80 pessoas beneficiadas, 04 voluntários, 05 apoiadores, oficinas de alfabetização, reforço escolar e capoeira... <Link to='/quem-somos' style={{ textDecoration: 'none' }}>Ler mais</Link>
          <img className="imgQuemSomosP" src={ImagemP1} />

        </p>

      </div>

      <div>

        <h3 className="tituloh3">Ajude a mudar o mundo com um pequeno gesto</h3>
        <h4 className="subtitulo" style={{ marginBottom: '3rem' }}>Sua doação vai ajudar a transformar muitas vidas através do Projeto Surfar</h4>

        <div className="doarHome">
          <h3 className="tituloPixHome">Vem fazer parte dessa família</h3>
          <p className="textoDoarHome">
            É simples. Para ajudar o Projeto Surfar, as crianças, os adolescentes e idosos beneficiados pela instituição, você pode:
          </p>
          <p className="textoDoarHome">
          <button onClick={()=>{copiarChavePix()}}  className="botaoPix">{textoPix}</button>
          </p>
          <h3 className="tituloPixHome">O que mais posso doar?</h3>
          <p className="textoDoarHome">
            Você também pode ajudar de outras formas.
          </p>
          <p className="textoDoarHome">
          <Link to='/doe-aqui'><button className="botaoPix">Saber mais</button></Link>
          </p>
        </div>

        <div className="doarHome" style={{ marginTop: '4rem' }}>
          <div className="divMeio">
            <h3 className="tituloPixHome">Seja um voluntário nessa causa</h3>
            <p className="textoDoarHome" style={{ width: '60%', margin: 'auto', marginBottom: '16px'  }}>
              O Projeto Surfar trabalha com voluntários. Talvez você tenha algum talento, habilidade ou formação que possa ser útil para ajudar a tranformar a vida de muitas famílias.
            </p>
            <p className="textoDoarHome">
            <Link to='/seja-voluntario'><button className="botaoPix">Saber mais</button></Link>
            </p>
          </div>

        </div>

        <div className="doarHome" style={{ marginTop: '4rem' }}>
          <div className="divMeio">
            <h3 className="tituloPixHome">Vem surfar com a gente</h3>
            <p className="textoDoarHome" style={{ width: '80%', margin: 'auto' }}>
              Agradecemos e aproveitamos para convidá-lo a vir surfar com a gente e fazer a diferneça! "Se mais pessoas surfarem e estiverem conectadas com esses valores, o mundo será um lugar melhor"
              CONTATO: Associação Projeto Surfar -PoA/RS F: 51- 3384 9728 /51-98401 7604
              email: ongsurfar@hotmail.com
              facebook: associação Projeto Surfar
              Instagran: @projetosurfar
            </p>
            <div >
              <img src={ImagemPraia} className="imgPraia" />
            </div>
          </div>

        </div>
        
      </div>
      <Colaboradores />
      <Footer />
      <div className="whatsapp">
                <a target="_blank" href="https://wa.me/555184017604?text=Olá, gostaria de saber mais sobre a ONG Projeto Surfar.">
                <img src={ImgWpp}/>
                </a>
            </div>
    </div>
  )
};



export default Home;
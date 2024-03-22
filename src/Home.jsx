import React from "react"
import { Link } from "react-router-dom"
import NavBarComponent from "./NavBar"
import './index.css';
import Carrossel from "./Carrossel"
import { Container } from "bootstrap-4-react/lib/components/layout";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer"
import Colaboradores from "./colaboradores";
import ImagemP1 from './img/Design sem nome (9).png';
import ImagemP2 from './img/Design sem nome (6).png';
import QuemSomos from "./QuemSomos";

function Home() {
  let navigate = useNavigate();
  const doar10 = (string) => {
    navigate('/doe-aqui', { valor: string });
  };
  return (
    <div>
      <NavBarComponent />
      <Carrossel />

      <div className="QuemSomosHome">

        <h3 className="tituloParagrafo01">Quem somos?</h3>
        <p style={{width: '90%', margin:'auto'}}>

          Após sofrerem assalto por dois adolescentes no ano de 2000, o casal de empresários Gicele Melo e Gustavo Rocha tiveram suas vidas transformadas. Um episódio que poderia ter deixado eles com medo e raiva, mas ao contrário, gerou vontade de ajudar e a partir daí, surgiu o Projeto Surfar.  Uma Instituição sem fins lucrativos, inicialmente voltada para jovens de periferia em vulnerabilidade social. <br></br>
          MISSÃO: Fazer com que as pessoas em vulnerabilidade social melhorem a sua qualidade de vida e alcancem o desenvolvimento sócio econômico. VISÃO: Ser referência na inclusão social de pessoas em vulnerabilidade, ofertando projetos de educação, esporte, cultura, lazer e profissionalizantes.
          VALORES: Valorização das pessoas; Comprometimento com a causa social; Qualidade nos resultados.
          Em 2006 o início tiveram 80 pessoas beneficiadas, 04 voluntários, 05 apoiadores, oficinas de alfabetização, reforço escolar e capoeira... <Link to='quem-somos' style={{textDecoration:'none'}}>Ler mais</Link>
          <img className="imgQuemSomosP" src={ImagemP1} />

        </p>

      </div>
      <Colaboradores />
      <Footer />
    </div>
  )
};



export default Home;
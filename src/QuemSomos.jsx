import NavBarComponent from "./NavBar";
import Footer from "./Footer"
import Colaboradores from "./Colaboradores";
import ImagemQuemSomos from './img/Quem somos nós.png';
import ImagemP1 from './img/Design sem nome (9).png';
import ImagemP2 from './img/Design sem nome (6).png';
import ImagemP3 from './img/Design sem nome (3).png';
import ImagemP4 from './img/CapoeiraEJiuJitsu.png';
import ImagemP5 from './img/CORTE E COSTURA.png';
import ImagemP6 from './img/fila.png';  
import ImagemP7 from './img/mãos.png';
import ImagemP8 from './img/homemSentado.png';
import ImgWpp from './img/wpp.png';

function QuemSomos() {
    return (
        <div>
            <NavBarComponent />
            <img className="imgCapas" src={ImagemQuemSomos} />
            <div className="paragrafoQuemSomos">

                <h3 className="tituloParagrafo01">Como tudo começou</h3>
                <p className="paragrafoQuemSomos02">

                    Após sofrerem assalto por dois adolescentes no ano de 2000, o casal de empresários Gicele Melo e Gustavo Rocha tiveram suas vidas transformadas. Um episódio que poderia ter deixado eles com medo e raiva, mas ao contrário, gerou vontade de ajudar e a partir daí, surgiu o Projeto Surfar.
                    <img className="imgQuemSomosP" src={ImagemP1} />


                </p>



                <h3 className="tituloParagrafo">No Ano de 2006 nasce a Associação Projeto Surfar</h3>
                <p className="paragrafoQuemSomos02">


                    Uma Instituição sem fins lucrativos, inicialmente voltada para jovens de periferia em vulnerabilidade social.
                    MISSÃO: Fazer com que as pessoas em vulnerabilidade social melhorem a sua qualidade de vida e alcancem o desenvolvimento sócio econômico.  VISÃO: Ser referência na inclusão social de pessoas em vulnerabilidade, ofertando projetos de educação, esporte, cultura, lazer e profissionalizantes.
                    VALORES: Valorização das pessoas; Comprometimento com a causa social; Qualidade nos resultados.
                    Em 2006 no início tiveram 80 pessoas beneficiadas, 04 voluntários, 05 apoiadores, oficinas de alfabetização, reforço escolar e capoeira.
                    <img src={ImagemP2} className="imgQuemSomosP" />
                </p>



                <h3 className="tituloParagrafo">24 anos Projeto Surfar</h3>
                <p className="paragrafoQuemSomos02">


                    No ano de 2024, estamos completando 24 anos de existência. Com 1500 Pessoas beneficiadas e 9 Oficinas: Capoeira, surf, Jiu jitsu, alfabetização, reforço escolar, música, culinária, Skate. 09 Comunidades atendidas. A Associação Projeto Surfar está situada na Rua Borborema, 687 e 691, na vila João Pessoa - Porto Alegre/RS.
                    <img src={ImagemP3} className="imgQuemSomosP" />
                </p>



                <h3 className="tituloParagrafo">Registro e mais</h3>
                <p className="paragrafoQuemSomos02">


                    A OSC está registrada no CMDCA - PoA/RS, com Serviço de Apoio a Rede de Atendimento. Executa o atendimento direto e indireto durante os dias da semana no turno inverso a escola com atividades voltadas para educação, saúde, esporte, cultura e lazer para beneficiados de 0 a 14 anos, tendo como braço forte a Escola de capoeira "Berimabalando Sonhos" e o Jiu Jitsu.
                    <img src={ImagemP4} className="imgQuemSomosP" />
                </p>



                <h3 className="tituloParagrafo">Cursos profissionalizantes</h3>
                <p className="paragrafoQuemSomos03">


                    Para os jovens e os responsáveis dos beneficiados, são oferecidos cursos visando a inclusão no mercado de trabalho.
                    <img src={ImagemP5} className="imgQuemSomosP" />
                </p>



                <h3 className="tituloParagrafo">Atendimentos Emergenciais diante da pandemia do Covid-19</h3>
                <p className="paragrafoQuemSomos02">

                    O número de atendimentos cresceu significativamente, cadastramos mais 600 famílias, do qual fizemos o atendimento com a entrega de doações de hortifrutis, refeições (almoço e janta), agasalhos, cobertores, cestas básicas de alimentos e higiene. Nossa equipe multidisciplinar também atuou de acordo com as necessidades, oferecendo atendimentos psicológico e psiquiátrico, assistência social, odontológico e nutricional. Cesta básica de alimentos: 1.500/mês. Cestas básicas de higiene: 1.500/mês. Doações de hortifrutis: 800 kilos /mês. Marmitas: 6.000 /mês. Cobertores: 3.000/mês. No inverno, agasalhos e calçados: 20.000 peças/ano. Parceiros: 30. Tempo de atuação: 2 anos.
                    <img src={ImagemP6} className="imgQuemSomosP" />
                </p>



                <h3 className="tituloParagrafo">Parcerias atuais</h3>
                <p className="paragrafoQuemSomos02">

                    CEASA RS - PRATO PARTA TODOS ASPOA - ASSOCIAÇÃO DE SURF DE PORTO ALEGRE GR - GUSTAVO ROCHA PRANCHAS DE SURF UNIMAQUI-MANUTENÇÃO DE MÁQUINAS SURFARI - CONFECÇÃO DE VESTUÁRIO E PESQUISAS SOBRE O SURF A.CAPOEIRA - MESTRE GOROROBA PROJETO GADITAS - JIU JITSU BEE SURF WAX - PARAFINAS COMERCIO LOCAL NOTA FISCAL GAÚCHA - PROGRAMA DO GOVERNO TAMPINHA LEGAL - MATERIAS RECICLÁVEIS SIMPATIZANTES DA CAUSA SOCIAL - APOIADORES COMUNIDADES PARCEIRAS - OSCS COMUNIDADE.
                    <img src={ImagemP7} className="imgQuemSomosP" />
                </p>



                <h3 className="tituloParagrafo">Metas para os próximos anos</h3>
                <p className="paragrafoQuemSomos02">


                    Nossa meta para os próximos anos é tirar o máximo de chefes de famílias da situação de desemprego, inserindo-os no mercado de trabalho e impactando, assim, na qualidade de vida de toda a família. Nosso sonho é que consigamos evadir a pobreza e a miséria da favela!
                    <img src={ImagemP8} className="imgQuemSomosP" />
                </p>



                <p className="paragrafoQuemSomos02" style={{paddingBottom:'3rem'}}> 
                    AGRADECEMOS E APROVEITAMOS PARA CONVIDÁ-LOS A VIR SURFAR COM A GENTE E FAZER A DIFERENÇA! "Se mais pessoas surfarem e estiverem conectadas com esses valores, o mundo será um lugar melhor"<br></br>
                    CONTATO: Associação Projeto Surfar -PoA/RS F: 51- 3384 9728 /51-98401 7604<br></br>
                    email: ongsurfar@hotmail.com<br></br>
                    facebook: associação Projeto Surfar<br></br>
                    Instagram: @projetosurfar
                    
                </p>
            </div>
            <Colaboradores />
            <Footer />
            <div className="whatsapp">
                <a target="_blank" href="https://wa.me/5551994962262?text=Olá, gostaria de saber mais sobre a ONG Projeto Surfar.">
                <img src={ImgWpp} width={'85px'} />
                </a>
            </div>
        </div>

    );
};

export default QuemSomos;
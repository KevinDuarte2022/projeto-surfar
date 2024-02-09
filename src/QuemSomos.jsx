import NavBarComponent from "./NavBar";
import ImagemQuemSomos from './img/Quem somos nós.png';
import ImagemP1 from './img/Design sem nome (9).png';
import ImgagemP2 from './img/Design sem nome (6).png';

function QuemSomos() {
    return (
        <div>
            <NavBarComponent />
            <img className="imgQuemSomos" src={ImagemQuemSomos} />
            <div className="paragrafoQuemSomos">
                <p>
                    <h3 className="tituloParagrafo">Como tudo começou</h3>
                    Após sofrerem assalto por dois adolescentes no ano de 2000, o casal de empresários Gicele Melo e Gustavo Rocha tiveram suas vidas transformadas. Um episódio que poderia ter deixado eles com medo e raiva, mas ao contrário, gerou vontade de ajudar e a partir daí , surgiu o Projeto Surfar.
                    <img className="imgQuemSomosP" src={ImagemP1} />


                </p>

                <p>
                    <h3 className="tituloParagrafo">No Ano de 2006 nasce a Associação Projeto Surfar</h3>

                    Uma Instituição sem fins lucrativos , inicialmente voltada para jovens de periferia em vulnerabilidade social. <br></br>
                    MISSÃO : Fazer com que as pessoas em vulnerabilidade social melhorem a sua qualidade de vida e alcancem o desenvolvimento sócio econômico. <br></br> VISÃO : Ser referência na inclusão social de pessoas em vulnerabilidade, ofertando projetos de educação, esporte, cultura, lazer e profissionalizantes.<br></br>
                    VALORES: Valorização das pessoas; Comprometimento com a causa social; Qualidade nos resultados.<br></br>
                    Em 2006 o início tiveram 80 pessoas beneficiadas, 04 voluntários, 05 apoiadores oficinas de alfabetização, reforço escolar e capoeira.
                    <img src={ImgagemP2} className="imgQuemSomosP"/>
                </p>
                
                    
                
                <p>
                    No ano de 2022 ,estamos completando 22 anos de existência 1500 Pessoas beneficiadas 08 Oficinas: Capoeira, surf, Jiu jitsu, alfabetização, reforço escolar, música culinária, Skate 09 Comunidades atendida. A Associação Projeto Surfar esta situada na Rua Borborema ,687 e 691 , na vila João Pessoa - Porto Alegre/RS
                </p>
                <p>
                    A OSC está registrada no CMDCA -PoA/RS,com Serviço de Apoio a Rede de Atendimento , executa o atendimento direto e indireto durante os dias da semana no turno inverso a escola com atividades voltadas para educação ,saúde ,esporte ,cultura e lazer para beneficiados de 0 a 14 anos, tendo como braço forte a Escola de capoeira "Berimabalndo Sonhos " e o Jiu Jitsu .
                </p>
                <p>
                    Cursos profissionalizantes: Para os jovens e os responsáveis dos beneficiados ,são oferecidos cursos visando a inclusão no mercado de trabalho .
                </p>
                <p>
                    ATENDIMENTOS EMERGENCIAIS DIANTE DA PANDEMIA DO COVID -19 O número de atendimentos cresceu significativamente ,cadastramos mais 600 famílias ,do qual fizemos o atendimento com a entrega de doações de hortifrutis ,refeições (almoço e janta),agasalhos , cobertores ,cestas básicas de alimentos e higiene . Nossa equipe multidisciplinar também atuou de acordo com as necessidades ,oferecndo atendimentos psicológico e psiquiátrico, assistência social ,odontológico e nutricional . CESTAS BÁSICAS DE ALIMENTOS : 1.500/MÊS
                </p>
                <p>
                    Cestas básicas de higiene : 1.500/mês doações de hortifrutis: 800 kilos /mês marmitas : 6.000 /mês cobertores : 3.000 /meses inverno agasalhos e calçados : 20.000 peças /ano parceiros : 30 tempo de atuação : 2 anos
                </p>
                <p>
                    PARCERIA ATUAL: CEASA RS -PRATO PARTA TODOS ASPOA -ASSOCIAÇÃO DE SURF DE PORTO ALEGRE GR- GUSTAVO ROCHA PRANCHAS DE SURF UNIMAQUI-MANUTENÇÃO DE MÁQUINAS SURFARI - CONFECÇÃO DE VESTUÁRIO E PESQUISAS SOBRE O SURF A.CAPOEIRA -MESTRE GOROROBA PROJETO GADITAS -JIU JITSU BEE SURF WAX -PARAFINAS COMERCIO LOCAL NOTA FISCAL GAÚCHA -PROGRAMA DO GOVERNO TAMPINHA LEGAL - MATERIAS RECICLÁVEIS SIMPATIZANTES DA CAUSA SOCIAL - APOIADORES COMUNIDADES PARCEIRAS - OSCS COMUNIDADE
                </p>
                <p>
                    Ainda em 2022 pretendemos terminar a construção da escola profissionalizante e ter um melhor aproveitamento dos espaços para iniciar o ano de 2023 com maior organização ,podendo assim ,atender nossos beneficiados com maior qualidade . Com esse novo espaço, poderemos atender simultaneamente os beneficiados com os diversos cursos e atividades . Nossa meta para 2023 é tirar o máximo de chefes de famílias da situação de desemprego ,inserindo-os no mercado de trabalho e impactando assim, na qualidade de vida de toda a família . Nosso sonho é que consigamos evadir a pobreza e a miséria da favela !
                </p>
                <p>
                    AGRADECEMOS E APROVEITAMOS PARA CONVIDÁ-LOS A VIR SURFAR COM A GENTE E FAZER A DIFERENÇA ! "Se mais pessoas surfarem e e stiverem conectadas com esses valores, o mundo será um lugar melhor" CONTATO: Associação Projeto Surfar -PoA/RS F: 51- 3384 9728 /51-98401 7604 email :ongsurfar@hotmail.com facebook: associação Projeto Surfar Instagran :@projetosurfar
                </p>
            </div>
        </div>

    );
};

export default QuemSomos;
//import {FaInstagram, FaFacebook} from 'react-icons/fa'
function Footer() {
    return (
        <div className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        {/* Coluna 1 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Endereço</h4>
                            <ul className="list-unstyled">
                                <li>A Associação Projeto Surfar está situada na Rua Borborema, 687 e 691, na vila João Pessoa - Porto Alegre/RS.</li>
                            </ul>
                        </div>
                        {/* Coluna 2 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Menu</h4>
                            <ul className="list-unstyled">
                                <li><a href="/" className="linkh4">Home</a></li>
                                <li><a href="/" className="linkh4">Quem Somos</a></li>
                                <li><a href="/" className="linkh4">Doe aqui</a></li>
                                <li><a href="/" className="linkh4">Seja Voluntário</a></li>
                                <li><a href="/" className="linkh4">Cursos Ofertados</a></li>
                                <li><a href="/" className="linkh4">Projetos</a></li>
                                <li><a href="/" className="linkh4">Consultoria</a></li>
                                <li><a href="/" className="linkh4">Fale Conosco</a></li>
                            </ul>
                        </div>
                        {/* Coluna 3 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Contato</h4>
                            <ul className="list-unstyled">
                                <li><a href="/" className="linkh4">Tel: 51- 3384 9728</a></li>
                                <li><a href="/" className="linkh4">Tel: 51-98401 7604</a></li>
                                <li><a href="/" className="linkh4">email: ongsurfar@hotmail.com</a></li>
                                <li><a href="/" className="linkh4">facebook: associação Projeto Surfar</a></li>
                                <li><a href="/" className="linkh4">Instagram: @projetosurfar</a></li>
                            </ul>
                        </div>
                        {/* Coluna 4 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Agradecemos</h4>
                            <ul className="list-unstyled">
                                <li>Agradecemos e aproveitamos para convidá-los a vir surfar com a gente e fazer a diferença! "Se mais pessoas surfarem e estiverem conectadas com esses valores, o mundo será um lugar melhor".</li>
                                
                            </ul>
                        </div>
                    </div>
                    {/* Footer botão */}
                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear() + ","} Desenvolvido por <a href="/" className="kevin">Kevin Duarte.</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;
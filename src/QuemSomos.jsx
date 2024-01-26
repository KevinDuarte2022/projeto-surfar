import NavBarComponent from "./NavBar";
import ImagemQuemSomos from './img/pexels-kampus-production-6299964 (3).jpg';

function QuemSomos() {
    return (
        <div>
            <NavBarComponent />
            <img className="imgQuemSomos" src={ImagemQuemSomos} />
            <h1 className="tituloQuemSomos">Quem Somos Nós?</h1>
        </div>

    );
};

export default QuemSomos;
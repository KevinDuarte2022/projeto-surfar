import NavBarComponent from "./NavBar";
import ImagemQuemSomos from './img/Quem somos nós.png';

function QuemSomos() {
    return (
        <div>
            <NavBarComponent />
            <img className="imgQuemSomos" src={ImagemQuemSomos} />
        </div>

    );
};

export default QuemSomos;
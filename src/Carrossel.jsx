import Carousel from 'react-bootstrap/Carousel';
import Imagem01 from './img/projeto-surfar-img1.jpeg';
import Imagem02 from './img/projeto-surfar-img2.jpeg';
import Imagem03 from './img/projeto-surfar-img4.jpeg'


function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        
        <img src={Imagem01} className="d-block w-100" alt='Criança' title='Criança'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Imagem02} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Imagem03} alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
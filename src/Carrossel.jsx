import Carousel from 'react-bootstrap/Carousel';
import Imagem01 from './img/Design sem nome (7).png';
import Imagem02 from './img/Design sem nome (2).png';
import Imagem03 from './img/Design sem nome (4).png'
import Imagem04 from './img/Design sem nome (5).png'
import Imagem05 from'./img/Design sem nome (8).png'
import Imagem06 from'./img/Design sem nome (6).png'
import Imagem07 from'./img/Design sem nome (3).png'


function Carrossel() {
  return (
    <Carousel className='carrossel w-100'>
      <Carousel.Item>
        
        <img src={Imagem01} className="redimensionar-imagem carrossel w-100"  alt='Criança' title='Criança'/>
        <Carousel.Caption>
          <h3>Projeto Surfar</h3>
          <p>Aula de Surf</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="redimensionar-imagem carrossel w-100" src={Imagem02} />
        <Carousel.Caption>
        <h3>Projeto Surfar</h3>
          <p>Hora do lanche</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="redimensionar-imagem carrossel w-100" src={Imagem03} alt="" />
        <Carousel.Caption>
        <h3>Projeto Surfar</h3>
          <p>
           Cuidadores de idosos
          </p>
        </Carousel.Caption>
      </Carousel.Item>
       <Carousel.Item> 
         <img className="redimensionar-imagem carrossel w-100" src={Imagem04} alt="" />
        <Carousel.Caption>
        <h3>Projeto Surfar</h3>
          <p>
            Dia de festa
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="redimensionar-imagem carrossel w-100" src={Imagem05} alt="" />
        <Carousel.Caption>
        <h3>Projeto Surfar</h3>
          <p>
           Aula de capoeira
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="redimensionar-imagem carrossel w-100" src={Imagem06} alt="" />
        <Carousel.Caption>
        <h3>Projeto Surfar</h3>
          <p>
            Reunião com crianças
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="redimensionar-imagem carrossel w-100" src={Imagem07} alt="" />
        <Carousel.Caption>
        <h3>Projeto Surfar</h3>
          <p>
            Time
          </p>
        </Carousel.Caption>
      </Carousel.Item> 
    </Carousel>
  );
}

export default Carrossel;
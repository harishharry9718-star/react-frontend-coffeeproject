import { Button } from 'react-bootstrap';
import { FaCoffee } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import About from './About';
import { Service } from './service/service';
import Offer from '../components/offer';
import Flavours from '../components/flavours';


const Home = () => {

  const Navigate = useNavigate();

  return (
    <>
      <div id="home">
        <div className='home-content'>
          <h1>rest <span><FaCoffee /></span> relax <span><FaCoffee /></span> Relief</h1>
          <p>time to Discover the perfect blend</p>
          <Button className='home-menu' variant="secondary" onClick={() => Navigate("/menu")}> See our Menu </Button>
        </div>
      </div>
      <About />
      <Flavours />
      <Offer />
      <Service />
    </>
  )
}

export default Home;
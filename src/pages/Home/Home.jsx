import background from '../../images/General/Background.jpg'
import './Home.css'
const Home = () => {
    return(<>
      <div className='backgroundImageWrapper'>
        <img src={background} className={'backgroundImage'} alt="Scooter on floor"/>
      </div>
      <h1>Home</h1>
    </>);
  };
  
  export default Home;
  
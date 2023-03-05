import './Home.css'
import background from '../../images/General/Background.jpg'
import smallLogo from '../../images/General/TWOL Logo 2021.jpg'
const Home = () => {
    return(<>
      <div className='backgroundImageWrapper'>
        <img src={background} className={'backgroundImage'} alt="Scooter on floor"/>
      </div>
      <img src={smallLogo} className={'HomeLogo'} alt="Home page logo"/>

      <div>
        <b className='Opening_Line'>rising from the ashes of the 1980’s Mod culture comes a modern-day story of five undying friendships stained by gangland violence, loss and bloody revenge...</b>
      </div>

      <div>
        <h1>UPDATES</h1>
      </div>
    </>);
  };
  
  export default Home;
  
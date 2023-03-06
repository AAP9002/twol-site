import './Home.css'
import background from '../../images/General/Background.jpg'
import smallLogo from '../../images/General/TWOL Logo 2021.jpg'
const Home = () => {
  return (<>
    <div className='backgroundImageWrapper'>
      <img src={background} className={'backgroundImage'} alt="Scooter on floor" />
    </div>
    <img src={smallLogo} className={'HomeLogo'} alt="Home page logo" />
    <b className='Opening_Line'>Rising from the ashes of the 1980`s Mod culture comes a modern-day story of five undying friendships stained by gangland violence, loss and bloody revenge...</b>
    <div>
      <h1>Sizzle Reel</h1>
      <iframe className='w-100' src="https://player.vimeo.com/video/805145280?h=830c8491ec&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" style={{width:"100%",aspectRatio:16/9}} allow="autoplay; fullscreen; picture-in-picture" title="TWOL Outro Logo.mp4" allowfullscreen></iframe>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  </>);
};

export default Home;
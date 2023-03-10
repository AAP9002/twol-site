import './Home.css'
import background from '../../images/General/Background.jpg'
import smallLogo from '../../images/General/TWOL Logo 2021.jpg'
import aboutUs from '../../images/General/temp about us.jpg'
import timelineImage from '../../images/General/MOD AND SKIN 1A.png'
import AboutUsTitle from '../../images/General/About Us Text.jpg'
import sizzle from '../../videos/FullSizeRender.mp4'


const Home = () => {
  return (<>
    <div className='backgroundImageWrapper'>
      <img src={background} className={'backgroundImage'} alt="Scooter on floor" />
    </div>
    <img src={smallLogo} className={'HomeLogo'} alt="Home page logo" />
    <b className='Opening_Line'>Rising from the ashes of the 1980`s Mod culture comes a modern-day story of five undying friendships stained by gangland violence, loss and bloody revenge...</b>
    <br />
    <br />
    <div>
      <video className='w-100' src={sizzle} type='video/mp4' controls autoplay ></video>

    </div>
    <b className='Opening_Line' style={{ backgroundColor: "white", color: "black" }}>Behind the scene stills of the sizzle reel for the upcoming feature with supporting track Umm from the forthcoming Album</b>
    <br />
    <br />
    <div className={'row'}>
      <div className={'col-md-6'}>
        <img src={AboutUsTitle} alt={"about us title"} className='w-100' />
        <img src={aboutUs} alt={"about us"} className='w-100' />
      </div>
      <div className={'col-md-6'} style={{ backgroundColor: '#49d19f', fontSize: "1.1rem", padding: "10px" }}>
        <p>
          More than forty years ago two teenage Mods, Spencer Wilder and Martin Porter, were finishing their Comprehensive School education in Gravesend, Kent. Where `living the dream` seemed to hold far more importance than focusing on the years to come.<br />
          Many moons later, and with the love for the Modernist scene remaining as strong as ever, a promise once made between them to write a film encompassing some of their youthful exploits was finally born.<br />
          "We grew up living in broken times. Where the social unrest of the 1980`s had reshaped the whole country.  Around every corner there seemed to be yet another cataclysm being shown on our TV screens. So, who'd have thought we`d now be looking back at those days with fondness and respect! For in reality, it`s those heady days of our youth that made us who we are today..."
        </p>
      </div>
    </div>
    <br /><br />
    <div className={'row'}>
      <div className={'col-md-6'} style={{ backgroundColor: '#f7cd00' }}>
        <div style={{ padding: "10px" }}>
          <p style={{fontSize:"5rem",fontWeight:"bold"}}>Time<u style={{color:"#fff"}}>line</u></p>
          <b>Thank you for your support and interest in This Way Of Life!</b>
          <p>For the latest updates, please check out our social</p>
          <a style={{ fontSize: "1.5rem" }} href='https://www.facebook.com/groups/277301879544554' target={"_blank"} rel={"noreferrer"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
          </a>
          <a className='btn btn-primary' style={{float:"right", fontSize:"1.5rem"}} href='/#/Timeline'  target={"_blank"} rel={"noreferrer"}>See Full Timeline</a>
        </div>
      </div>
      <div className={'col-md-6'} style={{ display: "table" }}>
        <img src={timelineImage} alt="Timeline" className='w-100'></img>
      </div>
    </div>
  </>);
};

export default Home;

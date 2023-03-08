import background from '../../images/General/margate.jpg'
import Gatch_slide_Logo from '../../images/Partners/GATCH/Gatch Image.jpg'
import Gatch_slide_himself from '../../images/Partners/GATCH/SCOOTER.jpg'
import Gatch_slide_Sidepanel from '../../images/Partners/GATCH/side_1.jpg'
import Gatch_slide_otherSidepanel from '../../images/Partners/GATCH/side_2.jpg'
import Gatch_slide_toolbox from '../../images/Partners/GATCH/scooter Toolbox.jpg'
import Gatch_slide_Scooter_image_1 from '../../images/Partners/GATCH/image 1.jpg'
import Gatch_slide_Mudguard_1 from '../../images/Partners/GATCH/image 2.jpg'
import Gatch_slide_Side_image_2 from '../../images/Partners/GATCH/image 3.jpg'
import Gatch_slide_Side_image_3 from '../../images/Partners/GATCH/image 4.jpg'
import Gatch_slide_Mudguard_2 from '../../images/Partners/GATCH/mudguard.jpg'
import Gatch_slide_Scooter_Before_1 from '../../images/Partners/GATCH/scooter 1.jpg'
import Gatch_slide_Scooter_Before_2 from '../../images/Partners/GATCH/scooter 2.jpg'
import Gatch_slide_Scooter_Before_3 from '../../images/Partners/GATCH/scooter 3.jpg'
import Gatch_slide_Making_side_1 from '../../images/Partners/GATCH/side 1.jpg'
import Gatch_slide_Making_side_2 from '../../images/Partners/GATCH/side 2.jpg'
import Gatch_slide_Making_side_3 from '../../images/Partners/GATCH/side 3.jpg'
import Gatch_slide_Making_side_4 from '../../images/Partners/GATCH/side 4.jpg'
import Gatch_slide_Making_side_5 from '../../images/Partners/GATCH/side 5.jpg'
import Gatch_slide_Making_side_6 from '../../images/Partners/GATCH/side 6.jpg'
import Gatch_slide_Perk from '../../images/Partners/GATCH/Gatch Perk.jpg'
import Sccotering_Main from '../../images/Partners/Scootering Partner.png'
import Badgeman from '../../images/Partners/TWOL badges Badge Man.jpg'




import './Partners.css'
import Carousel from 'react-bootstrap/Carousel';



const Partners = () => {
  return <>
    <div className='backgroundImageWrapper'>
      <img src={background} className={'backgroundImage'} alt="margate background" />
    </div>
    <h1 class='w-100' style={{backgroundColor:"#FA7F88", color: "white", fontWeight: "bold", textAlign: "center",fontSize:"3rem" }}>PARTNERS</h1>
    <br/><br/>
    <div  className='w-100' style={{ backgroundColor: "#ffffff", borderRadius: "20px", padding: "20px" }}>
      <p class='w-100' id="GATCH" style={{ color: "#aa1818", fontWeight: "bold", textAlign: "center",fontSize:"2.5rem" }}>GATCH</p>
      <div className='row'>
        <div className='col-md-6'>
          My background is in Graffiti which eventually led to Airbrush Art on scooters. For over three decades there`s very little I haven`t painted on.  Now at fifty I feel the message is just as important as the art.  I have a strong passion about vanishing culture and the urban landscape.  As every year goes by our 70`s & 80`s youth experience seems to have less place in the modern narrative. Working on this project is a privilege because I feel if our generation does not preserve our heritage no one else will.<br /><br />
          I`m a working-class lad, self-taught, who paints from personal experience and observations and will always remain true to my background.<br /><br />
          Being part of This Way Of Life has really given me a chance to show what I stand for…Thanks Lads
        </div>
        <div className='col-md-6'>
          <Carousel style={{ height: "300px", background: "#000000" }}>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 slideImages"
                src={Gatch_slide_Logo}
                alt="Gatch Logo"
              />
              <Carousel.Caption>
                {/* <h3>Label for first slide</h3>
                <p>Sample Text for Image One</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 slideImages"
                src={Gatch_slide_himself}
                alt="Gatch Himself"
              />
              <Carousel.Caption>
                {/* <h3>Label for second slide</h3>
                <p>Sample Text for Image Two</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 slideImages"
                src={Gatch_slide_Perk}
                alt="Gatch showing perk poster"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 slideImages"
                src={Gatch_slide_Sidepanel}
                alt="Gatch TWOL Side panel 1"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 slideImages"
                src={Gatch_slide_otherSidepanel}
                alt="Gatch TWOL Side panel 2"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 slideImages"
                src={Gatch_slide_toolbox}
                alt="Gatch TWOL scooter tool box"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 slideImages"
                src={Gatch_slide_Scooter_image_1}
                alt="Gatch TWOL whole scooter"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 slideImages"
                src={Gatch_slide_Mudguard_1}
                alt="Gatch TWOL mudguard 1"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 slideImages"
                src={Gatch_slide_Mudguard_2}
                alt="Gatch TWOL mudguard 2"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 slideImages"
                src={Gatch_slide_Side_image_2}
                alt="Gatch TWOL Side panel"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 slideImages"
                src={Gatch_slide_Side_image_3}
                alt="Gatch TWOL Side panel"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 slideImages"
                src={Gatch_slide_Making_side_1}
                alt="Gatch TWOL Side stage 1"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 slideImages"
                src={Gatch_slide_Making_side_2}
                alt="Gatch TWOL Side stage 2"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 slideImages"
                src={Gatch_slide_Making_side_3}
                alt="Gatch TWOL Side stage 3"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 slideImages"
                src={Gatch_slide_Making_side_4}
                alt="Gatch TWOL Side stage 3"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 slideImages"
                src={Gatch_slide_Making_side_5}
                alt="Gatch TWOL Side stage 4"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 slideImages"
                src={Gatch_slide_Making_side_6}
                alt="Gatch TWOL Side stage 5"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 slideImages"
                src={Gatch_slide_Scooter_Before_1}
                alt="Gatch TWOL Scooter Before 1"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 slideImages"
                src={Gatch_slide_Scooter_Before_2}
                alt="Gatch TWOL Scooter Before 2"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 slideImages"
                src={Gatch_slide_Scooter_Before_3}
                alt="Gatch TWOL Scooter Before 3"
              />
            </Carousel.Item>

          </Carousel>
        </div>
      </div>
      <div style={{ margin: "10px", display: "flex", justifyContent: "space-evenly" }}>
        <a style={{ fontSize: "1.5rem" }} href='https://www.facebook.com/groups/304141803367693'>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
          </svg>
        </a>
      </div>
    </div>
    <br /><br />


    <div className='w-100' style={{ backgroundColor: "#ffffff", borderRadius: "20px", padding: "20px" }}>
      <p class='w-100' style={{ color: "#aa1818", fontWeight: "bold", textAlign: "center",fontSize:"2.5rem"  }}>For All The Latest Scootering News</p>
      <div className='row'>
        <div className='col-md-6'>
          Grab your helmets, Vespas and Lambrettas! A Scootering magazine subscription features great rides, gear and trails to ride both in the UK and internationally. <br /><br />
          Exploring the rich history of scootering with some of the most iconic brands associated with scooters, Scootering magazine is a great read for any scooter fan or enthusiast, young and old!
        </div>
        <div className='col-md-6'>
          <Carousel style={{ height: "300px", background: "#000000" }}  indicators={false} controls={false}>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 slideImages"
                src={Sccotering_Main}
                alt="Scootering Logo"
              />
            </Carousel.Item>

          </Carousel>
        </div>
      </div>
      <div style={{ margin: "10px", display: "flex", justifyContent: "space-evenly" }}>
        <a className='btn btn-primary' href='https://www.scootering.com/'>Visit Website</a>
        <a style={{ fontSize: "1.5rem" }} href='https://www.facebook.com/ScooteringMag/'>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
          </svg>
        </a>
        <a style={{ fontSize: "1.5rem" }} href='https://twitter.com/ScooteringMag'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
          </svg>
        </a>
      </div>
    </div>
    <br /><br />

    <div className='w-100' style={{ backgroundColor: "#ffffff", borderRadius: "20px", padding: "20px" }}>
      <p class='w-100' style={{ color: "#aa1818", fontWeight: "bold", textAlign: "center",fontSize:"2.5rem"  }}>TheBadgeMan Ltd</p>
      <div className='row'>
        <div className='col-md-6'>
          Here at Thebadgeman Ltd, we design and supply a wide variety of promotional merchandise & memorabilia for businesses, sports groups, clubs, the entertainment industry (films/tv shows & bands), charities and councils. We specialise in enamel pin badges, keyrings, stickers, flags, clothing, medals, mugs  much more! Get in touch with our team to discuss your requirements.<br /><br />
          Our customers include, Apple Tv, BT Sport, Virgin Media, Sainsburys, Warner Brothers & Football Clubs<br /><br />
          In addition we also have a range of our own exclusive designs available to purchase in many genres from our online shop
        </div>
        <div className='col-md-6'>
          <Carousel style={{ height: "300px", background: "#000000" }} indicators={false} controls={false}>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 slideImages"
                src={Badgeman}
                alt="Badgeman Logo"
              />
              <Carousel.Caption>
                {/* <h3>Label for first slide</h3>
                <p>Sample Text for Image One</p> */}
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>
        </div>
      </div>
      <div style={{ margin: "10px", display: "flex", justifyContent: "space-evenly" }}>
        <a className='btn btn-primary' href='http://thebadgemanltd.co.uk/shop/'>Visit Website</a>
        <a style={{ fontSize: "1.5rem" }} href="tel:02380 981684">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
          </svg>
        </a>
        <a style={{ fontSize: "1.5rem" }} href="mailto:info@thebadgemanltd.co.uk">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
            <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z" />
            <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z" />
          </svg>
        </a>
      </div>
    </div>
  </>;
};

export default Partners;

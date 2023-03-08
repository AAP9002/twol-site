import badge from '../../images/General/TWOL-BADGE.jpg'
import background from '../../images/General/Degraves Street Melbourne_edited.jpg'

const Shop = () => {
    return <>
    <div className='backgroundImageWrapper'>
      <img src={background} className={'backgroundImage'} alt="Scooter on floor" />
    </div>
    <h1 class='w-100' style={{backgroundColor:"#7FC5FA", color: "white", fontWeight: "bold", textAlign: "center",fontSize:"3rem" }}>SHOP</h1>
      <div className=" row" style={{border:"solid", padding:"5px", margin:"5px",backgroundColor:"#fff"}}>
        <div className="w-75" style={{padding:"20px"}}>
          <b>THIS WAY OF LIFE OFFICIAL FILM ENAMEL PIN BADGE</b>
          <p>90% OF THE PROFITS ARE REINVESTED INTO THE MAKING OF THE FILM AND THE REMAINING 10% IS DONATED TO “HELP FOR HEROES”</p>
          <a className='btn btn-primary' style={{float:"right"}} href='https://thebadgeman.shop/product/this-way-of-life-official-film-enamel-pin-badge/'>Buy Now from Badgeman</a>
        </div>
        <div className="w-25">
          <img src={badge} className='w-100' alt="TWOL Badge"/>
        </div>
      </div>
    </>;
  };
  
  export default Shop;
  
import background from '../images/General/Background.jpg'


const Nopage = () => {
    return<>
    <div className='backgroundImageWrapper'>
      <img src={background} className={'backgroundImage'} alt="Scooter on floor" />
    </div>
    <h1 style={{marginTop:"50px",padding:"20px", borderRadius:"10px", color:"white", fontWeight:"bolder", backdropFilter:"blur(10px)"}}>Page Not Found</h1>
    <a className='btn btn-primary w-100' href='#/'>Back To Home</a>
    </>;
  
  };
  
  export default Nopage;
  
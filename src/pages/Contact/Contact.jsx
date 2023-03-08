import Joker from '../../images/General/Joker Card Skattered.jpg'
import contact from '../../images/General/FRONT CARD.png'

const Contact = () => {
  return (<>
    <div className='backgroundImageWrapper'>
      <img src={Joker} className={'backgroundImage'} alt="Scooter on floor" />
    </div>
    <h1 class='w-100' style={{backgroundColor:"teal", color: "white", fontWeight: "bold", textAlign: "center",fontSize:"3rem" }}>CONTACT US</h1>
    <div className='row'>
      <div className='col-md-8'>
      <iframe title="contact_form" className='w-100' src="https://docs.google.com/forms/d/e/1FAIpQLSe7_MZ_vvtrkzjHUF9RM_azUWI_1MVvlg1vzjYNTWvTTWmvUA/viewform?embedded=true" height="1250" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

      </div>
      <div className='col-md-4'>
        <img src={contact} className="w-100" alt="TWOL business card"></img>
      </div>
    </div>
  </>);
};

export default Contact;

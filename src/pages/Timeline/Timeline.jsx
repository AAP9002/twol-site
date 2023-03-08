import background from '../../images/General/margate.jpg'
import TEV from './TimelineEvents'

const Timeline = () => {
  return <>
    <div className='backgroundImageWrapper'>
      <img src={background} className={'backgroundImage'} alt="margate background" />
    </div>
    <h1 class='w-100' style={{backgroundColor:"#FAB57F", color: "white", fontWeight: "bold", textAlign: "center",fontSize:"3rem" }}>TIMELINE</h1>

    <TEV/>
  </>;
};

export default Timeline;

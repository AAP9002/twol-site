import background from '../../images/General/margate.jpg'
import './Timeline.css'
import SkinandMod from '../../images/General/MOD AND SKIN 1A.png'
import clip from '../../videos/02 - TWOL Outro Logo.mp4'

const Timeline = () => {
  return <>
    <div className='backgroundImageWrapper'>
      <img src={background} className={'backgroundImage'} alt="margate background" />
    </div>

    <ul class="timeline">
      <li>
        <div class="direction-r">
          <div class="flag-wrapper">
            <span class="flag">Ongoing...</span>
            <span class="time-wrapper"><span class="time">Present</span></span>
          </div>
          <div class="desc">
            <p>Thank you for your support and interest in TWOL😀. For the latest updates, please check out our social</p>
            <a style={{ fontSize: "1.5rem" }} href='https://www.facebook.com/groups/277301879544554'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </a>
          </div>
        </div>
      </li>
      <li>
        <div class="direction-l">
          <div class="flag-wrapper">
            <span class="flag">Filming Sizzle Reel🎥</span>
            <span class="time-wrapper"><span class="time">Sep 6, 2021</span></span>
          </div>
          <div class="desc">
            <p>Filming started!</p>
            <video className='w-100' src={clip}type='video/mp4' controls autoplay ></video>
          </div>
        </div>
      </li>
      <li>
        <div class="direction-r">
          <div class="flag-wrapper">
            <span class="flag">In the studio🎧</span>
            <span class="time-wrapper"><span class="time">Aug 25, 2021</span></span>
          </div>
          <div class="desc">
            <h3>Just finished a busy few days in the Studio </h3>
            <p>Filming for the sizzle reel starts on the 6th September when we will be sharing some of the updates. Until then keep em peeled and as always keep on keepin on</p>
          </div>
        </div>
      </li>

      <li>
        <div class="direction-l">
          <div class="flag-wrapper">
            <span class="flag">TWOL Badge Available</span>
            <span class="time-wrapper"><span class="time">Jul 17, 2021</span></span>
          </div>
          <div class="desc">
            <h3>Official TWOL film badge now available to buy</h3>
            Coming soon to our shop the OFFICIAL film badge sporting the 5 colour logo.  Made to a very high standard by none other than the renowned The Badge Man Ltd direct from his shop.  Please visit This Way of Life Archives - The Badgeman Ltd and whilst there check out the other amazing badges on offer....
            <a className='btn btn-primary' href='https://thebadgeman.shop/product/this-way-of-life-official-film-enamel-pin-badge/'>Buy Now from Badgeman</a>
          </div>
        </div>
      </li>
      <li>
        <div class="direction-r">
          <div class="flag-wrapper">
            <span class="flag">Big Thanks!</span>
            <span class="time-wrapper"><span class="time">Aug 1, 2021 </span></span>
          </div>
          <div class="desc"><p>Hi all  and many thanks for your support with This Way Of Life.  We didnt crack the crowdfunding sum but we never gave up.   Thanks to the ease in the Covid Lockdown we have managed to get out and about and drum up more support for the project.  Its been hectic but short of signing contracts we have been blessed with a backer to support the full feature.  So its socks up as we stand waiting for the gun to launch us onto the road to make TWOL come to life.  Loads of exciting news to share as contracts are signed.
            <br /><br />
            Your amazing support got us to this stage and we cant thankyou enough for believing in us.
            <br /><br />
            If you supported us with a donation we will announce how much we will be contributing to our chosen charity Help For Heroes.
            <br /><br />
            If you supported us through purchasing a Perk I will be in touch individually but we are on track to manage posting by the end of September.  Keep em peeled for announcements.
            <br /><br />
            Once again a big THANK YOU from all at Team TWOL and here's to announcing more about the feature in the coming weeks x
          </p>     </div>
        </div>
      </li>

      <li>
        <div class="direction-l">
          <div class="flag-wrapper">
            <span class="flag">Crowdfunding</span>
            <span class="time-wrapper"><span class="time">Jun - Aug, 2021</span></span>
          </div>
          <div class="desc">
            <h3>We've launched our crowdfunding programme</h3>
            <p><a href='https://www.indiegogo.com/projects/this-way-of-life-twol-the-promo-film/x/26629334#/'>This Way Of Life 'TWOL' the Promo Film | Indiegogo</a> Please take a look and support us whilst bagging yourself one of our amazing Backer Rewards.  Don't worry if you cant support us financially your help in spreading the word will help us immensely.  We cant make this film without you so please 'Shout it from the top' and Keep on keepin on...</p>
          </div>
        </div>
      </li>

      <li>
        <div class="direction-r">
          <div class="flag-wrapper">
            <span class="flag">TWOL</span>
            <span class="time-wrapper"><span class="time">May 18, 2021</span></span>
          </div>
          <div class="desc">
            <p>Big announcements coming soon keep em peeled</p>
            <img src={SkinandMod} alt="Skin and Mod" className='w-100' />
          </div>
        </div>
      </li>

    </ul>


  </>;
};

export default Timeline;

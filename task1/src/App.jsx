import React from 'react'

const App = () => {
  return (
    <main>
    <nav>
      <h2>Horizon Courts</h2>
      <div className="move">
        <button className='btnmove'>About us</button>
        <button className='btnmove'>Services</button>
        <button className='btnmove'>Coaches</button>
        <button className='btnmove'>Events</button>
        <button className='btnmove'>Contacts</button>
      </div>
      <button className="booknow">Book now</button>
    </nav>
    <section className='firstimg'>
      <div className="top">
        <h1>Unleash Your Inner Champion Today.
            All In One Place.</h1>
        <h4>Join the ultimate tennis experience - where passion meets performance,
            and every swing brings you closer to victory.</h4>
            <button>Start your own journey</button>
      </div>
      <div className="bottom">
        <div className="left">
          <h6>Train with real professionals.
          Get the real results.</h6>
          <button>Visit</button>
        </div>
        <div className="right">
          <button>Instagram</button>
          <button>Facebook</button>
          <button>Tik Tok</button>
        </div>
      </div>
    </section>
    <section className="second">
      <div className="horbtn">
        <button>About horizon</button>
      </div>
      <div className="hordet">
        <h4>At Horizon, we don't just play tennis - we live it. Since 2021,
our club has been a home for players of all levels, from eager
beginners to seasoned pros.</h4>
      </div>
    </section>
    <section className="third">
      <div className='box one'>
        <div className="svg">
           <i class="ri-ping-pong-line"></i>
        </div>
        <div className="span">
          <span className='span1'>Professional hard courts </span>
        <span className='span2'>with tournament-grade
lighting & climate control -
play in</span>
        <span className='span1'> perfect conditions in any seasons</span>
        </div>
        <div className="icon">
          <div className="circle"></div>
        </div>
      </div>
      <div className='box two'>
        <button>Private & Group Lessons</button>
      </div>
      <div className='box three'>
        <div className="coaches">
          <h1>100+</h1>
          <h4>Pro Coaches</h4>
          <h5>Certified professionals ready to boost your
              game from first serve to tournament level.</h5>
        </div>
        <div className="levels">
          <div className="level-name">
            <p>Beginner</p>
            <p>Intermediate</p>
            <p>Advance</p>
          </div>
          <div className="dots">
            <div className="innerdot">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <div className="innerdot">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <div className="innerdot">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
          <div className="num">
            <p>55</p>
            <p>40</p>
            <p>35</p>
          </div>
        </div>
      </div>
    </section>
    <section className="fourth">
      <h4>A few more facts about us in numbers</h4>
    </section>
    <section className="fifth">
      <div className="stats">
        <h1>12,000+</h1>
        <h6>Hours of play anually</h6>
      </div>
      <div className="stats">
        <h1>89%</h1>
        <h6>Player Retention Rate</h6>
      </div>
      <div className="stats">
        <h1>1,200+</h1>
        <h6>Active Members</h6>
      </div>
      <div className="stats">
        <h1>125+</h1>
        <h6>Annual Tounaments</h6>
      </div>
    </section>
    <section className="sixth">
      <div className='box one2'>
        <div className="services">
          <button>Services</button>
          <p>Explore our full range of coaching,
training, and tennis experiences. From
first serve to match point - we've
got the right program for you.</p>
        </div>
        <div className="explore-more">
          <button>Explore more</button>
        </div>
      </div>
      <div className='box two2'>
        <div className="training"><button>Training Programs</button></div>
        <div className="programs">
          <p>Programs designed for
            all ages and abilities.</p>
        </div>
      </div>
      <div className='box three2'>
        <div className="balls">
          <div className="ballbtn">
            <button>Court Access</button>
          </div>
          <p className='tenniscont'>Hourly court rental</p>
        </div>
        <div className="tenniscontent">
          <p>Step into a space built for
players - to grow, compete,
and thrive.</p>
        </div>
      </div>
    </section>
    </main>

  )
}

export default App
